import type { Theme } from './types.mjs'

export const defaultTheme: Theme = {
  /** The screens key allows you to customize the responsive breakpoints in your project. */
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  borderWidth: {
    none: '0',
    xs: '0.1rem',
    s: '0.2rem',
    m: '0.4rem',
  },
  /** The colors key allows you to customize the global color palette for your project. */
  colors: {
    transparent: 'transparent',
    bg: {
      primary: '#f28133',
      primaryAccent: '#ad4c07',
      primarySubtle: '#fba56c',
      secondary: '#3481f2',
      secondaryAccent: '#074aad',
      secondarySubtle: '#4c93f7',
      body: '#fff',
    },
    bd: {
      primary: '#f28133',
      secondary: '#3481f2',
    },
    fg: {
      default: '#334155',
      accent: '#1161d7',
      cta: '#000',
      ctaInverse: '#fff',
    },
  },
  fontFamily: {
    openSans:
      'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',
  },
  fontSize: {
    xs: '1rem', // 0.1rem = 1px
    s: '1.2rem',
    m: '1.4rem',
    l: '1.6rem',
    xl: '1.8rem',
    '2xl': '2rem',
    '3xl': '2.4rem',
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    xs: '1.4rem',
    s: '1.7rem',
    m: '1.9rem',
    l: '2.2rem',
    // title3: "2.4rem",
    // title2: "2.6rem",
    // title1: "2.8rem",
    xl: '2.4rem',
    '2xl': '2.6rem',
    '3xl': '2.8rem',
  },
  width: {
    pageMin: '320px',
    pageMax: '1066px',
  },
  borderRadius: {
    none: '0',
    xs: '0.4rem',
    s: '0.8rem',
    m: '1.6rem',
    l: '2.4rem',
    full: '100%',
  },
  boxShadow: {
    none: 'none',
    normal: '0 -1px 4px 0 rgba(26, 26, 26, 0.08), 0 4px 8px 0 rgba(26, 26, 26, 0.12)',
    highlighted: '0 -1px 8px 0 rgba(26, 26, 26, 0.12), 0 4px 8px 0 rgba(0, 0, 0, 0.14)',
  },
  /** The spacing key allows you to customize the global spacing and sizing scale for your project. */
  spacing: {
    auto: 'auto',
    none: '0',
    xs: '0.4rem',
    s: '0.8rem',
    m: '1.6rem',
    l: '2.4rem',
    xl: '3.2rem',
    xxl: '4rem',
  },
  zIndex: {
    hide: -1,
    base: 0,
    raised: 1,
    dropdown: 1000,
    sticky: 1100,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
}
