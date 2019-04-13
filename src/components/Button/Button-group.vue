<template>
  <div class="ui-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'SwButtonGroup'
};
</script>

<style lang="scss" scoped>
.ui-button-group {
  .ui-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>
