import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router';
import '../node_modules/aos/dist/aos.js'
import '../node_modules/aos/dist/aos.css'
createApp(App).use(router).mount('#app');
AOS.init();
