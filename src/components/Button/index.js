import Button from './Button'
import ButtonGroup from './Button-group'

export const SwButton = {
  install: function(Vue) {
    Vue.component('SwButton', Button)
  }
}

export const SwButtonGroup = {
  install: function(Vue) {
    Vue.component('SwButtonGroup', ButtonGroup)
  }
}
