<template>
  <div class="layout-demo">
    <ui-row>
      <ui-col :span="4" :xs="8">4</ui-col>
      <ui-col :span="2" :xs="8">2</ui-col>
      <ui-col :span="1" :xs="8">1</ui-col>
    </ui-row>
    <ui-col :span="2" :xs="4" :sm="6" :md="8" :lg="12" :xl="24">24</ui-col>
    <ui-col :span="12">12</ui-col>
    <ui-col :span="8">8</ui-col>
    <ui-col :span="6">6</ui-col>

  </div>
</template>

<script>
import UiRow from '@/components/Row'
import UiCol from '@/components/Col'
export default {
  name: 'LayoutDemo',
  components: {
    UiRow,
    UiCol
  }
}
</script>

<style lang="scss" scoped>
.layout-demo {
  .ui-col {
    clear: both;
    margin: 6px 0;
    background-color: #f2f2f2;
  }
}
</style>
