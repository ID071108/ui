<template>
  <div class="message-demo">
    <Button type="success" @click="handleSuccess">成功提示</button>
    <Button type="info" @click="handleInfo">信息提示</button>
    <Button type="warning" @click="handleWarning">警告提示</button>
    <Button type="danger" @click="handleError">错误提示</button>
  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  name: 'message-demo',
  components: {
    Button
  },
  data() {
    return {
    }
  },
  methods: {
    handleSuccess() {
      this.$message.success({
        message: '成功提示',
        duration: 0
      })
      // this.$post('getAreaTree', {}).then(res => console.log(res))
    },
    handleInfo() {
      this.$message.info('信息提示')
    },
    handleWarning() {
      this.$message.warning('警告提示')
    },
    handleError() {
      this.$message.error('失败提示')
    }
  }
}
</script>

<style lang="scss" scoped>
.message-demo {
  & > button {
    margin: 10px;
  }
}
</style>
