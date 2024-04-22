<template>
  <div class="watch-effect-api">
    <h4>{{ age }}</h4>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
  setup() {
    const age = ref(18);
    // 1. watchEffect 会自动收集响应式依赖，默认先执行一次，但是获取不到新值和旧值
    // 3. stop是watchEffect函数返回的函数，专门用于停止监听
    const stop = watchEffect(() => {
      console.log("age:", age.value); // 2. 监听age的变化，age变化后会再次执行该回调函数
    });
    const changeAge = () => {
      age.value++
      if (age.value > 20) {
        stop(); // 4. 停止监听age的变化
      }
    }
    return {
      age,
      changeAge
    }
  }
}
</script>

<style scoped></style>