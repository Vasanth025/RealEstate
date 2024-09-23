import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:3000,
    proxy:{
      "/api":{
        target:"http://localhost:4500",
        changeOrigin:true
      }
    }
  },
  plugins: [react()],
})