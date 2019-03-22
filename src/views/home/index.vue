<template>
  <div class="home">
    这里首页132
  </div>
</template>

<script>
import apis from '@/config'
export default {
  name: 'Home',
  created() {
    console.log(apis.apis)
    this.$post('getAreaTree', {}).then(res => console.log(res, 'then')).catch(err => console.log(err, 'catch'))
    this.$store.commit('updateUserInfo', { a: 1, b: 2 })
    console.log(this.$store, this.$store.state.userInfo)
  }
}
</script>

<style lang="">
</style>