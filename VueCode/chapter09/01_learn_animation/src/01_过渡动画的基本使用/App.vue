<template>
  <div>
    <button @click="show = !show">显示/隐藏</button>
    <!-- 1. 使用transition内置组件包裹h4元素，并通过name属性指定过渡动画的类名为why -->
    <transition name="why">
      <h4 v-if="show" style="border: 1px solid #ddd;width: 100px;">Hello World</h4>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>
<!-- 2. 实现h4元素的过渡动画 -->
<style scoped>
/* 2.1 h4元素进入之前和离开之后应用的样式 */
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

/* 2.2 h4元素开始进入和离开应用的样式 */
.why-enter-to,
.why-leave-from {
  opacity: 1;
}

/* 2.3 h4元素在整个进入/离开过度的截断中应用的样式 */
.why-enter-active,
.why-leave-active {
  transition: opacity 2s ease;
  /* 过渡效果 */
}
</style>