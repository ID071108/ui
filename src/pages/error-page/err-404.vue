<template>
  <div class="err-404">
    <ul>
      <li class="num">404</li>
      <li class="text">找不到资源!</li>
    </ul>

    <img src="../../assets/imgs/404.png" alt="404">
  </div>
</template>

<script>
export default {
  name: 'Err404'
}
</script>

<style lang="scss">
.err-404 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0 0 0;
  & > ul {
    padding: 0 30px;
    & > li {
      color: #00a53c;
      text-shadow: 5px 5px 5px #ccc;
    }
    .num {
      font-size: 200px;
      margin-bottom: 30px;
    }
    .text {
      font-size: 66px;
    }
  }
  & > img {
    height: 300px;
  }
}
</style>