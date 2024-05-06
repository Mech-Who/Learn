const homeModule = {
  namespaced: true, // 1. 为home模块添加命名空间，其它代码和user模块一样
  state() { // home模块的state
    return {
      // 在home模块中定义一个homeCounter全局变量
      homeCounter: 100
    }
  },
  getters: {
    // 2. home模块： state、getters；根模块：rootState、rootGetters
    homeCountAddRootCount(state, getters, rootState, rootGetters) {
      return state.homeCounter + rootState.counter
    }
  },
  mutations: {
  },
  actions: {
    // 3. home模块：state、commit、dispatch、getters;根模块：rootState、rootGetters
    incrementAction({state, commit, dispatch, getters, rootState, rootGetters}) {
      commit('increment') // 4. 提交到当前模块的mutations中
      commit('increment', null, {root: true}) // 5. 提交到根模块的mutation中
      dispatch("incrementAction", null, {root:true})  // 6. 分发到根模块的action中
    }
  }
}
export default homeModule