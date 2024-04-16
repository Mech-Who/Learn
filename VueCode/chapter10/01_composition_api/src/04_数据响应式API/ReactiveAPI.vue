<template>
  <div class="reactive-api" style="border:1px solid #ddd;margin: 4px">
    ReactiveAPI组件
    <h4>当前计数：{{ state.counter }}</h4>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive } from 'vue'; // 1. 导入响应式API
export default {
  setup() {
    // 2. 定义响应式数据，返回值是一个对象的响应式代理: state
    const state = reactive({
      counter: 100
    })
    const increment = () => {
      state.counter++;  // 3. 局部函数使用响应式数据
    }
    return {
      state, // 4. 返回响应式数据
      increment // 5. 返回定义的方法，类似于在methods中定义的方法
    }
  }
}
</script>

<style scoped></style>