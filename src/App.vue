<template>
  <div id="app">
    <sidebar />
    <div class="content">
      <div class="content-header">
        <ul class="userInfo">
          <li>提醒</li>
          <li>swan</li>
        </ul>
        <tabs />
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
import Sidebar from '@/components/Sidebar'
import Tabs from '@/components/Tabs'
export default {
  name: 'app',
  components: {
    Sidebar,
    Tabs
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  .sidebar {
    position: absolute;
    width: 200px;
    height: 100%;
    box-shadow: 0 0 6px #000;
    background-color: #2b2b2b;
    li {
      height: 30px;
      line-height: 30px;
      padding: 0 16px;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 0 0 200px;
    border: 1px solid transparent;
    &-header {
      width: 100%;
      height: 60px;
      & > .userInfo {
        float: right;
        height: 30px;
        line-height: 30px;
        li {
          float: left;
        }
      }
      & > .tabs {
        clear: both;
        height: 30px;
        line-height: 30px;
      }
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
