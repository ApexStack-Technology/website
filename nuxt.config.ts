import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/content',
    '@nuxt/fonts'
  ],

  content: {
    build: {
      markdown: {}
    }
  },

  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  routeRules: {
    '/**': { prerender: true }
  },

  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [300, 400, 500, 600, 700],
        styles: ['normal'],
        display: 'block',
        preload: true
      },
      {
        name: 'Manrope',
        provider: 'google',
        weights: [300, 400, 500, 600, 700],
        styles: ['normal'],
        display: 'block',
        preload: true
      }
    ]
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  }
})