<template>
  <div class="app">
    <h4>App组件message变量：{{ message }}</h4>
    <h4>App组件title变量：{{ title }}</h4>
    <button @click="changeMessage">App组件修改message</button>
    <!-- 1. 在组件中使用v-model指令 -->
    <hy-input v-model="message"></hy-input>
    <!-- 上面的v-model指令，等价于下面的语法 -->
    <!-- <hy-input :modelValue="message" @update:model-value="message = $event"></hy-input> -->
    <!-- 2. 在组件上绑定两个v-model指令 -->
    <hy-multiple-input v-model="message" v-model:title="title"></hy-multiple-input>
  </div>
</template>

<script>
import HyInput from "./HyInput.vue"
import HyMultipleInput from "./HyMultipleInput.vue"
export default {
  components: {
    HyInput,
    HyMultipleInput
  },
  data() {
    return {
      message: "Hello",
      title: "World"
    }
  },
  methods: {
    changeMessage() {
      this.message = "coderwhy"
    }
  }
}
</script>

<style scoped></style>