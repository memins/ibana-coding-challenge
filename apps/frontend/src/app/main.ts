import FloatingVue from 'floating-vue'
import { createPinia } from "pinia";
import { createApp } from 'vue'
import Toast, { POSITION } from 'vue-toastification'
import type { ToastOptions } from "vue-toastification/dist/types/types"

import App from './App.vue'
import i18n from './i18n'
import router from './router'

import '@vuepic/vue-datepicker/dist/main.css'
import './main.css'
import 'vue-toastification/dist/index.css'
import 'floating-vue/dist/style.css'


const app = createApp(App)
const pinia = createPinia()

const options: ToastOptions = {
    position: POSITION.TOP_CENTER,
    timeout: 10000,
}

app.use(pinia).use(FloatingVue).use(Toast, options).use(router).use(i18n).mount('#app')
