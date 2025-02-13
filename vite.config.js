import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  base: '/github-secrets-demo/',
  build: {
    outDir: './dist',
    emptyOutDir: true
  },
  publicDir: 'public'
})
