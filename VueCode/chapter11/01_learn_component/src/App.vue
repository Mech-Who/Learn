<template>
  <div class="app" style="border: 1px solid #ddd; margin: 4px">
    App组件
    <h4 v-format-time="'YYYY/MM/DD'">{{ timestamp }}</h4>
  </div>
</template>

<script setup>
const timestamp = 1645710167;
</script>

<style scoped></style>