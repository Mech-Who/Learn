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
    const titleRef = useTitle("coder");
    setTimeout(() => {
      // 3. 过3s后修改titleRef的值，被useTitle函数的watch监听到，就会修改标题
      titleRef.value = "why"
    }, 3000)

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