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
      // 2. computed函数返回的是ref响应式对象
      friendLength: computed(() => this.friends.length)
    };
  },
  data() {
    return {
      friends: ["jack", "rose"],
    };
  },
};
</script>

<style scoped></style>
