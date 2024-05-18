import axios from 'axios'

const API_POST = '/post'  // 测试POST请求的URL

// 1. axios的全局配置，将作用于每个请求
axios.defaults.baseURL = 'http://httpbin.org' // 每个请求基础的URL，即URL前缀
axios.defaults.timeout = 10000

axios.post(API_POST, { id: 100400 }, {  // 最终的URL = baseURL + API_POST
  // 2. 每个请求单独配置，优先级最高
  timeout: 5000,  // 比全局配置优先级高
  headers: {
    'Content-Type': 'application/json',
    accessToken: 'aabbccdd'
  }
})
  .then((res) => {
    console.log(res.data);
  })