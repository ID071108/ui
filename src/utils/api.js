import Vue from 'vue'
import axios from 'axios'
import Apis from '@/config/apis'
import Message from '@/components/Message'

// 请求拦截
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.resolve(err)
  }
)

// 响应拦截
axios.interceptors.response.use(
  data => {
    Message.success('请求成功')
    if (data.status && data.status == 200) {
      return data.data
    } else {
      return Promise.reject(data)
    }
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误(400)'
          break
        case 401:
          err.message = '未授权，请重新登录(401)'
          break
        case 403:
          err.message = '拒绝访问(403)'
          break
        case 404:
          err.message = '请求出错(404)'
          break
        case 408:
          err.message = '请求超时(408)'
          break
        case 500:
          err.message = '服务器错误(500)'
          break
        case 501:
          err.message = '服务器未实现(501)'
          break
        case 502:
          err.message = '网络错误(502)'
          break
        case 503:
          err.message = '服务不可用(503)'
          break
        case 504:
          err.message = '网络超时(504)'
          break
        case 505:
          err.message = 'HTTP版本不受支持(505)'
          break
        default:
          err.message = `连接出错(${err.response.status})`
      }
    } else {
      err.message = '连接服务器失败'
    }
    return Promise.reject(err)
  }
)

// post方法封装，参数处理
export const postRequest = (key, params) => {
  return axios({
    method: 'post',
    url: Apis[key],
    data: params,
    transformRequest: [
      function(data) {
        let ret = ''
        for (let item in data) {
          ret +=
            encodeURIComponent(item) +
            '=' +
            encodeURIComponent(data[item]) +
            '&'
        }
        return ret
      }
    ],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// post方法封装 文件上传
export const uploadFileRequest = (key, params) => {
  return axios({
    method: 'post',
    url: Apis[key],
    data: params,
    headers: {
      'Content-Type': 'nutipart/form-data'
    }
  })
}

// get方法封装
export const getRequest = key => {
  return axios({
    method: 'get',
    url: Apis[key]
  })
}

export const putRequest = (key, params) => {
  return axios({
    method: 'put',
    url: Apis[key],
    data: params,
    transformRequest: [
      function(data) {
        let ret = ''
        for (let item in data) {
          ret +=
            encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }
    ],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// delete方法封装
export const deleteRequest = key => {
  return axios({
    method: 'delete',
    url: Apis[key]
  })
}

Vue.prototype.$get = getRequest
Vue.prototype.$post = postRequest
Vue.prototype.$delete = deleteRequest
Vue.prototype.$put = putRequest
Vue.prototype.$upload = uploadFileRequest
