<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="why">
      <h4 v-if="isShow" style="border: 1px solid #ddd;width: 100px;">Hello World</h4>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<!-- 2. CSS animation动画的实现 -->
<style scoped>
/* 2.1 h4元素在整体进入过渡阶段中应用的样式 */
.why-enter-active {
  animation: bounce 1s ease;
}

/* 2.2 h4元素在整体离开过渡阶段中应用的样式 */
.why-leave-active {
  animation: bounce 1s ease reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>