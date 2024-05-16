/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 1. 声明全局变量，告诉编译器该变量已经声明了
declare const appName: string
declare const appVersion: string
