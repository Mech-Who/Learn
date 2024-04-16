<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="foo">单击调用demoMixin定义的foo方法</button>
  </div>
</template>

<script>
import { demoMixin } from './mixins/demoMixin'
export default {
  // 将demoMixin定义的data、methods和created选项混入该组件中，也支持混入其他组件中
  mixins: [demoMixin],
  data() {
    return {
      // 1. message变量和demoMixin对象中定义的message发生冲突，那么会使用该组件的message
      message: "Hello App",
      title: "Hello World"
    }
  },
  methods: {
    // 2. foo方法和demoMixin对象中定义的foo发生冲突，那么使用该组件的foo方法
    foo() {
      console.log("app foo");
    },
    bar() {
      console.log("bar function");
    }
  },
  // 3. 生命周期的钩子函数和demoMixin对象中的重复，那么它们会被合并到数组中，都会被调用
  created() {
    console.log("App created 执行");
  }
}
</script>

<style scoped></style>