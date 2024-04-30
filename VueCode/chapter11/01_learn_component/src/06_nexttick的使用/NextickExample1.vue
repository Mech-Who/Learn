<template>
  <div class="next-tick-example-1" style="border: 1px solid #ddd; margin: 4px">
    <h4 style="width: 80px" ref="titleRef">{{ message }}</h4>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const message = ref('')
    const titleRef = ref(null)
    const addMessageContent = () => {
      message.value += "更新DOM"  // 1. 单击按钮修改h4元素内容后，立即获取高度
      console.log("获取到h4元素的高度：", titleRef.value.offsetHeight);
    }
    return {message, titleRef, addMessageContent}
  }
}
</script>

<style scoped>
</style>