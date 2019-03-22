<template>
  <div :class="['ui-col', spanCls, xsCls, smCls, mdCls, lgCls, xlCls]">
    <div class="grid-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UICol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    xs: {
      type: Number,
      default: 0
    },
    sm: {
      type: Number,
      default: 0
    },
    md: {
      type: Number,
      default: 0
    },
    lg: {
      type: Number,
      default: 0
    },
    xl: {
      type: Number,
      default: 0
    }
  },
  computed: {
    spanCls() {
      return 'ui-col-' + this.span
    },
    xsCls() {
      return this.xs ? 'ui-col-xs-' + this.xs : ''
    },
    smCls() {
      return this.sm ? 'ui-col-sm-' + this.sm : ''
    },
    mdCls() {
      return this.md ? 'ui-col-md-' + this.md : ''
    },
    lgCls() {
      return this.lg ? 'ui-col-lg-' + this.lg : ''
    },
    xlCls() {
      return this.xl ? 'ui-col-xl-' + this.xl : ''
    }
  }
}
</script>

<style lang="scss" scoped>
// @import "../../assets/scss/components/col.scss";
// @function
$col: (100%/24);

@mixin colMixin($n) {
  .ui-col-#{$n} {
    width: 100%/24 * $n;
  }
}

.ui-col {
  position: relative;
  border-radius: 4px;
}
.grid-content {
  min-height: 36px;
}
[class*="ui-col-"] {
  float: left;
  box-sizing: border-box;
}
@for $i from 1 through 24 {
  .ui-col-#{$i} {
    width: 100%/24 * $i;
  }
}

@media only screen and (max-width: 767px) {
  @for $i from 1 through 24 {
    .ui-col-xs-#{$i} {
      width: 100%/24 * $i;
    }
  }
}
@media only screen and (min-width: 768px) {
  @for $i from 1 through 24 {
    .ui-col-sm-#{$i} {
      width: 100%/24 * $i;
    }
  }
}
@media only screen and (min-width: 992px) {
  @for $i from 1 through 24 {
    .ui-col-md-#{$i} {
      width: 100%/24 * $i;
    }
  }
}
@media only screen and (min-width: 1200px) {
  @for $i from 1 through 24 {
    .ui-col-lg-#{$i} {
      width: 100%/24 * $i;
    }
  }
}
@media only screen and (min-width: 1920px) {
  @for $i from 1 through 24 {
    .ui-col-xl-#{$i} {
      width: 100%/24 * $i;
    }
  }
}
</style>

