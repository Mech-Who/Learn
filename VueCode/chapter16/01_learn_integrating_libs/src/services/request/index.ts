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
  }

  // 3. 编写request函数，request中的T用于指定响应结果res.data的类型
  request<T>(config: HYRequestConfig): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<T>(config) // 4. 调用instance.request
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
