import axios from 'axios'

// 创建 Axios 实例
export const api = axios.create({
  baseURL: 'http://localhost:8080', // 后端的baseURL，通过环境变量设置
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// 响应拦截器
api.interceptors.response.use(
  // 成功响应处理
  (response) => {
    console.log('Response:', response.data)
    return response.data // 返回数据而非整个响应对象
  },
  // 错误响应处理
  (error) => {
    const err = {
      code: error.response ? error.response.status : 500,
      message: error.response ? error.response.data.message : error.message || 'Unknown Error',
      details: error.response ? error.response.data.details : {}
    }
    console.error('API Error:', err) // 输出错误日志
    return Promise.reject(err) // 抛出格式化的错误
  }
)
