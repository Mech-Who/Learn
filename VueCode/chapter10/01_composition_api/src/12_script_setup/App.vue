<template>
  <div class="app">
    App组件
    <DefineExposeAPI ref="defineExposeAPI"></DefineExposeAPI>
    <DefinePropsEmitAPI message="App传递过来的message" @increment="getCounter"></DefinePropsEmitAPI>
    <ScriptSetupExample></ScriptSetupExample>
  </div>
</template>

<script setup>
import ScriptSetupExample from './ScriptSetupExample.vue';
import DefinePropsEmitAPI from './DefinePropsEmitAPI.vue';
import DefineExposeAPI from './DefineExposeAPI.vue';

import { ref, watchEffect } from 'vue'

// 1. 获取DefineExposeAPI.vue组件的实例和该组件暴露的属性
const defineExposeAPI = ref(null)
watchEffect(() => {
  console.log(defineExposeAPI.value); // 1.1 组件的实例
  console.log(defineExposeAPI.value.name); // 1.2 响应式数据
  console.log(defineExposeAPI.value.age);
  defineExposeAPI.value.showMessage()
}, {
  flush: "post"
})

const getCounter = (number) => console.log("App组件拿到子组件传递过来的number：" + number);

</script>

<style scoped></style>