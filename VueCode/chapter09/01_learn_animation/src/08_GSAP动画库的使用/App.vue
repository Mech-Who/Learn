<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 通过自定义过渡类名的方式实现backInLeft和backOutRight动画 -->
    <transition @enter="enter" @leave="leave" :css="false">
      <h4 v-if="isShow" style="border: 1px solid #ddd;width: 100px">
        Hello World
      </h4>
    </transition>
  </div>
</template>

<script>
// 导入GSAP动画库
import gsap from 'gsap'
export default {
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    enter(el, done) {
      console.log("enter", el);
      // 1. h4元素在整个进入过渡的阶段中应用了以下动画
      gsap.from(el, {
        scale: 0,
        x: 200,
        onComplete: done  // 调用回调函数done表示过渡结束
      })
    },
    leave(el, done) {
      console.log("leave", el);
      // 2. h4元素在整个离开过渡的阶段中应用了以下动画
      gsap.to(el, {
        scale: 0,
        x: 200,
        onComplete: done  // 调用回调函数done表示过渡结束
      })
    },
  }
}
</script>

<style scoped>
/* 不需要再编写样式了 */
</style>