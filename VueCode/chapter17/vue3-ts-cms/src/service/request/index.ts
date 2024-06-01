import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'
// 导入ElLoading组件和样式
import 'element-plus/es/components/loading/style/css'
import { ElLoading } from 'element-plus'

const DEFAULT_LOADING = true

class HYRequest<T = any> {
  instance: AxiosInstance // 1. 声明instance的类型
  interceptors?: HYRequestInterceptors // 10. 指定拦截器的类型
  showLoading?: boolean // 2. 是否显示loading
  loading?: any // 3. loading的组件实例
  constructor(config: HYRequestConfig<T>) {
    // 2. 创建axios实例
    this.instance = axios.create(config)
    // 4. 是否显示加载进度，默认为true
    this.showLoading =
      config.showLoading === undefined ? DEFAULT_LOADING : config.showLoading

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
        // console.log('所有的实例都有的拦截器：请求成功拦截')
        if (this.showLoading) {
          // 5. 以服务的方式调用。由于创建爱你的loading是单例，因此调用多次也不会创建多个
          this.loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.2)',
            fullscreen: true
          })
        }
        return config
      },
      (err) => {
        // console.log('所有的实例都有的拦截器：请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close() // 6. 将loading单例关闭
        // console.log('所有的实例都有的拦截器：响应成功拦截')
        // todo ......
        return res.data
      },
      (err) => {
        this.loading?.close() // 7. 将loading单例关闭
        // console.log('所有的实例都有的拦截器：响应失败拦截')
        // 例子：判断的不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }

  // 3. 编写request函数，request中的T用于指定响应结果res.data的类型
  // 7. 这次request函数的返回值类型为Pormise<T>
  request<T = any>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 8. 判断某个请求是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<T, T>(config) // 4. 调用instance.request
        // then在这里获取的res类型是T，而不是AxiosResponse<T>，因为在拦截中修改了返回值
        .then((res) => {
          // 5. 将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
        .finally(() => {
          // 9. 将showLoading设置true，这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
        })
    })
  }

  get<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
