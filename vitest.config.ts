import { defineConfig } from 'vitest/config'
import esbuild from 'rollup-plugin-esbuild'

export default defineConfig({
  plugins: [esbuild({ target: 'node14' })],
})
