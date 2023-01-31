import { createCSSTokens, createTailwindConfig } from './packages/theme/dist/index.mjs'
import { themes } from './src/themes'

createTailwindConfig('./tailwind.theme.conf.cjs')
createCSSTokens('./src/tailwind.css', themes)
