import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  // caminho relativo: a página funciona ao abrir dist/index.html direto,
  // em subpasta de hospedagem ou na raiz de um domínio
  base: './',
  plugins: [
    vue(),
    // importa só os componentes do Vuetify usados (bundle menor)
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
