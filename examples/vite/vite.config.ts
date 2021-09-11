import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from '../../dist/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({
      lib: 'element-plus',
      useSource: true,
    }),
  ],
})
