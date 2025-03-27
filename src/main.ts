import { createApp } from 'vue'
import App from './App.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

import '@fortawesome/fontawesome-free/css/all.css'
import './styles/main.css'
import './styles/animations.css'

const app = createApp(App)

// Create a client
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // customize as needed
			staleTime: 1000 * 60 * 5, // 5 minutes
		},
	},
})

app.use(VueQueryPlugin, { queryClient })

app.mount("#app")