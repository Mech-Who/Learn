/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 1. 声明全局变量，告诉编译器该变量已经声明了
declare const appName: string
declare const appVersion: string

// 2. 声明全局函数，告诉编译器该函数已经声明了
// declare function getAppName: () => void
declare function getAppName(): void

// 3. 声明全局类
declare class Person {
  name: string
  age: number
  constructor(name: string, age: number)
}