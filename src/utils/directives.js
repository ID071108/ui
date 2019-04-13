import Vue from 'vue'
/**
 * v-focus
 * @desc 自动聚焦, 一般用于input
 */
Vue.directive('focus', {
  bind: function() {
    console.log('bind')
  },
  inserted: function(el, binding, vnode, oldVnode) {
    console.log('inserted', el, binding, vnode, oldVnode)
    el.focus()
  },
  update: function() {
    console.log('update')
  },
  componentUpdated: function() {
    console.log('componentUpdated')
  },
  unbind: function() {
    console.log('unbind')
  }
})

Vue.directive('b', function() {
  console.log(123)
})
