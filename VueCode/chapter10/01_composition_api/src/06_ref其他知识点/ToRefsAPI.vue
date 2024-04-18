<template>
  <div>
    <h4>{{ name }}-{{ age }}</h4>
    <button @click="changeAge">修改age++</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const info = reactive({
      name: "why",
      age: 18
    });
    // 1. ES6语法直接结构info对象，会失去响应式
    // let { name, age } = info;
    // toRefs 函数将reactive返回对象中的所有属性都转换成ref对象
    let { name, age } = toRefs(info);
    const changeAge = () => {
      info.age++; // 或 age.value++，任何一个修改都会引起另一个变化
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