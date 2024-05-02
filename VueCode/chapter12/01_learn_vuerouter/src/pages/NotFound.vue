<template>
  <div class="not-found">
    <h4>Page Not Found 404</h4>
    <p>您打开的路径页面不存在，请不要使用我们家的应用程序了</p>
    <h4>place: {{ $route.params.pathMatch }}</h4>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params);
  }
}
</script>

<style scoped>
</style>