import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from "@/views/test/Test"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redict: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "payment" */ '../views/About.vue')
      },
      {
        path: '/payment/online',
        name: 'Online',
        component: () => import(/* webpackChunkName: "payment" */ '../views/payment/Online.vue')
      },
      {
        path: '/payment/invoicing',
        name: 'Invoicing',
        component: () => import(/* webpackChunkName: "payment" */ '../views/payment/Invoicing.vue')
      },
      {
        path: '/payment/subscriptions',
        name: 'Subscriptions',
        component: () => import(/* webpackChunkName: "payment" */ '../views/payment/Subscriptions.vue')
      },
      {
        path: "/test",
        component: Test
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
