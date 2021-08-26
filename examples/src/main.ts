import { createApp } from 'vue'

import Components from 'element-plus/es/component'
import { makeInstaller } from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

const installer = makeInstaller(Components)


createApp(App).use(installer).mount('#app')
