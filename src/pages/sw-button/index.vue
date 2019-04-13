<template>
  <div class="sw-button-demo">
    <h2>sw-button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <sw-button @click="handleClick">默认按钮</sw-button>
      </li>
      <li>
        <h3>primary</h3>
        <sw-button type="primary" @click="handleClick">主要按钮</sw-button>
      </li>
      <li>
        <h3>success</h3>
        <sw-button type="success" @click="handleClick">成功按钮</sw-button>
      </li>
      <li>
        <h3>info</h3>
        <sw-button type="info" @click="handleClick">信息按钮</sw-button>
      </li>
      <li>
        <h3>warning</h3>
        <sw-button type="warning" @click="handleClick">警告按钮</sw-button>
      </li>
      <li>
        <h3>danger</h3>
        <sw-button type="danger" @click="handleClick">危险按钮</sw-button>
      </li>
    </ul>
    <h2>plain sw-button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <sw-button @click="handleClick" plain>默认按钮</sw-button>
      </li>
      <li>
        <h3>primary</h3>
        <sw-button type="primary" @click="handleClick" plain>主要按钮</sw-button>
      </li>
      <li>
        <h3>success</h3>
        <sw-button type="success" @click="handleClick" plain>成功按钮</sw-button>
      </li>
      <li>
        <h3>info</h3>
        <sw-button type="info" @click="handleClick" plain>信息按钮</sw-button>
      </li>
      <li>
        <h3>warning</h3>
        <sw-button type="warning" @click="handleClick" plain>警告按钮</sw-button>
      </li>
      <li>
        <h3>danger</h3>
        <sw-button type="danger" @click="handleClick" plain>危险按钮</sw-button>
      </li>
    </ul>
    <h2>round sw-button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <sw-button @click="handleClick" plain round>默认按钮</sw-button>
      </li>
      <li>
        <h3>primary</h3>
        <sw-button type="primary" @click="handleClick" plain round>主要按钮</sw-button>
      </li>
      <li>
        <h3>success</h3>
        <sw-button type="success" @click="handleClick" round>成功按钮</sw-button>
      </li>
      <li>
        <h3>info</h3>
        <sw-button type="info" @click="handleClick" plain round>信息按钮</sw-button>
      </li>
      <li>
        <h3>warning</h3>
        <sw-button type="warning" @click="handleClick" plain round>警告按钮</sw-button>
      </li>
      <li>
        <h3>danger</h3>
        <sw-button type="danger" @click="handleClick" plain round>危险按钮</sw-button>
      </li>
    </ul>
    <h2>ciecle sw-button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <sw-button @click="handleClick" plain circle>
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>primary</h3>
        <sw-button type="primary" @click="handleClick" plain circle>
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>success</h3>
        <sw-button type="success" @click="handleClick" circle>
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>info</h3>
        <sw-button type="info" @click="handleClick" plain circle>
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>warning</h3>
        <sw-button type="warning" @click="handleClick" plain circle>
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>danger</h3>
        <sw-button type="danger" @click="handleClick" plain circle>
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
    </ul>
    <h2>disabled sw-button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <sw-button @click="handleClick" plain disabled>默认按钮</sw-button>
      </li>
      <li>
        <h3>primary</h3>
        <sw-button type="primary" @click="handleClick" plain circle disabled>
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>success</h3>
        <sw-button type="success" @click="handleClick" disabled>
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>info</h3>
        <sw-button type="info" @click="handleClick" plain circle disabled>
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>warning</h3>
        <sw-button type="warning" @click="handleClick" plain disabled>
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>danger</h3>
        <sw-button type="danger" @click="handleClick" plain circle disabled>
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
    </ul>

    <h2>medium sw-button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <sw-button @click="handleClick" plain size="medium">默认按钮</sw-button>
      </li>
      <li>
        <h3>primary</h3>
        <sw-button type="primary" @click="handleClick" round size="medium">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>success</h3>
        <sw-button type="success" @click="handleClick" size="medium">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>info</h3>
        <sw-button type="info" @click="handleClick" plain circle disabled size="medium">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>warning</h3>
        <sw-button type="warning" @click="handleClick" plain size="medium">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>danger</h3>
        <sw-button type="danger" @click="handleClick" plain circle size="small">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
    </ul>

    <h2>small sw-button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <sw-button @click="handleClick" plain size="small">默认按钮</sw-button>
      </li>
      <li>
        <h3>primary</h3>
        <sw-button type="primary" @click="handleClick" round size="small">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>success</h3>
        <sw-button type="success" @click="handleClick" size="small">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>info</h3>
        <sw-button type="info" @click="handleClick" plain circle disabled size="small">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>warning</h3>
        <sw-button type="warning" @click="handleClick" plain size="small">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>danger</h3>
        <sw-button type="danger" @click="handleClick" plain circle size="small">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
    </ul>

    <h2>mini sw-button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <sw-button @click="handleClick" plain size="mini">默认按钮</sw-button>
      </li>
      <li>
        <h3>primary</h3>
        <sw-button type="primary" @click="handleClick" round size="mini">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>success</h3>
        <sw-button type="success" @click="handleClick" size="mini">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>info</h3>
        <sw-button type="info" @click="handleClick" plain circle disabled size="mini">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>warning</h3>
        <sw-button type="warning" @click="handleClick" plain size="mini">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
      <li>
        <h3>danger</h3>
        <sw-button type="danger" @click="handleClick" plain circle size="mini">
          <i class="iconfont icon-user"></i>
        </sw-button>
      </li>
    </ul>
  </div>
</template>


<script>

export default {
  name: 'demo-sw-button',
  components: {
  },
  methods: {
    handleClick() {
      console.log(123)
    }
  }
}
</script>

<style lang="scss" scoped>
.sw-button-demo {
  // overflow-y: scroll;
  height: 100%;
  h2 {
    clear: both;
  }
  ul {
    overflow: hidden;
    li {
      float: left;
      margin: 10px;
    }
  }
}
</style>
