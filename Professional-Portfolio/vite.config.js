import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // ✅ Must match your GitHub repo name exactly (case-sensitive)
  build: {
    outDir: 'dist', // default, ensures build output goes here
  },
  server: {
    open: true, // optional: automatically opens localhost in browser when running `npm run dev`
  },
})
