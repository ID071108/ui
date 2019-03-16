<template>
  <div class="ui-sidebar">
    <div class="logo">
      <img src="../../assets/imgs/logo.png" alt="logo">
    </div>
    <ul>
      <li>
        <router-link to="/home">home</router-link>
      </li>
      <li>
        <router-link to="/223123">404</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
.ui-sidebar {
  position: absolute;
  width: 200px;
  height: 100%;
  box-shadow: 0 0 6px #000;
  background-color: #2b2b2b;
  li {
    height: 30px;
    line-height: 30px;
    padding: 0 16px;
    border-bottom: 1px solid #eee;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  .logo {
    height: 60px;
    text-align: center;
    & > img {
      height: 100%;
    }
  }
}
</style>