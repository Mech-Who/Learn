import { createApp } from 'vue'
import App from './07_computed函数的基本使用/App.vue'

let app = createApp(App)

// 1. 使用app.mixin方法，全局混入Mixin对象
app.mixin({
  created() {
    console.log("global mixin created");
  }
})

app.mount('#app')
