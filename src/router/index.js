import Vue from 'vue'
import VueRouter from 'vue-router'

import BasicLayout from '@/layouts/BasicLayout'

Vue.use(VueRouter)

export const defaultRoutes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: { title: 'home', icon: '' }
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: defaultRoutes
})
