<template>
  <div class="home">
    Home组件
    <div>{{ name }} - {{ age }}</div>
    <div>{{ counter }}</div>
    <button @click="homeIncrement">Home组件+1</button>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
  setup() {
    // 1. 在子组件中获取父组件provide函数提供的数据（孙子组件获取的代码也是一样的）
    const name = inject("name");  // 诸如父组件提供的name
    const age = inject("age");
    const counter = inject("counter");

    const homeIncrement = () => counter.value++;
    return { name, age, counter, homeIncrement }
  }
}
</script>

<style scoped></style>