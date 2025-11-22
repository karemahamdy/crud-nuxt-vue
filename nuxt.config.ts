// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss'],
  
  css: [
    '@/assets/css/tailwind.css',
  ],
  
  primevue: {
    options: {
      theme: {
        preset: Aura
      },
      ripple: true
    },
    autoImport: true // This will auto-import components
  },
})