import axios from 'axios'
const API_POST = '/post'

// 1. 新建一个axios实例，下面是该实例的默认配置
const instance = axios.create({
  baseURL: 'http://httpbin.org',
  timeout: 10000
})

instance.post(API_POST, { id: 100400 }, {
  // 2. 每个请求单独配置，优先级最高
  timeout: 5000,  // 比axios实例的配置优先级高
  headers: {
    'Content-Type': 'application/json',
    accessToken: 'aabbccdd'
  }
})
  .then((res) => {
    console.log(res.data);
  })
