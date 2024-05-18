import axios from 'axios'

const API_POST = 'http://httpbin.org./post'

// 1. axios的请求拦截
axios.interceptors.request.use(
  // fn1: 请求发送成功会执行的函数
  (config) => {
    console.log('请求成功的拦截');
    // 可进行统一操作，例如：为请求添加accessToken，isLoading加载进度动画等
    if (config.headers) {
      config.headers['accessToken'] = 'aabbcc'
    }
    return config
  },
  // fn2：请求发送失败会执行的函数
  (err) => {
    console.log('请求发送错误');
    return err
  }
)

// 2. axios的响应拦截
axios.interceptors.response.use(
  // fn1: 数据响应成功，即2xx范围内的状态码
  (res) => {
    console.log('相应成功的拦截');
    return res
  },
  // fn2: 数据响应失败，即超出2xx范围的状态码
  (err) => {
    console.log('服务器相应失败');
    return err
  }
)

// 3. 发起POST请求
axios.post(API_POST, { id: 100400 })
  .then((res) => {
    console.log(res.data);
  })
