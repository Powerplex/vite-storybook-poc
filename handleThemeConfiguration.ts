import {
  createCSSScopedTokensDeclarations,
  createCSSTokens,
  createCSSVarsMapper,
  createTailwindConfig,
} from './packages/theme/src/index.mjs'
import { placeholderTheme } from './packages/theme/src/placeholderTheme.mjs'
import { themes } from './src/themes/index.js'

createTailwindConfig('./tailwind.theme.conf.cjs')
createCSSTokens('./src/tailwind.css', themes)

const cssVarsMapper = createCSSVarsMapper(placeholderTheme)

createCSSScopedTokensDeclarations({
  path: './src/override.css',
  cssVarsMapper,
  configs: [],
})
