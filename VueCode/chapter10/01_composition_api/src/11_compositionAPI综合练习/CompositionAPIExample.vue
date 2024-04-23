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
    const { counter, doubleCounter, increment, decrement } = useCounter();
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