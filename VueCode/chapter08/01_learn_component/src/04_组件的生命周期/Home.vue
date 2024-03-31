<template>
  <div class="home">
    <h4 ref="title">Home组件: {{ message }}</h4>
    <button @click="changeMessage">修改Home组件的message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World"
    }
  },
  methods: {
    changeMessage() {
      this.message = "你好啊，李银河"
    }
  },
  // 下面都是组件的生命周期函数（钩子）
  beforeCreate() {
    console.log("home beforeCreate");
  },
  created() {
    console.log("home created");
  },
  beforeMount() {
    console.log("home beforeMount");
  },
  mounted() {
    console.log("home mounted");
  },
  beforeUnmount() {
    console.log("home beforeUnmounted");
  },
  unmounted() {
    console.log("home unmounted");
  },
  beforeUpdate() {
    // 除了打印该生命周期，还顺便打印更新前的h4元素的innerHTML
    console.log("home beforeUpdate", this.$refs.title.innerHTML);
  },
  updated() {
    // 除了打印该生命周期，还顺便打印更新后的h4元素的innerHTML
    console.log("home updated", this.$refs.title.innerHTML);
  }
}
</script>

<style scoped></style>