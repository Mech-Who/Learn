<template>
  <div class="app" style="border: 1px solid #ddd; margin: 4px">
    App组件
    <ToRefsAPI></ToRefsAPI>
  </div>
</template>

<script>
import ToRefsAPI from './ToRefsAPI.vue'
export default {
  components: {
    ToRefsAPI
  }
}
</script>

<style scoped>
</style>