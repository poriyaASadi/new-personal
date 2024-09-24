import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../node_modules/aos/dist/aos.js'
import '../node_modules/aos/dist/aos.css'
createApp(App).mount('#app');
AOS.init();
