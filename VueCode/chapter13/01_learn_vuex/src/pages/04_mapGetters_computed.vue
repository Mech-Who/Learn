<template>
  <div class="map-getters-computed">
    <h4>书籍总价：{{ $store.getters.totalPrice }}</h4>
    <h4>Vue.js 书籍总价：{{ $store.getters.totalPriceByName('Vue.js') }}</h4>

    <h4>mapGetters 书籍总价: {{ totalPrice }}</h4>
    <h4>mapGetters 书籍折扣: {{ discount }}</h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';  // 1. 导入mapGetters辅助函数
export default {
  computed: {
    ...mapGetters(['totalPrice']),  // 2. mapGetters函数接收数组的语法
    ...mapGetters({ // 3. 接收对象的语法
      discount: 'currentDiscount'
    })
  }
}
</script>

<style scoped>
</style>