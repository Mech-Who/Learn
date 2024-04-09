<template>
  <div class="app">
    <input type="number" v-model="counter">
    <h2>当前计数：{{ showNumber.toFixed(0) }}</h2>
  </div>
</template>

<script>
// 导入GSAP动画库
import gsap from 'gsap'
export default {
  data() {
    return {
      counter: 1,
      showNumber: 0
    }
  },
  watch: {
    counter(newValue) {
      // 参数1：this为目标对象，这里是Vue实例
      // 参数2：为Vue实例中的showNumber属性添加动画，即在1s中showNumber由1过渡到input输入的数值
      gsap.to(this, { duration: 1, showNumber: newValue })
    }
  }
}
</script>

<style scoped>
/* 不需要再编写样式了 */
</style>