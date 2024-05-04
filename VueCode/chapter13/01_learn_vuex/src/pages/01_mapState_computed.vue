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
  computed: {
    counter() {
      return this.$store.state.counter
    },
    ...mapState(['name']),  // 4. mapState函数的解构
    ...mapState({ // 5. mapState函数的解构
      hyAge: 'age'
    })
  }
}
</script>

<style scoped></style>