import Vue from 'vue'
import VueRouter from 'vue-router'

const DataTablePage = () => import(/* webpackChunkName: "p-data-table-page" */ '@/components/DataTablePage')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: DataTablePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
