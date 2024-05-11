// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // pages: true,
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Neonderthaw: true,
        Freeman: true
      }
    }]
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    preset: 'cloudflare_pages',
    storage: {},
    devStorage: {
      venues: {
        driver: 'fs',
        base: './.data/venues'
      }
    }
  }
})
