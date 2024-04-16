<template>
  <div class="ref-api-other" style="border: 1px solid #ddd; margin: 4px">
    RefAPIOther组件（演示ref的浅层解包）
    <h4>当前计数：{{ counter }}</h4>
    <!-- 4. info中的ref对象可以自动解包 -->
    <h4>当前计数：{{ info.counter }}</h4>
    <!-- 5. reactiveInfo中的ref对象可以自动解包 -->
    <h4>当前计数：{{ reactiveInfo.counter }}</h4>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  setup() {
    let counter = ref(100); // 1. 定义响应式数据
    const info = {  // 2. 普通对象包含ref响应式对象
      counter
    }
    const reactiveInfo = reactive({ // 3. reactive响应式对象包含ref响应式对象
      counter
    })
    const increment = () => {
      counter.value++
      console.log(counter.value);
    }
    return {
      counter, increment,
      info, reactiveInfo
    }
  }
}
</script>

<style scoped>
</style>