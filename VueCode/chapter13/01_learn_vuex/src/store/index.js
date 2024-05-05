import { createStore } from 'vuex';
import { INCREMENT_N } from './mutation-types'
import { useAttrs } from 'vue';

const store = createStore({
  // 1. 定义全局共享的状态
  state() { // 根模块state
    return {
      counter: 0, // 根模块的便来那个
      name: 'why',
      age: 18,
      books: [  // 5. 购物车书籍列表
        {name: "vue.js", count: 10, price: 10},
        {name: "React", count: 5, price: 20},
        {name: "webpack", count: 4, price: 25},
      ],
      discount: 0.9, // 书籍打9折，该变量暂时没用到，在下一个案例中会用到
      uuid: null
    }
  },
  // 2. 在mutations中修改全局状态
  mutations: {
    increment(state)  { // 3. 定义increment函数，函数state是state()函数返回的对象
      state.counter++   // 4. 修改全局的counter
    },
    decrement(state) {
      state.counter--
    },
    // 1. 定义类型为incrementN的mutation函数，这里的payload是对象类型
    [INCREMENT_N](state, payload){
      state.counter += payload.num  // 2. 修改counter值
    },
    addUUID(state, payload) {
      state.uuid = payload
    }
  },
  // 3. 在getters中定义方法
  getters: {
    // 6. 计算购买的书籍总价
    totalPrice(state, getters) { // 参数一：state对象，参数二：getters对象
      let totalPrice = 0;
      for (const book of state.books) {
        totalaPrice += book.count * book.price
      }
      return totalPrice * getters.currentDiscount // 通过getters访问当前的折扣
    },
    currentDiscount(state) {  // 3. 获取当前的折扣
      return state.discount
    },
    totalPriceByName(state) {
      return   (bookName) => { // 7. 返回一个函数，该函数接收一个bookName参数
        let totalPrice = 0;
        for (const book of state.books) {
          if(bookName ===book.name){  // 8. 只计算当前那本书的总价
            totalPrice += book.count * book.price
          }
        }
        return totalPrice
      }
    }
  },
  // 4. actions的基本使用 
  actions: {
    incrementAction(context) {
      // 5. setTimeout模拟异步
      setTimeout(() => {
        context.commit('increment') // 6. 提交一个type为increment的mutation
      })
    },
    decrementAction(context) {
      // 7. ES6解构context对象
      let {commit, dispatch, state, rootState, getters, rootGetters} = context
      commit('decrement') // 8. 提交一个type为decrement的mutation
    },
    incrementNAction(context, payload) {  // 1. payload接收dispatch传递过来的参数
      context.commit(INCREMENT_N, payload)  // 2. payload值为{num:10}，提交给mutation
    },
    // 8. 编写一个获取uuid的action
    getUUIDAction({commit}) {
      // 9. 直接返回Promise对象，作为dispatch函数的返回值
      return new Promise((resolve, reject) => {
        // 9.1. 发起网络请求，该URL是一个免费获取uuid的接口
        fetch('https://httpbin.org/uuid')
        // 9.2. 将res解析为JSON格式的Promise对象
        .then(res => res.json())
        .then((date) => {
          // 9.3. 将请求获取的数据存到Vuex中
          commit('addUUID', data.uuid)
          // 9.4. 调用resolve完成异步操作
          resolve(data)
        }).catch((err) => {
          reject(err) // 9.5. 错误处理
        })
      })
    }
  },
  // 10. 引入home和user两个子模块
  modules: {
    home: home, // 11. key指定模块的名称，value指定引入的模块
    user // 12. ES6简写语法，相当于user: user
  }
})

export default store