import { computed } from 'vue';
import { useStore } from 'vuex';

export function useMapper(mapFn, mapper) {
  // 1. 获取store对象
  const store = useStore()
  // 2. 获取映射的结果，如functions:{name: function, age: function}
  const storeStateFns = mapFn(mapper)
  // 3. 将普通函数转换为计算属性函数
  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store})
    storeState[fnKey] = computed(fn)
  })
  return storeState
}