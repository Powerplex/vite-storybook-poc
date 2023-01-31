import { createTailwindTokens } from './packages/theme/dist/index.mjs'
import { themes } from './src/themes'

createTailwindTokens('./src/tailwind.css', themes)
