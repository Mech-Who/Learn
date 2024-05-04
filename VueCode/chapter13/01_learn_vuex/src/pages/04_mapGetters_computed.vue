<template>
  <div class="map-getters-computed">
    <h4>书籍总价：{{ $store.getters.totalPrice }}</h4>
    <h4>Vue.js 书籍总价：{{ $store.getters.totalPriceByName('Vue.js') }}</h4>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>