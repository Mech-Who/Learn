<template>
  <div class="app" style="border: 1px solid #ddd; margin: 4px">
    App组件
    <!-- 每一个大写都要用-分割，所以不如写大写形式好看 -->
    <!-- <reactive-a-p-i></reactive-a-p-i> -->
    <ReactiveAPI></ReactiveAPI>
    <!-- <ref-a-p-i></ref-a-p-i> -->
    <RefAPI></RefAPI>
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