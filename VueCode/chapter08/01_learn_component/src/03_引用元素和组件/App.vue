<template>
  <div class="app">
    <!-- 1. 在h4上个通过ref注册一个模板引用 -->
    <h4 ref="title">App中的h4元素</h4>
    <!-- 2. 在<nav-bar>上通过ref注册一个模板引用 -->
    <nav-bar ref="navBar"></nav-bar>

    <button @click="btnClick">获取h4元素对象和NavBar组件实例</button>
  </div>
</template>

<script>
  import NavBar from "./NavBar.vue"
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        names: ["coder", "why"]
      }
    },
    methods: {
      btnClick() {
        // 通过this.$refs访问已注册的模板引用(title)
        console.log("h4元素对象=", this.$refs.title);
        console.log("Navbar组件实例", this.$refs.navBar); // 访问已注册的模板引用（navBar）
        console.log("访问NavBar组件实例的message便来那个:", this.$refs.navBar.message);
        // 调用该Navbar组件实例的sayHello方法
        this.$refs.navBar.sayHello();
        // $el:获取Navbar组件实例的DOM元素对象
        console.log(this.$refs.navBar.$el);
      }
    }
  }
</script>

<style scoped>
</style>