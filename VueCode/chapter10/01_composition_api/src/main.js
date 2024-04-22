import { createApp } from 'vue'
import App from './10_Provide和Inject/App.vue'

let app = createApp(App)

// 1. 使用app.mixin方法，全局混入Mixin对象
app.mixin({
  created() {
    console.log("global mixin created");
  }
})

app.mount('#app')
