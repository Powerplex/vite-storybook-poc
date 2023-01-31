import { createCSSTokens, createTailwindConfig } from './packages/theme/src/index.mjs'
import { themes } from './src/themes/index.js'

createTailwindConfig('./tailwind.theme.conf.cjs')
createCSSTokens('./src/tailwind.css', themes)
