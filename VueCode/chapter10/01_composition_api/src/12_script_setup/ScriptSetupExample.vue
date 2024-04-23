<template>
  <div class="script-setup-example">
    <h4>当前计数：{{ counter }}</h4>
    <button @click="increment">+1</button>
  </div>
</template>

<!-- 1. script setup 语法糖 -->
<script setup>
// 2. counter\increment 是在顶层定义的， 能在模板中直接使用
import { ref } from 'vue';

const counter = ref(0);
const increment = () => counter.value++;
</script>

<style scoped></style>