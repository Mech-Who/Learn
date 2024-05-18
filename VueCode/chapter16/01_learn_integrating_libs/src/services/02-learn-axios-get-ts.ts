import axios from 'axios'

const API_GET = 'http://httpbin.org/get'  // 测试GET请求的URL

// 1. 定义GET、POST请求相应res.data对象的类型
interface IResponseData {
  args: any;
  headers: any;
  origin: string;
  url: string;
}

// 指定响应结果(res.data)的类型为IResponseData
axios.get<IResponseData, any>(API_GET + '?id=100400')
  .then((res) => {
    // TypeScript会自动推导res类型为AxiosResponse; res.data类型为IResponseData
    console.log(res.data);

  })

axios.request<IResponseData>({
  method: 'get',
  url: API_GET,
  params: {
    id: 100400
  }
})
  .then((res) => {
    console.log(res.data);
  })