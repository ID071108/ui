import Mock from 'mockjs'

const apiOrigin = 'http://assist.dev.ngrok.ttyun.com'

export default {
  mockData() {
    Mock.mock(apiOrigin + '/mock/user_info', {
      success: true,
      result: {
        id: 1,
        name: 'swan',
        role: ['admin']
      }
    })
  }
}
