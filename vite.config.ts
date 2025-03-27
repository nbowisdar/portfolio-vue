import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: "/vue-portfolio",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"), // Maps @ to src directory
		},
	},
})
