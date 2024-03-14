<template>
  <div class="app">
    App
    <home></home>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  // 在根组件中通过provide属性为子组件和孙子组件提供数据
  provide: {
    name: "why",
    age: 18,
    friends: this.friends,
  },
  data() {
    return {
      friends: ["jack", "rose"],
    };
  },
};
</script>

<style scoped></style>
