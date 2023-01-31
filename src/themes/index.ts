import type { Theme } from 'packages/theme/src/types.mjs'

import { alternativeTheme } from './alternative.js'
import { defaultTheme } from './default.js'
import { defaultDarkTheme } from './defaultDark.js'

const themes = {
  default: defaultTheme,
  defaultDark: defaultDarkTheme,
  alternative: alternativeTheme,
}

type ThemeNames = keyof typeof themes

export { themes }
export type { Theme, ThemeNames }
