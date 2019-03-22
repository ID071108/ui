<template>
  <div id="app">
    <sidebar />
    <div class="content">
      <div class="content-header">
        <UserInfo />
        <tabs :tabs="tabs" />
      </div>
      <div class="content-body">
        <div>
          <router-view></router-view>
        </div>
      </div>
      <div class="content-footer">
        copyright by swan
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/views/home/Sidebar'
import Tabs from '@/views/home/Tabs'
import UserInfo from '@/views/home/User-info'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    Sidebar,
    Tabs,
    UserInfo
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      tabs: state => state.tabs
    })
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 0 0 200px;
    border: 1px solid transparent;
    &-header {
      width: 100%;
    }
    &-body {
      display: flex;
      height: 100%;
      background-color: #f2f2f2;
      padding: 6px;
      & > div {
        overflow-y: scroll;
        width: 100%;
        height: 100%;
        padding: 6px;
        border: 1px solid #ccc;
        border-radius: 6px;
        background-color: #fff;
      }
    }
    &-footer {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 10px;
      border-top: 1px solid #eee;
    }
  }
}
</style>
