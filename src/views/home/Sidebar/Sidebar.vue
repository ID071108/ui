<template>
  <div class="ui-sidebar">
    <div class="logo">
      <img src="" alt="logo">
    </div>
    <ul>
      <li class="" @click="handleClick({label: 'button', path: '/button-demo'})">
        <router-link to="/button-demo" :class="$route.path === '/button-demo' ? 'active' : ''">
          <span>button</span>
          <i class="iconfont icon-expand"></i>
        </router-link>
      </li>
      <li class="" @click="handleClick({label: 'message', path: '/message-demo'})">
        <router-link to="/message-demo" :class="$route.path === '/message-demo' ? 'active' : ''">
          <span>message</span>
          <i class="iconfont icon-expand"></i>
        </router-link>
      </li>
      <li class="" @click="handleClick({label: 'layout', path: '/layout-demo'})">
        <router-link to="/layout-demo" :class="$route.path === '/layout-demo' ? 'active' : ''">
          <span>layout</span>
          <i class="iconfont icon-expand"></i>
        </router-link>
      </li>
      <li class="" @click="handleClick({label: 'menu', path: '/menu-demo'})">
        <router-link to="/menu-demo" :class="$route.path === '/menu-demo' ? 'active' : ''">
          <span>menu</span>
          <i class="iconfont icon-expand"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import Menu from '@/config/menu.js'

export default {
  name: 'Sidebar',
  data() {
    return {
      menu: []
    }
  },
  created() {
    this.menu = Menu

  },
  methods: {
    handleClick(item) {
      this.$store.commit('updateTabs', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-sidebar {
  position: absolute;
  width: 200px;
  height: 100%;
  box-shadow: 0 0 6px #000;
  background-color: #222;
  li {
    margin: 0 3px;
    border-bottom: 1px solid #292929;
    a {
      position: relative;
      height: 56px;
      line-height: 56px;
      padding: 0 16px;
      display: inline-block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #fff;
      &:hover {
        background-color: #292929;
        & > .iconfont {
          transform: rotateZ(90deg);
        }
      }
      &.active {
        background-color: #292929;
      }
    }
    .iconfont {
      position: absolute;
      top: 0;
      right: 0;
      color: #666;
      transition: transform 0.2s;
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