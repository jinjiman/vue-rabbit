// axios基础的封装
import axios from 'axios'

const httpInstance = axios.create({
  // 所有请求都会自动加上这个前缀,例如：
  //httpInstance.get('/users')实际请求地址就是：http://pcapi-xiaotuxian-front-devtest.itheima.net/users
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 拦截器

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

export default httpInstance
