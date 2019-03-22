<template>
  <div class="button-demo">
    <h2>default button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <Button @click="handleClick">默认按钮</Button>
      </li>
      <li>
        <h3>primary</h3>
        <Button type="primary" @click="handleClick">主要按钮</Button>
      </li>
      <li>
        <h3>success</h3>
        <Button type="success" @click="handleClick">成功按钮</Button>
      </li>
      <li>
        <h3>info</h3>
        <Button type="info" @click="handleClick">信息按钮</Button>
      </li>
      <li>
        <h3>warning</h3>
        <Button type="warning" @click="handleClick">警告按钮</Button>
      </li>
      <li>
        <h3>danger</h3>
        <Button type="danger" @click="handleClick">危险按钮</Button>
      </li>
    </ul>
    <h2>plain button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <Button @click="handleClick" plain>默认按钮</Button>
      </li>
      <li>
        <h3>primary</h3>
        <Button type="primary" @click="handleClick" plain>主要按钮</Button>
      </li>
      <li>
        <h3>success</h3>
        <Button type="success" @click="handleClick" plain>成功按钮</Button>
      </li>
      <li>
        <h3>info</h3>
        <Button type="info" @click="handleClick" plain>信息按钮</Button>
      </li>
      <li>
        <h3>warning</h3>
        <Button type="warning" @click="handleClick" plain>警告按钮</Button>
      </li>
      <li>
        <h3>danger</h3>
        <Button type="danger" @click="handleClick" plain>危险按钮</Button>
      </li>
    </ul>
    <h2>round button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <Button @click="handleClick" plain round>默认按钮</Button>
      </li>
      <li>
        <h3>primary</h3>
        <Button type="primary" @click="handleClick" plain round>主要按钮</Button>
      </li>
      <li>
        <h3>success</h3>
        <Button type="success" @click="handleClick" round>成功按钮</Button>
      </li>
      <li>
        <h3>info</h3>
        <Button type="info" @click="handleClick" plain round>信息按钮</Button>
      </li>
      <li>
        <h3>warning</h3>
        <Button type="warning" @click="handleClick" plain round>警告按钮</Button>
      </li>
      <li>
        <h3>danger</h3>
        <Button type="danger" @click="handleClick" plain round>危险按钮</Button>
      </li>
    </ul>
    <h2>ciecle button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <Button @click="handleClick" plain circle>
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>primary</h3>
        <Button type="primary" @click="handleClick" plain circle>
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>success</h3>
        <Button type="success" @click="handleClick" circle>
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>info</h3>
        <Button type="info" @click="handleClick" plain circle>
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>warning</h3>
        <Button type="warning" @click="handleClick" plain circle>
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>danger</h3>
        <Button type="danger" @click="handleClick" plain circle>
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
    </ul>
    <h2>disabled button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <Button @click="handleClick" plain disabled>默认按钮</Button>
      </li>
      <li>
        <h3>primary</h3>
        <Button type="primary" @click="handleClick" plain circle disabled>
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>success</h3>
        <Button type="success" @click="handleClick" disabled>
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>info</h3>
        <Button type="info" @click="handleClick" plain circle disabled>
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>warning</h3>
        <Button type="warning" @click="handleClick" plain disabled>
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>danger</h3>
        <Button type="danger" @click="handleClick" plain circle disabled>
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
    </ul>

    <h2>medium button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <Button @click="handleClick" plain size="medium">默认按钮</Button>
      </li>
      <li>
        <h3>primary</h3>
        <Button type="primary" @click="handleClick" round size="medium">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>success</h3>
        <Button type="success" @click="handleClick" size="medium">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>info</h3>
        <Button type="info" @click="handleClick" plain circle disabled size="medium">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>warning</h3>
        <Button type="warning" @click="handleClick" plain size="medium">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>danger</h3>
        <Button type="danger" @click="handleClick" plain circle size="small">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
    </ul>

    <h2>small button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <Button @click="handleClick" plain size="small">默认按钮</Button>
      </li>
      <li>
        <h3>primary</h3>
        <Button type="primary" @click="handleClick" round size="small">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>success</h3>
        <Button type="success" @click="handleClick" size="small">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>info</h3>
        <Button type="info" @click="handleClick" plain circle disabled size="small">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>warning</h3>
        <Button type="warning" @click="handleClick" plain size="small">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>danger</h3>
        <Button type="danger" @click="handleClick" plain circle size="small">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
    </ul>

    <h2>mini button</h2>
    <ul>
      <li>
        <h3>default</h3>
        <Button @click="handleClick" plain size="mini">默认按钮</Button>
      </li>
      <li>
        <h3>primary</h3>
        <Button type="primary" @click="handleClick" round size="mini">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>success</h3>
        <Button type="success" @click="handleClick" size="mini">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>info</h3>
        <Button type="info" @click="handleClick" plain circle disabled size="mini">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>warning</h3>
        <Button type="warning" @click="handleClick" plain size="mini">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
      <li>
        <h3>danger</h3>
        <Button type="danger" @click="handleClick" plain circle size="mini">
          <i class="iconfont icon-user"></i>
        </Button>
      </li>
    </ul>
  </div>
</template>


<script>
import Button from '@/components/Button'

export default {
  name: 'demo-button',
  components: {
    Button
  },
  methods: {
    handleClick() {
      console.log(123)
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  clear: both;
}
ul {
  li {
    float: left;
    margin: 10px;
  }
}
</style>
