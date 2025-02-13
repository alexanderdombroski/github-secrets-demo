import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  base: '/github-secrets-demo/',
  build: {
    outDir: './dist',
    emptyOutDir: true
  },
  plugins: [deno()],
  publicDir: 'public'
})
