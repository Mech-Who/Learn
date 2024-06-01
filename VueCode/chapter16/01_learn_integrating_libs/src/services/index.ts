import HYRequest from "./request" // 导入HYRequest类

let BASE_URL = "http://httpbin.org";  // 默认基础的URL
const TIME_OUT = 10000; // 默认超时时间

// 1. 创建HYRequest类的实例对象 hyRequest
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 为单个实例添加的拦截器
  interceptors: {
    requestInterceptor: (config) => {
      const token = "";
      if(token) {
        // 例子：统一为header添加Authorization属性
        config.headers!.Authorization = `Bearer ${token}`;
      }
      console.log("单个实例-请求成功的拦截");
      return config;
    },
    requestInterceptorCatch(err) {
      console.log("单个实例-请求失败的拦截");
      return err;
    },
    responseInterceptor: (res) => {
      console.log("单个实例-响应成功的拦截");
      return res;
    },
    responseInterceptorCatch(err) {
      console.log("单个实例-响应失败的拦截");
      return err;
    },
  }
});

export default hyRequest
