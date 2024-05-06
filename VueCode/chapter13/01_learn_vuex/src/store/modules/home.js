const homeModule = {
  namespaced: true, // 1. 为home模块添加命名空间，其它代码和user模块一样
  state() { // home模块的state
    return {
      // 在home模块中定义一个homeCounter全局变量
      homeCounter: 100
    }
  },
  getters: {},
  mutations: {},
  actions: {}
}
export default homeModule