<template>
  <div class="home">
    <!-- <header>
      <span>sw ui</span>
      <img src="../../assets/imgs/ui.png" alt="ui">
    </header>
    <section>
      <router-link to="/intro">introduction</router-link>
    </section> -->
    <header>
      <div></div>
    </header>
    <input type="text" v-focus />
    <sw-button-group>
      <sw-button>sw-button</sw-button>
      <sw-button>sw-button</sw-button>
      <sw-button>sw-button</sw-button>
    </sw-button-group>
  </div>
</template>

<script>

import apis from '@/config'
export default {
  name: 'Home',
  created() {
  }
}
</script>

<style lang="scss" scoped>
.home {
  // & > header {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   & > span {
  //     padding: 0 30px;
  //     font-size: 60px;
  //   }
  // }
  // & > section {
  //   padding: 30px 0;
  //   text-align: center;
  // }
  & > header {
    & > div {
      width: 200px;
      height: 200px;
      background-color: #eee;
      border-radius: 6px;
    }
  }
}
</style>