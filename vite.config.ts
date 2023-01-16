/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@docs',
        replacement: path.resolve(__dirname, './docs'),
      },
      {
        find: '@devtools',
        replacement: path.resolve(__dirname, './src/devtools'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './packages/components'),
      },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, './vitest.setup.ts'),
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html', 'json-summary'],
    },
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
})
