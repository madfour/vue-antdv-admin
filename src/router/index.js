import Vue from 'vue'
import VueRouter from 'vue-router'

// import basicLayout from '@/layouts/basicLayout'

Vue.use(VueRouter)

const defaultRoutes = [
  {
    path: '/',
    // component: basicLayout,
    component: () => import('@/layouts/basicLayout'),
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  defaultRoutes
})

export default router
