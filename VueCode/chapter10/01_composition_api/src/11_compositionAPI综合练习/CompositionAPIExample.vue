<template>
  <div class="composition-api-example">
    <!-- 1. 计数器案例 -->
    <div>当前计数: {{ counter }}</div>
    <div>当前计数*2: {{ doubleCounter }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import useCounter from 'hooks/useCounter.js';
export default {
  setup() {
    // 1. 计数器案例的逻辑代码
    const { counter, doubleCounter, increment, decrement } = useCounter();

    // 2. 修改网页的标题
    const titleRef = ref("coder");
    document.title = titleRef.value // 更新网页标题为coder

    return {
      counter,
      doubleCounter,
      increment,
      decrement
    }
  }
}
</script>

<style scoped></style>