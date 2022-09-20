import { createRouter, createWebHashHistory } from 'vue-router'

const SalaryDistribution = () => import('./views/SalaryDistribution.vue')
const AreaDistribution = () => import('./views/AreaDistribution.vue')
const PopularSkill = () => import('./views/PopularSkill.vue')

const routers = [
  {path: '/', redirect: '/hefei/SalaryDistribution'},
  {path: '/:city/SalaryDistribution', component: SalaryDistribution},
  {path: '/:city/AreaDistribution', component: AreaDistribution},
  {path: '/:city/PopularSkill', component: PopularSkill}
]

export default createRouter({
  history: createWebHashHistory(),
  routes: routers
})