import axios from 'axios'

const API_POST = 'http://httpbin.org/post'  // 测试POST请求的URL

axios.post(API_POST, { id: 100400 })
  .then((res) => {
    console.log(res.data);  // 处理响应结果
  })

axios.request({
  method: 'post',
  url: API_POST,
  data: { id: 100400 }
})
  .then((res) => {
    console.log(res.data);  // 处理响应结果
  })