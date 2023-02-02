import { createTheme } from '../../packages/theme/src/createTheme.mjs'
import type { Theme } from '../../packages/theme/src/types.mjs'

export const defaultDarkTheme: Theme = createTheme({
  colors: {
    transparent: 'transparent',
    bg: {
      primary: '#eb8137',
      primaryAccent: '#fac29f',
      primarySubtle: '#d76a1d',
      secondary: '#3581eb',
      secondaryAccent: '#9fc5fa',
      secondarySubtle: '#1d68d7',
      body: '#0e172a',
    },
    bd: {
      primary: '#eb8137',
      secondary: '#3581eb',
    },
    fg: {
      default: '#94a3b8',
      accent: '#6ea8f6',
      cta: '#000',
      ctaInverse: '#fff',
    },
  },
})
