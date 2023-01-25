import { writeFileSync } from 'fs'

import { placeholderTheme } from './placeholderTheme.js'
import type { Theme } from './types.js'
import { isHex, objectEntries, toKebabCase, toKebabCaseKeys } from './utils.js'

function toTailwindConfig(theme: Theme): Record<string, Theme[keyof Theme]> {
  const themeCpy: Theme = JSON.parse(JSON.stringify(theme))

  function flatten(obj: Theme, path?: string) {
    objectEntries(obj as unknown as Record<string | number, number>).forEach(([key, value]) => {
      if (value !== null && typeof value === 'object') {
        const formattedPath = path ? `--${path}-${key}` : `--${key}`
        flatten(value as unknown as Theme, toKebabCase(formattedPath.replace(/-{3,}/, '--')))

        return
      }

      /* eslint-disable */
      if (typeof value === 'string') {
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
  writeFileSync(path, `module.exports = ${JSON.stringify(toTailwindConfig(placeholderTheme))}`, {
    flag: 'w',
  })
}
