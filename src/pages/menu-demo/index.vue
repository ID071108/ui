<template>
  <div class="menu-demo">
    <Menu>
      123
    </Menu>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import MenuItem from '@/components/MenuItem'
export default {
  name: 'menu-demo',
  components: {
    Menu,
    // SubMenu,
    MenuItem
  },
  mounted() {
    // console.log(this.$children, this.$root)
    // this.$post('getMockData', {}).then(res => console.log(res, 111111111111111))
  }
}
</script>

<style lang="scss" scoped>
.menu-demo {
}
</style>
