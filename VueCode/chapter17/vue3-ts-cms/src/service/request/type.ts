import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 1.定义拦截器的类型, T 是响应res.data的类型
export interface HYRequestInterceptors<T = any> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (
    res: AxiosResponse<T>
  ) => AxiosResponse<T> | Promise<AxiosResponse<T>>
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = any> extends AxiosRequestConfig {
  // 2.这里可以扩展自己的类型
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}
