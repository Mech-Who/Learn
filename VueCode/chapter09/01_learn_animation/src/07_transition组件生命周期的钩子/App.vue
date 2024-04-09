<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 通过自定义过渡类名的方式实现backInLeft和backOutRight动画 -->
    <transition :appear="true"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @afterLeave="afterLeave">
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
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter"); // 1. 在元素被插入DOM之前被调用
    },
    // 参数1：el表示当前DOM对象。参数2：done表示动画结束的回调函数
    enter(el, done) {
      console.log("enter"); // 2. 在元素被插入DOM之后的下一帧被调用
    },
    afterEnter(el) {
      console.log("afterEnter");  // 3. 当进入过渡完成时调用
    },
    beforeLeave(el) {
      console.log("beforeLeave"); // 4. 在leave钩子之前调用
    },
    leave(el, done) {
      console.log("leave"); // 5. 在离开过渡开始时调用
    },
    afterLeave(el) {
      console.log("afterLeave");  // 6. 在离开过渡完成，且元素已从DOM中移除时调用
    }
  }
}
</script>

<style scoped>
  /* 不需要再编写样式了 */
</style>