import { createApp } from 'vue'
import App from './App.vue'
import store from '../store'
import router from './router/index'
//import './assets/styles/styles.scss'
createApp(App).mount('#app')
App.use(router)
App.use(store)
