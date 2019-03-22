import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/home'
import ButtonDemo from '@/views/button-demo'
import MessageDemo from '@/views/message-demo'
import LayoutDemo from '@/views/layout-demo'
import MenuDemo from '@/views/menu-demo'
import NotFound from '@/views/404'

const routes = [
  { path: '/', component: Home },
  { path: '/button-demo', component: ButtonDemo },
  { path: '/message-demo', component: MessageDemo },
  { path: '/layout-demo', component: LayoutDemo },
  { path: '/menu-demo', component: MenuDemo },
  { path: '/*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from) => {})

export default router
