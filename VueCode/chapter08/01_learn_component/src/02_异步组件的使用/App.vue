<template>
  <div class="app">
    App组件
    <home></home>
    <!-- <async-category></async-category> -->
    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
  </div>
</template>

<script>
// 普通方式导入的Home.vue组件，不会进行分包处理。
import Home from "./Home.vue"
import Loading from "./Loading.vue"
// import { sum } from "./utils/math.js"
import { defineAsyncComponent } from "vue";
// 1. 异步加载组件，工厂函数类型的语法
// const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"))
// 2. 异步加载组件，对象类型的语法
const AsyncCategory = defineAsyncComponent({
  // 2.1 需要异步加载的组件
  loader: () => import("./AsyncCategory.vue"),
  // 2.2 加载时显示Loading组件
  loadingComponent: Loading,
  // 2.3 加载失败是显示Error组件
  // errorComponent: Error,
  // 2.4 在显示loadingComponent之前的延迟，默认值：200（单位 ms）
  delay: 200,
  // 2.5 加载组件时的时间超过设定值，将显示错误组件，默认值：Infinity（即永不超时，单位 ms）
  timeout: 3000,
  // 2.6 定义组件是否可挂起，默认值：true
  suspensible: false, // false代表异步组件可以退出Suspense控制，并始终控制自己的加载状态
  /**
   * 2.7 组件加载失败的回调
   * @param { * } error 错误信息对象
   * @param { * } retry 一个函数，用于指示当promise夹杂爱妻reject时，加载器是否应该重试
   * @param { * } fail 一个函数，指示加载程序结束并退出
   * @param { * } attempts 允许的最大重试次数
   */
  onError: function (error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      retry();
    } else {
      // 注意，retry/fail就像promise的resolve/reject一样
      // 必须调用其中一个，才能继续错误处理
      fail();
    }
  }
})
export default {
  component: {
    Home,
    AsyncCategory,
    Loading
  }
}
</script>