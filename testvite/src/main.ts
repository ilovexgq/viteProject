import { createApp } from 'vue'
import 'normalize.css'
// import './style.css'
import App from './App.vue'

import router from './route'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

import './permission'

import pinia from './store/index'


createApp(App).use(router).use(ElementPlus).use(pinia).mount('#app')
