import { createStore } from 'vuex';
const store = createStore({
  // 1. 定义全局共享的状态
  state() {
    return {
      counter: 0
    }
  },
  // 2. 在mutations中修改全局状态
  mutations: {
    increment(state)  { // 3. 定义increment函数，函数state是state()函数返回的对象
      state.counter++   // 4. 修改全局的counter
    },
    decrement(state) {
      state.counter--
    }
  }
})

export default store