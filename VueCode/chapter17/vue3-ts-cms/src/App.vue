<template>
  <el-config-provider :locale="locale">
    <div class="app">
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const locale = ref(zhCn)
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
