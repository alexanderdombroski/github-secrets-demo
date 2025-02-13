import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/github-secrets-demo/',
  build: {
    outDir: './dist',
    emptyOutDir: true
  },
  publicDir: 'public'
})
