import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/home'
import NotFound from '@/views/404'

const routes = [
  { path: '/home', component: Home },
  { path: '/*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
