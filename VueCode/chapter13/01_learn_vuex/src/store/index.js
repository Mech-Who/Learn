import { createStore } from 'vuex';
const store = createStore({
  // 1. 定义全局共享的状态
  state() {
    return {
      counter: 0,
      name: 'why',
      age: 18,
      books: [  // 5. 购物车书籍列表
        {name: "vue.js", count: 10, price: 10},
        {name: "React", count: 5, price: 20},
        {name: "webpack", count: 4, price: 25},
      ],
      discount: 0.9 // 书籍打9折，该变量暂时没用到，在下一个案例中会用到
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
  },
  getters: {
    totalPrice(state) { // 6. 计算购买的书籍总价
      let totalPrice = 0;
      for (const book of state.books) {
        totalaPrice += book.count * book.price
      }
      return totalPrice
    }
  }
})

export default store