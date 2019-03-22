<template>
  <ul class="ui-tabs">
    <li :class="$route.path === item.path ? 'active': ''" :title="item.label" v-for="(item, index) in tabs" :key="'tabs-item-' + index" :data-path="item.path">
      <router-link :to="item.path">{{item.label}}</router-link>
      <i v-if="item.path !== '/'" class="iconfont icon-close" @click.stop="handleClose(item.path)"></i>
    </li>
  </ul>
</template>


<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleClose(path) {
      this.$store.commit('closeTab', { path })
      if (this.$route.path === path) {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variable.scss";
.ui-tabs {
  padding: 0 16px;
  li {
    position: relative;
    display: inline-block;
    margin: 0 3px;
    border: 1px solid #ccc;
    border-bottom: 0;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    transition: background-color 0.2s;
    & > a {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      width: 116px;
      height: 36px;
      line-height: 36px;
      padding: 0 26px 0 10px;
      text-decoration: none;
      text-align: center;
      color: #666;
    }
    .iconfont {
      position: absolute;
      top: 50%;
      right: 5px;
      margin-top: -8px;
      cursor: pointer;
    }
    &.active {
      background-color: $primary_color;
      & > a {
        color: #fff;
      }
      .iconfont {
        color: #fff;
      }
    }
  }
}
</style>