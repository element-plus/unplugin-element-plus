import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: ['src/*.ts'],
  splitting: true,
  cjsInterop: true,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  target: 'node14',
})
