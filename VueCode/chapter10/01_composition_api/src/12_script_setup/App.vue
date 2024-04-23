<template>
  <div class="app">
    App组件
    <DefinePropsEmitAPI message="App传递过来的message" @increment="getCounter"></DefinePropsEmitAPI>
    <ScriptSetupExample></ScriptSetupExample>
  </div>
</template>

<script setup>
import ScriptSetupExample from './ScriptSetupExample.vue';
import DefinePropsEmitAPI from './DefinePropsEmitAPI.vue';

const getCounter = (number) => console.log("App组件拿到子组件传递过来的number：" + number);

</script>

<style scoped></style>