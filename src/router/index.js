import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home.vue'
import ButtonDemo from '@/pages/demo/button-demo'
import MessageDemo from '@/pages/demo/message-demo'
import LayoutDemo from '@/pages/demo/layout-demo'
import MenuDemo from '@/pages/demo/menu-demo'
import UnAuthorization from '@/pages/error-page/err-401'
import NotFound from '@/pages/error-page/err-404'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      hasMaster: true,
      name: '活动管理'
    }
  },
  {
    path: '/button-demo',
    component: ButtonDemo,
    meta: {
      hasMaster: true,
      name: 'button'
    }
  },
  {
    path: '/message-demo',
    component: MessageDemo,
    meta: {
      hasMaster: true,
      name: 'message'
    }
  },
  {
    path: '/layout-demo',
    component: LayoutDemo,
    meta: {
      hasMaster: true,
      name: 'layout'
    }
  },
  {
    path: '/menu-demo',
    component: MenuDemo,
    meta: {
      hasMaster: true,
      name: 'menu'
    }
  },
  {
    path: '/error/401',
    component: UnAuthorization,
    meta: {
      hasMaster: false,
      name: '401'
    }
  },
  {
    path: '/*',
    component: NotFound,
    meta: {
      hasMaster: false,
      name: '404'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  next()
  // console.log('before')
})
router.afterEach((to, from) => {
  // console.log('after')
})

export default router
