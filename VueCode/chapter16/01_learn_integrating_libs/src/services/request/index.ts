import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface HYRequestConfig extends AxiosRequestConfig {
  // 可扩展自己的类型
}

class HYRequest {
  instance: AxiosInstance; // 1. 声明instance的类型
  constructor(config: HYRequestConfig) {
    // 2. 创建axios实例
    this.instance = axios.create(config);
    // 6. 为所有实例添加全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有的实例都有的拦截器：请求成功拦截");
        return config
      },
      (err) => {
        console.log("所有的实例都有的拦截器：请求失败拦截");
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有的实例都有的拦截器：响应成功拦截");
        // todo ......
        return res.data
      },
      (err) => {
        console.log("所有的实例都有的拦截器：响应失败拦截");
        // 例子：判断的不同的HttpErrorCode显示不同的错误信息
        if(err.response.status === 404) {
          console.log("404的错误~");
        }
        return err;
      }
    )
  }

  // 3. 编写request函数，request中的T用于指定响应结果res.data的类型
  // 7. 这次request函数的返回值类型为Pormise<T>
  request<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<T, T>(config) // 4. 调用instance.request
        // then在这里获取的res类型是T，而不是AxiosResponse<T>，因为在拦截中修改了返回值
        .then((res) => {
          // 5. 将结果resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }
}

export default HYRequest;
