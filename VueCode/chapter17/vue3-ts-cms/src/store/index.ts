import { createStore } from 'vuex'
import login from './login/login'
import type { IRootState } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
setupStore() // 初始化login模块的store
export default store
