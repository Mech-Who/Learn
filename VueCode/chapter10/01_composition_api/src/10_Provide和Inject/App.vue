<template>
  <div class="app">
    App组件
    <div>{{ name }} - {{ age }}</div>
    <div>{{ counter }}</div>
    <button @click="increment">App组件+1</button>
    <home></home>
  </div>
</template>

<script>
import { provide, ref } from 'vue';
import Home from './Home.vue'
export default {
  components: {
    Home
  },
  setup() {
    const name = "coderwhy";  // 普通数据
    const age = 18;
    let counter = ref(100); // 响应式数据
    // 1. 向子组件或孙子组件提供数据
    provide("name", name);
    provide("age", age);  // 提供普通数据
    provide("counter", counter); // 提供响应式数据

    const increment = () => counter.value++;
    return { name, age, increment, counter }
  }
}
</script>

<style scoped></style>