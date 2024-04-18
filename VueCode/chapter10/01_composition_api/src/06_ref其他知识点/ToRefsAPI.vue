<template>
  <div>
    <h4>{{ name }}-{{ age }}</h4>
    <button @click="changeAge">修改age++</button>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const info = reactive({
      name: "why",
      age: 18
    });
    // 1. ES6语法直接结构info对象，会失去响应式
    let { name, age } = info;
    const changeAge = () => {
      info.age++;
      console.log(info.age);
    }
    return {
      name,
      age,
      changeAge
    }
  }
}
</script>

<style scoped>
</style>