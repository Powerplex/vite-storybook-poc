import { merge } from 'remeda'
import { PartialDeep } from 'type-fest'

import { defaultTheme } from './constants.mjs'
import type { Theme } from './types.mjs'

export function createTheme(theme: PartialDeep<Theme> = {}): Theme {
  return merge(defaultTheme, theme)
}
