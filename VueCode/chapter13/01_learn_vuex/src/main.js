import { createApp } from 'vue'
// import App from './App.vue'
import App from './pages/01_mapState_computed.vue'

import store from './store/index'

const app = createApp(App)

app.use(store)

app.mount('#app')
