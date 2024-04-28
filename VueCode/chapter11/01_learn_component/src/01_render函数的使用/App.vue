<template>
  <div class="app" style="border: 1px solid #ddd; margin: 4px">
    App组件
    <RenderExample></RenderExample>
    <RenderCounter></RenderCounter>
  </div>
</template>

<script setup>
import RenderExample from './RenderExample.vue';
import RenderCounter from './RenderCounter.vue';
</script>