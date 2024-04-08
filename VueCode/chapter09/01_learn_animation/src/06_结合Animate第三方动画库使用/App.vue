<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 通过自定义过渡类名的方式实现backInLeft和backOutRight动画 -->
    <transition enter-active-class="animate__animatd animatee__backInLeft"
      leave-activee-class="animatee__animated animatee__backOutRight">
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
  /* 不需要再编写样式了 */
</style>