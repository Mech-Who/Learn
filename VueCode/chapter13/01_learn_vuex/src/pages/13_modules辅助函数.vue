<template>
  <div>
    <h4>home子模块homeCounter的状态： {{ homeCounter }}</h4>
    <h4>home子模块doubleHomeCounter： {{ doubleHomeCounter }}</h4>
    <button @click="homeIncrementCommit">+1</button>
    <button @click="incrementAction">+1</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { createNamespacedHelpers } from 'vuex';
// 方式四
import useMapper from '../hooks/useMappers' // 1. 导入自定义Hook

const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers("home")
export default {
  setup() {
    const stateFunc = useMapper(mapState, ['homeCounter'])  // 2. 使用自定义Hook
    const gettersFunc = useMapper(mapGetters, ['doubleHomeCount'])
    const mutationFuncs = mapMutations({
      homeIncrementCommit: 'increment'
    })
    const actionsFuncs = mapActions(['incrementAction'])
    return { ...stateFunc, ...gettersFunc, ...mutationFuncs, ...actionsFuncs }
  }
}
</script>

<style scoped></style>