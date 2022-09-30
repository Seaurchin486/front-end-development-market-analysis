import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './route/route'
import store from './store/store'


import dataV from '@kjgl77/datav-vue3'
import ECharts from 'vue-echarts'
import { use,  registerMap } from "echarts/core"


import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart,
  MapChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  VisualMapComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  MapChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  VisualMapComponent
])

import cherryJSON from './assets/map/hangzhou.json'
const mapJsons = import.meta.glob('./assets/map/*.json', { eager: true, import: 'default' })
console.log(mapJsons)
Object.entries(mapJsons).forEach(([path, jsonValue]) => {
  registerMap(path.split('/').at(-1).split('.')[0] , jsonValue) 
})

const app = createApp(App)
app.component('v-echart', ECharts)
app.use(router)
.use(store)
.use(dataV)
.mount('#app')
