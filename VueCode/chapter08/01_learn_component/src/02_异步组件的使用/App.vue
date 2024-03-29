<template>
  <div class="app">App组件

  </div>
</template>

<script>
// 普通方式导入的Home.vue组件，不会进行分包处理。
import Home from "./Home.vue"
// import { sum } from "./utils/math.js"
import { defineAsyncComponent } from "vue";
// 使用defineAsyncComponent函数异步加载AsyncCategoryt.vue组件，会进行分包处理
const AsyncCategory = defineAsyncComponent(() => {
  import("./AsyncCategory.vue")
})
export default {
  component: {
    Home,
    AsyncCategory
  }
}
</script>