<template>
  <div class="app" style="border: 1px solid #ddd; margin: 4px">
    App组件
    <reacitve-api></reacitve-api>
    <ref-api></ref-api>
  </div>
</template>

<script>
import ReactiveAPI from './ReactiveAPI.vue';
import RefAPI from './RefAPI.vue';
export default {
  components: {
    ReactiveAPI,
    RefAPI
  }
}
</script>

<style scoped></style>