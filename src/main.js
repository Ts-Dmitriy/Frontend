import { createApp } from 'vue'
import App from './App.vue'
import store from '../store'
import router from './router/index'
createApp(App).mount('#app')
App.use(router)
App.use(store)
App.use(router)