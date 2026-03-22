import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Inter: [300,400,500,600,700],
      Manrope: [300,400,500,600,700]
    }
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