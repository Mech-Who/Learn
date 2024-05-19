import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// 8. 定义拦截器的类型，T是响应结果（res.data）的类型
interface HYRequestInterceptors<T = any> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: AxiosResponse<T>) => AxiosResponse<T> | Promise<AxiosResponse<T>>;
  responseInterceptorCatch?: (error: any) => any;
}

interface HYRequestConfig<T = any> extends AxiosRequestConfig {
  // 9. 可扩展自己的类型
  interceptors?: HYRequestInterceptors<T>;
}

class HYRequest<T = any> {
  instance: AxiosInstance; // 1. 声明instance的类型
  interceptors?: HYRequestInterceptors; // 10. 指定拦截器的类型

  constructor(config: HYRequestConfig) {
    // 2. 创建axios实例
    this.instance = axios.create(config);

    // 11. 从config中取出对应实例的拦截器
    this.interceptors = config.interceptors
    // 12. 如果某个实例的config中有定义拦截的回调函数，那么将这些函数添加到实例的拦截器中
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

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
        if (err.response.status === 404) {
          console.log("404的错误~");
        }
        return err;
      }
    )
  }

  // 3. 编写request函数，request中的T用于指定响应结果res.data的类型
  // 7. 这次request函数的返回值类型为Pormise<T>
  request<T = any>(config: HYRequestConfig): Promise<T> {
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

  get<T = any>(config: HYRequestConfig): Promise<T>{
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T = any>(config: HYRequestConfig): Promise<T>{
    return this.request<T>({ ...config, method: "POST" });
  }
  delete<T = any>(config: HYRequestConfig): Promise<T>{
    return this.request<T>({ ...config, method: "DELETE" });
  }
  patch<T = any>(config: HYRequestConfig): Promise<T>{
    return this.request<T>({ ...config, method: "PATCH" });
  }
}

export default HYRequest;
