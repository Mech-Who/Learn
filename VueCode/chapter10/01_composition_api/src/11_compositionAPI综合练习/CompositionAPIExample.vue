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
import { ref, computed } from 'vue';
export default {
  setup() {
    let counter = ref(100);
    let doubleCounter = computed(() => counter.value * 2)
    const increment = () => counter.value++;
    const decrement = () => counter.value--;
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