import Vue from 'vue'
import MessageComponent from './MessageComponent'

let MessageConstructor = Vue.extend(MessageComponent)
let instance
let instances = []
let mid = 1

const Message = function(options) {
  if (Vue.prototype.$isServer) return
  options = options || {}
  let id = 'ui-message--' + mid++
  instance = new MessageConstructor({
    data: options
  })

  instance.id = instance.id
  instance.vm = instance.$mount()
  instance.vm.visible = true
  document.body.appendChild(instance.vm.$el)
  instances.push(instance)
  return instance.vm
}

;['success', 'warning', 'info', 'error'].forEach(type => {
  // debugger
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

Message.onClose = function(id) {
  for (let i = 0; i < instances.length; i++) {
    if (instances[i].id === id) {
      instances.splice(i, 1)
      break
    }
  }
}

Vue.prototype.$message = Message

export default Message
