<template>
  <div>
    <h4>{{ name }}-{{ age }}</h4>
    <button @click="changeAge">修改age++</button>
  </div>
</template>

<script>
import { reactive, toRef } from 'vue';
export default {
  setup() {
    const info = reactive({
      name: "why",
      age: 18
    });
    // 1. ES6语法直接结构info对象，会失去响应式
    // let { name, age } = info;
    // 2. toRefs 函数将reactive返回对象中的所有属性都转换成ref对象
    // let { name, age } = toRefs(info);
    // 3. toRef函数将某个属性转换为ref对象
    let name = toRef(info, "name"); // 仅将name属性转换为ref对象
    let age = toRef(info, "age"); // 仅将age属性转换为ref对象
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