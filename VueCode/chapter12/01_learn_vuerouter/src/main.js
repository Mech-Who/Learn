import { createApp } from 'vue'
import App from './App.vue'

import router from './index'

const app = createApp(App)

// 1. 安装路由插件
app.use(router)

app.mount('#app')
