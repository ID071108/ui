<template>
  <div class="ui-row" :style="{alignItem: align, justifyContent: justify}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiRow',
  props: {
    align: {
      type: String,
      default: 'center'
    },
    justify: {
      type: String,
      default: 'space-between'
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-row {
  display: flex;
}
</style>
