<template>
  <div class="ui-menu">
    <sub-menu name="1" path="/123" :a="1">
      <sub-menu name="1" path="/123">
        <menu-item>123</menu-item>
      </sub-menu>
      <sub-menu name="1" path="/123">
        <sub-menu name="1" path="/123">
          <menu-item>123</menu-item>
        </sub-menu>
        <sub-menu name="1" path="/123">
          <menu-item>123</menu-item>
        </sub-menu>
      </sub-menu>
    </sub-menu>
    <sub-menu name="1" path="/123">
      <menu-item>123</menu-item>
    </sub-menu>
    <sub-menu name="1" path="/123">
      <menu-item>123</menu-item>
    </sub-menu>
    <sub-menu name="1" path="/123">
      <menu-item>123</menu-item>
    </sub-menu>
  </div>
</template>

<script>
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'
export default {
  name: 'UiMenu',
  components: {
    SubMenu,
    MenuItem
  },
  data() {
    return {
      show: false,
      mockData: [{
        name: 'a',
        path: 1,
        children: [{
          name: 'a1',
          path: 11,
          children: {
          }
        }]
      },
      {
        name: 'b',
        path: 2,
        children: [{
          name: 'b1',
          path: 22,
          children: {
          }
        }]
      }]
    }
  },
  methods: {
    handleCollapse() {

    }
  }
}
</script>

<style lang="scss" scoped>
.ui-menu {
}
</style>
