<template>
  <div class="define-expose-api" style="border: 1px solid #ddd; margin: 4px">
    DefineExposeAPI组件
  </div>
</template>

<script setup>
import { ref } from 'vue'

const age = 18; // 普通数据
const name = ref('coderwhy'); // 响应式数据
const showMessage = () => console.log("showMessage方法"); // 定义方法
// 1. 该组件需要暴露出去的属性和方法
defineExpose({ age, name, showMessage })
</script>

<style scoped></style>