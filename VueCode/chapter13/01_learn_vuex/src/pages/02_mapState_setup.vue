<template>
  <div class="mapstate-setup">
    <h4>Setup: {{ $store.state.counter }}</h4>
    <h4>Setup: {{ counter }}</h4>
    <h4>Name: {{ name }}</h4>
    <h4>Age: {{ age }}</h4>
  </div>
</template>

<script>
import { mapState, useStore } from 'vuex';
import { computed } from 'vue';
export default {
  setup() {
    const store = useStore();
    // 1. 在computed中通过store读取状态
    const counter = computed(() => store.state.counter)
    const home = computed(() => store.state.home);
    const hyAge = computed(() => store.state.age);
    return { counter, home, hyAge }
  }
}
</script>

<style scoped></style>