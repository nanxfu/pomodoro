import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import 'animate.css'
// console.log(router)
const app = createApp(App)
app.use(router)
app.mount('#app')

