<template>
  <div class="ui-sub-menu">
    <p @click="handleCollapse" class="name">{{name}}</p>
    <!-- <transition name="slide-down" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter" v-on:enter-cancelled="enterCancelled" v-on:before-leave="beforeLeave" v-on:leave="leave" v-on:after-leave="afterLeave" v-on:leave-cancelled="leaveCancelled">
      <div class="content" v-show="show" ref="aaa">
        <slot>s
        </slot>
      </div>
    </transition> -->
    <transition name="slide-down">
      <div class="content" v-show="show" ref="aaa">
        <slot>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'UiSubMenu',
  props: {
    name: {
      required: false,
      default: 11
    },
    a: {
      validator: function (value) {
        console.log(value)
        return value === 1
      }
    },
    b: {
      type: Object,
      default: function () {
        return { message: 'return from factory function' }
      }
    }
  },
  data() {
    return {
      show: false
    }
  },
  created() {
    // console.log(this.a, this.b)
  },
  methods: {
    handleCollapse() {
      this.show = !this.show
      console.log(this.$el.childrenNode, this.$refs.aaa.childNodes)
    },
    beforeEnter: function (el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      // ...
      done()
    },
    afterEnter: function (el) {
      // ...
    },
    enterCancelled: function (el) {
      // ...
    },

    // --------
    // 离开时
    // --------

    beforeLeave: function (el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function (el, done) {
      // ...
      done()
    },
    afterLeave: function (el) {
      // ...
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function (el) {
      // ...
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-sub-menu {
  .name {
    height: 50px;
    line-height: 50px;
  }
  .content {
    overflow: hidden;
    margin: 0 0 0 20px;
  }
}
.slide-down-enter-active {
  animation: slide-down 0.5s;
}
.slide-down-leave-active {
  animation: slide-down 0.5s reverse;
}
@keyframes slide-down {
  0% {
    height: 0;
  }
  100% {
    height: 100;
  }
}
</style>
