<template>
  <div class="app">
    App
    <home/>
    <about/>
  </div>
</template>

<script>
import About from "./About.vue";
import Home from "./Home.vue";
export default {
  components: {
    About,
    Home,
  },
};
</script>

<style scoped></style>
