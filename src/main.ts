import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import WUI from './package'

import App from './App.vue'

import router from './router'
import store from './store'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(store).use(ElementPlus).use(WUI).mount('#app')
