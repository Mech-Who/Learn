<template>
  <div class="app">
    App组件
    <OptionsAPIExample></OptionsAPIExample>
    <CompositionAPIExample></CompositionAPIExample>
  </div>
</template>

<script>
import OptionsAPIExample from './OptionsAPIExample.vue';
import CompositionAPIExample from './CompositionAPIExample.vue';

export default {
  components: {
    OptionsAPIExample,
    CompositionAPIExample
  }
}
</script>

<style scoped></style>