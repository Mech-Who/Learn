<template>
  <div class="app">
    <!-- 3. 使用注册的组件 -->
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>
<script>
// 1. 分别倒入Header、Main和Footer组件
import Header from "./Header.vue";
// 导入文件可以省略扩展名，但建议不要省略。省略扩展名后，在模板中使用该组件时，将不会有智能提示
import Main from "./Main";
import Footer from "./Footer";
export default {
  components: {
    // 2. 注册局部组件
    Header,
    Main,
    Footer,
  },
};
</script>
<style scoped>
h4 {
  text-decoration: underline;
}
</style>
