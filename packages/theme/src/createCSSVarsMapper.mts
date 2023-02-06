import type { Theme } from './types.mjs'
import { isStringOrNumber, objectEntries, toKebabCase } from './utils.mjs'

export function createCSSVarsMapper(theme: Theme): Theme {
  const themeCpy: Theme = JSON.parse(JSON.stringify(theme))

  function traverse(obj: Theme, path?: string) {
    objectEntries<any>(obj).forEach(([key, value]) => {
      if (value !== null && typeof value === 'object') {
        const formattedPath = path ? `--${path}-${key as string}` : `--${key as string}`

        traverse(value as unknown as Theme, toKebabCase(formattedPath.replace(/-{3,}/, '--')))

        return
      }

      if (isStringOrNumber(value)) {
        const formattedPath = `${path}-${toKebabCase(key as string)}`
        /* eslint-disable-next-line */
        // @ts-ignore
        obj[key] = formattedPath
      }
    })
  }

  traverse(themeCpy)

  return themeCpy
}
