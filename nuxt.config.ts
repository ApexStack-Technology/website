import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxtjs/google-fonts'],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
    googleFonts: {
    families: {
      Geist: [100,200,300,400,500,600,700,800,900]
    },
    display: 'swap',
    preload: true,
    prefetch: true,
    download: false
  },
});