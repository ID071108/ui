import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import SwanUI from '@/components'
import Mock from './mock/index'
import './utils/api'
import './components'
import './assets/style/reset.css'
import './assets/style/common.css'
import './assets/style/iconfont.css'
import './assets/scss/common.scss'

Mock.mockData()

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#app')
