<template>
  <div class="home-content">
    HomeContent
    <p>{{ name }} - {{ age }} - {{ friends }} - {{ friendLength }}</p>
  </div>
</template>

<script>
export default {
  inject: ["name", "age", "friends", "friendLength"], // 孙子组件使用inject属性注入祖父组件（App.vue）提供的数据
};
</script>

<style scoped></style>
