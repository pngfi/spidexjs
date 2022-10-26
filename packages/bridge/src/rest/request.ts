import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL:  '/', // api 的 base_url
  timeout: 60000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    (config:any) => {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
      if (response.status===200) {
          return response.data;
      }
      return response
  },
  error => {
      return error;
  }
)
export default service
