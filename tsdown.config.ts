import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/*.ts'],
  clean: true,
  dts: true,
  target: 'node18',
})
