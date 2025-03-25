import { createApp } from 'vue'
import App from './App.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

import '@fortawesome/fontawesome-free/css/all.css'
import './styles/main.css'
import './styles/animations.css'

createApp(App).mount('#app')