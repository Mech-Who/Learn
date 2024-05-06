<template>
  <div>
    <h4>home子模块homeCounter的状态： {{ homeCounter }}</h4>
    <h4>home子模块doubleHomeCounter： {{ doubleHomeCounter }}</h4>
    <button @click="homeIncrementCommit">+1</button>
    <button @click="incrementAction">+1</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
// 方式三
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('home')
export default {
  computed: { // 方式三
    ...mapState(['homeCounter']),
    ...mapGetters(['doubleHomeCount'])
  },
  methods: {  // 方式三
    ...mapMutations({
      homeIncrementCommit: "increment"
    }),
    ...mapActions(['incrementAction'])
  }
}
</script>

<style scoped></style>