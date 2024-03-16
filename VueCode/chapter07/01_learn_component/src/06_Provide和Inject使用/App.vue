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
  // provide属性为函数，并返回一个对象
  provide() {
    return {
      name: "why",
      age: 18,
      friends: this.friends,
      friendLength: this.friends.friendLength // 继续提供friendLength数据，但是它不是响应式数据了
    }
  },
  data() {
    return {
      friends: ["jack", "rose"],
    };
  },
};
</script>

<style scoped></style>
