<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="why" appear>
      <h4 v-if="isShow" style="border: 1px solid #ddd;width: 100px">
        Hello World
      </h4>
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

<style scoped>
  .why-enter-active {
    /* 1. 使用Animate.css的backInLeft从左边进入的动画 */
    animation: backInLeft 1s ease-in;
  }
  .why-leave-active {
    /* 2. 使用Animate.css的backOutRight从右边离开的动画 */
    animation: backOutRight 1s ease-in;
  }
</style>