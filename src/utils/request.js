// 配置axios模块
import axios from 'axios'
// 使用自定义配置创建axios实例
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 请求前
  return config
}, error => {
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 处理响应数据
  return response.data.data || response.data
}, error => {
  return Promise.reject(error)
})
export default request
