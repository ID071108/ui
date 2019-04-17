import Button from './SwButton'
import ButtonGroup from './SwButtonGroup'

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
