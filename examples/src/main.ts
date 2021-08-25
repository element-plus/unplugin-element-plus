import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCN from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

import App from './App.vue'

createApp(App).use(ElementPlus, {
  locale: zhCN,
}).mount('#app')
