<template>
  <div class="map-state-computed">
    <h4>Home: {{ $store.state.counter }}</h4>
    <h4>Home: {{ counter }}</h4>
    <h4>Home: {{ name }}</h4>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['counter', 'name']) // 3. mapState函数接收数组类型参数
}
</script>

<style scoped></style>