<template>
  <div class="map-getters-computed">
    <h4>书籍总价：{{ $store.getters.totalPrice }}</h4>
    <h4>Vue.js 书籍总价：{{ $store.getters.totalPriceByName('Vue.js') }}</h4>
    <h4>mapGetters Vue.js 书籍总价: {{ totalPriceByName('vuejs') }}</h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';  // 1. 导入mapGetters辅助函数
export default {
  setup(){
    const stateGetters = useGetters(['totalPriceByName']) // 2. 调用自定义Hook
    return { ...stateGetters }
  }
}
</script>

<style scoped>
</style>