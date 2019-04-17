<template>
  <button :class="[defaultCls, specCls, plainCls, disabledCls, roundCls, circleCls, sizeCls]" @click="handleClick" :disabled="disabled">
    <slot></slot>
  </button>
</template>


<script>
export default {
  name: 'UIButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      defaultCls: 'ui-button'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  },
  computed: {
    specCls() {
      return 'ui-button--' + this.type
    },
    plainCls() {
      return this.plain ? 'is-plain' : ''
    },
    disabledCls() {
      return this.disabled ? 'is-disabled' : ''
    },
    roundCls() {
      return this.round && !this.circle ? 'is-round' : ''
    },
    circleCls() {
      return this.circle ? 'is-circle' : ''
    },
    sizeCls() {
      return this.size ? 'ui-button--' + this.size : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";
@import "../../assets/scss/mixins.scss";

.ui-button {
  display: inline-block;
  line-height: 1;
  margin: 0;
  padding: 12px 20px;
  box-sizing: border-box;
  text-align: center;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  -webkit-appearance: none;
  background-color: #fff;
  border: 1px solid #dedfe6;
  color: #606266;
  user-select: none;
  &:focus,
  &:hover {
    @include btn--effect(#ecf5ff, #c6e2ff, #409eff);
  }
  &.active {
    @include btn--effect("", #3a8ee6, #3a8ee6);
  }
  &.is-plain {
    &:hover,
    &:focus {
      @include btn--effect(#fff, #409eff, #409eff);
    }
    &:active {
      @include btn--effect(#fff, #3a8ee6, #3a8ee6);
    }
    &.is-disabled {
      @include btn--effect__disabled(#fff, #ebeef5, #c0c4cc);
    }
  }
  &.is-round {
    padding: 12px 23px;
    border-radius: 20px;
  }
  &.is-circle {
    padding: 12px;
    border-radius: 50%;
  }
  &.is-disabled {
    @include btn--effect__disabled(#fff, #ebeef5, #c0c4cc);
  }
  &--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
    &.is-round {
      padding: 10px 20px;
      border-radius: 19px;
    }
  }
  &--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
    &.is-round {
      padding: 9px 15px;
      border-radius: 18px;
    }
  }
  &--mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
    &.is-round {
      padding: 7px 15px;
      border-radius: 16px;
    }
  }
  &--primary {
    @include btn--effect__default(#409eff, #66b1ff, #3a8ee6);
    &.is-plain {
      @include btn--effect__plain(
        #ecf5ff,
        #b3d8ff,
        #409eff,
        #409eff,
        #409eff,
        #fff,
        #3a8ee6,
        #3a8ee6,
        #fff
      );
      &.is-disabled {
        @include btn--effect__disabled(#ecf5ff, #d9ecff, #8cc5ff);
      }
    }
    &.is-disabled {
      @include btn--effect__disabled(#a0cfff, #a0cfff, #fff);
    }
  }
  &--success {
    @include btn--effect__default(#67c23a, #85ce61, #5daf34);
    &.is-plain {
      @include btn--effect__plain(
        #f0f9eb,
        #c2e7b0,
        #67c23a,
        #67c23a,
        #67c23a,
        #fff,
        #5daf34,
        #5daf34,
        #fff
      );
      &.is-disabled {
        @include btn--effect__disabled(#f0f9eb, #e1f3d8, #a4da89);
      }
    }
    &.is-disabled {
      @include btn--effect__disabled(#b3e19d, #b3e19d, #fff);
    }
  }
  &--info {
    @include btn--effect__default(#909399, #a6a9ad, #82848a);
    &.is-plain {
      @include btn--effect__plain(
        #f4f4f5,
        #d3d4d6,
        #909399,
        #909399,
        #909399,
        #fff,
        #82848a,
        #82848a,
        #fff
      );
      &.is-disabled {
        @include btn--effect__disabled(#f4f4f5, #e9e9eb, #bcbec2);
      }
    }
    &.is-disabled {
      @include btn--effect__disabled(#c8c9cc, #c8c9cc, #a4da89);
    }
  }
  &--warning {
    @include btn--effect__default(#e6a23c, #ebb563, #cf9236);
    &.is-plain {
      @include btn--effect__plain(
        #fdf6ec,
        #f5dab1,
        #e6a23c,
        #e6a23c,
        #e6a23c,
        #fff,
        #cf9236,
        #cf9236,
        #fff
      );
      &.is-disabled {
        @include btn--effect__disabled(#fdf6ec, #faecd8, #a4da89);
      }
    }
    &.is-disabled {
      @include btn--effect__disabled(#f3d19e, #f3d19e, #f0c78a);
    }
  }
  &--danger {
    @include btn--effect__default(#f56c6c, #f78989, #dd6161);
    &.is-plain {
      @include btn--effect__plain(
        #fef0f0,
        #fbc4c4,
        #f56c6c,
        #f56c6c,
        #f56c6c,
        #fff,
        #dd6161,
        #dd6161,
        #fff
      );
      &.is-disabled {
        @include btn--effect__disabled(#fef0f0, #fde2e2, #f9a7a7);
      }
    }
    &.is-disabled {
      @include btn--effect__disabled(#fab6b6, #fab6b6, #f0c78a);
    }
  }
}
</style>