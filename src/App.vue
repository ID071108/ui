<template>
  <div id="app">
    <template v-if="$route.meta.hasMaster">
      <div class="wrap">
        <sidebar />
        <div class="content">
          <div class="content-header">
            <UserInfo />
            <tabs :tabs="tabs" />
          </div>
          <div class="content-body">
            <div>
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </div>
          </div>
          <div class="content-footer">
            copyright by swan
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div>
        <router-view></router-view>
      </div>
    </template>
  </div>
</template>

<script>
import Sidebar from '@/pages/home/Sidebar'
import Tabs from '@/pages/home/Tabs'
import UserInfo from '@/pages/home/User-info'
import { mapState } from 'vuex'
import { localStore, sessionStore } from './utils/storage'
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
  created() {
    localStore.set({ a: 1 })
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
  .wrap {
    width: 100%;
    height: 100%;
  }
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
