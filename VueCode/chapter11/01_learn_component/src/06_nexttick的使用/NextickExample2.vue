<template>
  <div class="next-tick-example-1" style="border: 1px solid #ddd; margin: 4px">
    <div>计数器：{{ counter }}</div>
    <button @click="increment">+1</button>
    <h4 style="width: 80px" ref="titleRef">{{ message }}</h4>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>

<script>
import { onUpdated, ref } from 'vue'
export default {
  setup() {
    const message = ref('')
    const titleRef = ref(null)
    const counter = ref(0)
    const addMessageContent = () => {
      message.value += "更新DOM"  // 2. 触发更新h4元素内容
    }
    const increment = () => {counter.value ++;} // 3. 触发更新div元素内容
    // 1. onUpdated生命周期函数。凡是DOM更新，都会被回调
    onUpdated(() => console.log("获取到h4元素的高度：", titleRef.value.offsetHeight))
    return {message, titleRef, counter, addMessageContent, increment}
  }
}
</script>

<style scoped>
</style>