import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Popper from "vue3-popper";
import './style.css'
import App from './App.vue'
import router from './router/router.js'

const pinia = createPinia();

createApp(App).use(router).use(pinia).component("Popper", Popper).mount('#app');

