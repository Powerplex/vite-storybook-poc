import { existsSync, mkdirSync, writeFileSync } from 'fs'
import parentModule from 'parent-module'
import { join } from 'path'

import { defaultTheme } from './constants.mjs'
import type { Theme } from './types.mjs'
import {
  buildFilePath,
  isHex,
  isStringOrNumber,
  objectEntries,
  toKebabCase,
  toKebabCaseKeys,
} from './utils.mjs'

type NestedObj = Record<string, string | number | Record<string, string | number>>

function toTailwindConfig(theme: Theme): Record<string, Theme[keyof Theme]> {
  const themeCpy: Theme = JSON.parse(JSON.stringify(theme))

  function flatten(obj: Theme, path?: string) {
    objectEntries(obj as unknown as NestedObj).forEach(([key, value]) => {
      if (value !== null && typeof value === 'object') {
        const formattedPath = path ? `--${path}-${key}` : `--${key}`
        flatten(value as unknown as Theme, toKebabCase(formattedPath.replace(/-{3,}/, '--')))

        return
      }

      /* eslint-disable */
      if (isStringOrNumber(value)) {
        const formattedPath =
          /--colors/.test(path || '') && isHex(value)
            ? `rgb(var(${path}-${toKebabCase(key as string)}) / <alpha-value>)`
            : `var(${path}-${toKebabCase(key as string)})`

        /* @ts-ignore */
        obj[key as any] = formattedPath
        /* eslint-enable */
      }
    })
  }

  flatten(themeCpy)

  return toKebabCaseKeys(themeCpy)
}

export function createTailwindConfig(path: string) {
  const { filepath, rootPath } = buildFilePath(join(parentModule() || '', path))

  const folders = filepath.split('/').slice(0, -1)
  folders.reduce((acc, folder) => {
    const folderPath = acc + folder + '/'
    if (!existsSync(folderPath)) {
      mkdirSync(folderPath)
    }

    return folderPath
  }, rootPath)

  writeFileSync(
    rootPath + filepath,
    `module.exports = ${JSON.stringify(toTailwindConfig(defaultTheme))}`,
    {
      flag: 'w',
    }
  )
}
