import { computed } from 'vue';
import { mapState, useStore } from 'vuex';

// 1. 自定义一个useState Hook函数
export function useState(mapper) {
  // 2. 获取store对象
  const store = useStore();
  // 3. 获取映射后的对象
  const storeStateFns = mapState(store);
  // 4. 将普通函数转成计算属性函数
  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store})
    storeState[fnKey] = computed(fn)
  })
  return storeState
}