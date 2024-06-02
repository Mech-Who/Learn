/* eslint-disable */
declare module '*.vue' {
  // 导入 DefineComponent 类型
  import type { DefineComponent } from 'vue'
  // 指定 component 组件的类型为 DefineComponent 类型
  const component: DefineComponent<{}, {}, any>
  export default component
}
