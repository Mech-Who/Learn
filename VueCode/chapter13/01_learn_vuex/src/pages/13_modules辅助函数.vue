<template>
  <div>
    <h4>home子模块homeCounter的状态： {{ homeCounter }}</h4>
    <h4>home子模块doubleHomeCounter： {{ doubleHomeCounter }}</h4>
    <button @click="homeIncrementCommit">+1</button>
    <button @click="incrementAction">+1</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  computed: { // 方式一
    ...mapState({
      homeCounter: state => state.home.homeCounter
    }),
    ...mapGetters({
      doubleHomeCount: "home/doubleHomeCount"
    })
  },
  methods: {  // 方式一
    ...mapMutations({
      homeIncrementCommit: "home/increment"
    }),
    ...mapActions({
      incrementAction: "home/incrementAction"
    })
  }
}
</script>

<style scoped></style>