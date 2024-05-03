import { createStore } from 'vuex';
const store = createStore({
  state() { // 1. 定义全局共享的状态
    return {
      counter: 0
    }
  }
})

export default store