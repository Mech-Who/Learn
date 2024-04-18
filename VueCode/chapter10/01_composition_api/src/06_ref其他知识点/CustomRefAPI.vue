<template>
  <div>
    <input v-model="message" />
    <h4>{{ message }}</h4>
  </div>
</template>

<script>
// import { ref } from 'vue'
import useDebounceRef from './hooks/useDebounceRef.js'; // 1. 导入自定义的ref函数
export default {
  setup() {
    // const message = ref("Hello World");  // 普通的响应式对象
    const message = useDebounceRef("Hello World");  // 2. 带有防抖功能的响应式对象
    return {
      message
    }
  }
}
</script>

<style scoped></style>