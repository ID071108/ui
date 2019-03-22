<template>
  <div class="menu-demo">
    <Menu>
      <!-- <sub-menu>
        <menu-item></menu-item>
      </sub-menu> -->
    </Menu>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'menu-demo',
  components: {
    Menu,
    // SubMenu,
    // MenuItem
  }
}
</script>

<style lang="scss" scoped>
.menu-demo {
}
</style>
