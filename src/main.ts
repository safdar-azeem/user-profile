import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'
import './assets/sass/main.scss'
import store, { key } from './store/index'

const options = {
   timeout: 2000,
   position: 'top-center',
}
createApp(App).use(store, key).use(Toast, options).mount('#app')
