// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module', 
  ],
  
  css: [
    '~/assets/css/tailwind.css',
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
    app: {
    head: {
      link: []
    }
  }

})