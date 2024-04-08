<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 1. 切换显示和隐藏动态组件 -->
    <transition name="why">
      <component :is="isShow ? 'home': 'about'">Hello World</component>
    </transition>
  </div>
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'
export default {
  components: {
    Home,
    About
  },
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
/* 1. transition动画 */
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
</style>