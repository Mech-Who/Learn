import HYRequest from "./request" // 导入HYRequest类

let BASE_URL = "http://httpbin.org";  // 默认基础的URL
const TIME_OUT = 10000; // 默认超时时间

// 1. 创建HYRequest类的实例对象 hyRequest
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export default hyRequest
