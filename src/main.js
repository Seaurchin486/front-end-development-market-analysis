import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './route/route'
import store from './store/store'

import dataV from '@kjgl77/datav-vue3'

createApp(App)
.use(router)
.use(store)
.use(dataV)
.mount('#app')
