import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import importElementPlus from 'vite-plugin-element-plus'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importElementPlus(),
  ],
})
