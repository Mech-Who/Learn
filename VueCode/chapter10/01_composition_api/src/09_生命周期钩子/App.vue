<template>
  <div class="app">
    <button @click="increment">单击+1</button>
    {{ counter }}
  </div>
</template>

<script>
import { onUnmounted, ref } from 'vue';
export default {
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++
    onMounted(() => {
      console.log("App Mounted1");
    })
    onMounted(() => {
      console.log("App Mounted2");
    })
    onUpdated(() => {
      console.log("App onUpdated");
    })
    onUnmounted(() => {
      console.log("App onUnmounted");
    })
    return { counter, increment }
  }
}
</script>

<style scoped>
</style>