<template>
  <transition name="UIMessage--fade">
    <div :class="['ui-message', typeCls]" v-show="visible" @keyup.enter="onKeyUp">
      <i :class="['iconfont', iconCls ]"></i>
      <i class="iconfont icon-close" @click.stop="close" v-if="showClose"></i>
      <p>
        {{message}}
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'UIMessage',
  data() {
    return {
      visible: false,
      type: 'info',
      message: '',
      duration: 3000,
      timer: null,
      closed: false,
      icon: '',
      showClose: false,
      onClose: null
    }
  },
  computed: {
    typeCls() {
      return this.type ? 'ui-message--' + this.type : ''
    },
    iconCls() {
      return 'icon-' + (this.icon ? + this.icon : this.type)
    }
  },
  methods: {
    destroyElement() {
      this.clearTimer()
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.visible = false
          this.$el.addEventListener('transitionend', this.destroyElement)
        }, this.duration)
      }
    },
    clearTimer() {
      clearTimeout(this.timer)
    },
    close() {
      this.visible = false
      this.$el.addEventListener('transitionend', this.destroyElement)
      if (typeof this.onClose === 'function') this.onClose(this)
    },
    onMouseEnter() {
      this.$el.addEventListener('mouseenter', this.clearTimer)
    },
    onMouseLeave() {
      this.$el.addEventListener('mouseleave', this.startTimer)
    },
    keydown(e) {
      if (e.keyCode === 27) {
        this.close()
      }
    }
  },
  mounted() {
    this.startTimer()
    this.onMouseEnter()
    this.onMouseLeave()
    document.addEventListener('keydown', this.keydown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown);
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";
.ui-message {
  position: fixed;
  top: 16px;
  left: 50%;
  display: flex;
  align-items: center;
  min-width: 380px;
  padding: 15px 15px 15px 20px;
  transform: translateX(-50%);
  border: 1px solid #eee;
  border-radius: 6px;
  z-index: $msg_zindex + 1;

  & > .iconfont {
    margin-right: 16px;
    font-size: 20px;
    &.icon-close {
      position: absolute;
      right: 0;
      color: inherit;
    }
  }
  &--success {
    background-color: #f0f9eb;
    border-color: #ebeef5;
    color: $success_color;
  }
  &--info {
    background-color: #edf2fc;
    border-color: #ebeef5;
    color: $info_color;
  }
  &--warning {
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: $warning_color;
  }
  &--error {
    background-color: #fef0f0;
    border-color: #fde2e2;
    color: $alert_color;
  }
}
.UIMessage--fade-enter,
.UIMessage--fade-leave-to {
  opacity: 0;
  top: 0;
}
.UIMessage--fade-enter-active,
.UIMessage--fade-leave-active {
  transition: transform 0.5s, opacity 0.5s, top 0.5s;
}
</style>
