<template>
  <div class="ui-menu-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiMenuItem'
}
</script>

<style lang="scss" scoped>
.ui-menu-item {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
}
</style>
