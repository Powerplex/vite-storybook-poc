import { existsSync, mkdirSync, writeFileSync } from 'fs'
import hexRgb from 'hex-rgb'
import parentModule from 'parent-module'
import { join } from 'path'
import { toPairs } from 'remeda'
import { PartialDeep } from 'type-fest'

import { componentCxMapper, defaultTheme } from './constants.mjs'
import { createCSSVarsMapper } from './createCSSVarsMapper.mjs'
import type { ComponentName, Theme, VariantsConfig } from './types.mjs'
import { buildFilePath, isHex } from './utils.mjs'

interface Props {
  component: ComponentName
  override: PartialDeep<Theme>
  variants?: VariantsConfig[Props['component']]
  apply?: string
}

const cssVarsMapper = createCSSVarsMapper(defaultTheme)

function buildCSSScopedTokensDeclaration({ component, override, variants, apply }: Props): string {
  const styles: { [key: string]: string | number } = {}

  const traverse = (partialValue: PartialDeep<Theme>, originalValue: Theme, path: string[]) => {
    /* eslint-disable */
    for (const key in partialValue) {
      /* @ts-ignore */
      if (typeof partialValue[key] === 'object' && partialValue[key] !== null) {
        /* @ts-ignore */
        traverse(partialValue[key], originalValue[key], [...path, key])
      } else {
        /* @ts-ignore */
        const originalPath = originalValue[key]
        if (typeof originalPath === 'string') {
          /* @ts-ignore */
          const value = partialValue[key]
          if (isHex(value)) {
            const { red, green, blue } = hexRgb(value)
            styles[originalPath] = `${red} ${green} ${blue}`
          } else {
            styles[originalPath] = value
          }
        }
      }
    }
    /* eslint-enable */
  }

  traverse(override, cssVarsMapper, [])

  const cssSelector =
    // https://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/#safely-increasing-specificity
    `.${componentCxMapper[component]}.${componentCxMapper[component]}` +
    toPairs(variants ?? {})
      .map(([key, value]) => {
        return `[data-${key}="${value}"]`
      })
      .join('')

  const cssDeclarations = toPairs(styles)
    .map(([key, value]) => {
      return `${key}:${value};`
    })
    .join('')

  return `${cssSelector} {
    ${cssDeclarations}
    ${apply ? `@apply ${apply}` : ''}
  }`
}

interface CreateCSSScopedTokensDeclarations {
  path: string
  configs: Props[]
}
export function createCSSScopedTokensDeclarations({
  path,
  configs,
}: CreateCSSScopedTokensDeclarations) {
  const { filepath, rootPath } = buildFilePath(join(parentModule() || '', path))

  const folders = filepath.split('/').slice(0, -1)
  folders.reduce((acc, folder) => {
    const folderPath = acc + folder + '/'
    if (!existsSync(folderPath)) {
      mkdirSync(folderPath)
    }

    return folderPath
  }, rootPath)

  if (!configs.length) {
    return
  }

  const data = configs.map(buildCSSScopedTokensDeclaration).join('')

  writeFileSync(rootPath + filepath, data, {
    flag: 'w',
  })
}
