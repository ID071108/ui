<template>
  <ul class="ui-tabs">
    <li class="active">tab1</li>
    <li>tab2</li>
    <li>tab3</li>
  </ul>
</template>


<script>
export default {
  name: 'Tabs'
}
</script>

<style lang="scss" scoped>
.ui-tabs {
  clear: both;
  padding: 0 16px;
  li {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin: 0 3px;
    padding: 0 16px;
    border: 1px solid #eee;
    border-bottom: 0;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    &.active {
      background-color: #000;
      color: #fff;
    }
  }
}
</style>