/**
 * 接口域名
 * @param {development} '' => mock数据, 否则为开发服务器地址, 通过注释使用
 * @param {test} 测试环境
 * @param {production} 生产环境
 */
const apiOrigin = {
  development: 'http://assist.dev.ngrok.ttyun.com',
  test: 'http://assist.dev.ngrok.ttyun.com',
  production: 'http://assist.dev.ngrok.ttyun.com'
}

const NODE_ENV = (process.env.NODE_ENV || 'development').trim()

const BASE_URL = apiOrigin[NODE_ENV]

const apis = {
  getAreaTree: '/api/base/area/index', // 获取所有地区
  // mock api
  getMockData: '/mock/user_info' // 模拟数据
}

const createFullApis = apis => {
  Object.keys(apis).map(apiKey => (apis[apiKey] = BASE_URL + apis[apiKey]))
}

createFullApis(apis)

export default apis
