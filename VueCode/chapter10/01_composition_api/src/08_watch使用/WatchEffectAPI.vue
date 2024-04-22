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
    const stop = watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        console.log("模拟网络请求，网络请求成功~");
      }, 2000)
      onInvalidate(() => {
        // 1. 监听到agee变化或监听停止时，会执行这里的代码
        clearTimeout(timer);  // 2. 清除上一次的定时器
        console.log("onInvalidate");
      })
      console.log("age:", age.value); // 2. 监听age的变化，age变化后会再次执行该回调函数
    });
    const changeAge = () => age.value++
    return {
      age,
      changeAge
    }
  }
}
</script>

<style scoped></style>