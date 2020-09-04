// axios-init.js
import axios from 'axios'
import config from '../config/dev'

// let loadingInstance // 创建Loading 的实例
axios.defaults.baseURL = config.baseUrl // 配置axios请求的地址
// axios.defaults.headers.post['Content-Type'] = 'application/json charset=utf-8'
// axios.defaults.crossDomain = true
// axios.defaults.withCredentials = true // 设置cross跨域 并设置访问权限 允许跨域携带cookie信息
// axios.defaults.headers.common.Authorization = '' // 设置请求头为 Authorization

const instance = axios.create({
  headers: {
    'content-type': 'application/json'
  }
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = window.localStorage.getItem('token')
    token && (config.headers.Authorization = token)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    // eslint-disable-next-line no-debugger
    debugger
    if (response.status === 200) {
      const { code, data, message } = response.data
      if (code === 200) {
        return Promise.resolve(data)
      } else {
        return Promise.reject(response)
      }
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
