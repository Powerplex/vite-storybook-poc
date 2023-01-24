import path from 'path'
import { terser } from 'rollup-plugin-terser'
import dts from 'vite-plugin-dts'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require(path.resolve(__dirname, '../package.json'))

const deps = Object.keys(pkg.dependencies || {})
const devDeps = Object.keys(pkg.devDependencies || {})

export default {
  build: {
    target: 'es2015',
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [...deps, ...devDeps],
      plugins: [terser()],
    },
  },
  plugins: [
    dts({
      /** To avoid bundling types into a package/components folder inside of dist */
      entryRoot: './src',
    }),
  ],
}
