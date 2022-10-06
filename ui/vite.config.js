import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteEjsPlugin } from "vite-plugin-ejs";
import svgLoader from 'vite-svg-loader'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteEjsPlugin(), svgLoader()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})