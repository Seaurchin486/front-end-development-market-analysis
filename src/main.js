import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './route/route'
import store from './store/store'

import dataV from '@kjgl77/datav-vue3'
import ECharts from 'vue-echarts'
import { use } from "echarts/core"

import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  TitleComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent,
  TitleComponent
])

const app = createApp(App)
app.component('v-echart', ECharts)
app.use(router)
.use(store)
.use(dataV)
.mount('#app')
