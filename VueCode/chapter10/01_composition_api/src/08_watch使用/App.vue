<template>
  <div class="app">
    App组件
    <!-- <WatchEffectAPI></WatchEffectAPI> -->
    <WatchAPI></WatchAPI>
  </div>
</template>

<script>
import WatchEffectAPI from './WatchEffectAPI.vue';
import WatchAPI from './WatchAPI.vue'
export default {
  components: {
    WatchEffectAPI,
    WatchAPI
  }
}
</script>

<style scoped></style>