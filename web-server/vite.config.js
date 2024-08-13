import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: './',
  envDir: './src/utilities',

  resolve: {
    alias: [{ find: '~', replacement: '/src' }]
  },

  server: {
    port: 3000
  },

  preview: {
    port: 8080
  }
})
