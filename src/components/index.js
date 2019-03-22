import Vue from 'vue'
import Button from './Button'
import Message from './Message'

const components = [Button, Message]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

module.export = {
  Button,
  Message
}
