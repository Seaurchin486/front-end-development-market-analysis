import { createRouter, createWebHashHistory } from 'vue-router'

const SalaryDistribution = () => import('./views/SalaryDistribution.vue')
const AreaDistribution = () => import('./views/AreaDistribution.vue')
const PopularSkill = () => import('./views/PopularSkill.vue')

const routers = [
  {path: '/', redirect: '/SalaryDistribution'},
  {path: '/SalaryDistribution', component: SalaryDistribution},
  {path: '/AreaDistribution', component: AreaDistribution},
  {path: '/PopularSkill', component: PopularSkill}
]

export default createRouter({
  history: createWebHashHistory(),
  routes: routers
})