<template>
  <div class="watch-effect-api-flush">
    <!-- 5. h4元素挂载玩成后，会自动赋值到titleRef内部值中 -->
    <h4 ref="titleRef">哈哈哈</h4>
  </div>
</template>

<script>
import { watchEffect } from 'vue';

export default {
  setup() {
    // 1. 定义一个titleRef对象，用于存储h4元素的DOM对象
    const titleRef = ref(null);
    // 2. 监听titleeRef的变化，即赋值操作
    watchEffect(() => {
      console.log(titleRef.value);  // 3. 打印h4元素的DOM对象
    })
    return { titleRef } // 4. 返回titleeRef对象给template使用
  }
}
</script>

<style scoped>
</style>