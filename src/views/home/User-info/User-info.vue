<template>
  <div class="userInfo">
    <ul>
      <li>
        <i class="iconfont icon-remind"></i>
        <span>消息</span>
      </li>
      <li>
        <i class="iconfont icon-user"></i>
        <span>用户</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style lang="scss" scoped>
.userInfo {
  height: 30px;
  line-height: 30px;
  padding: 0 16px;
  ul {
    float: right;
  }
  li {
    display: inline-block;
    padding: 0 6px;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
  span {
    padding: 0 6px;
  }
}
</style>
