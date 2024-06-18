import { createStore } from 'vuex'
import login from './login/login'
import type { IRootState } from './types'

export default createStore<IRootState>({
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
