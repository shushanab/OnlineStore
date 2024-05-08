// Nuxt config file
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: ['@nuxtjs/i18n', 'vuetify-nuxt-module'],
  i18n: {
    // if not using RTL, you can replace locales with codes only
    // locales: ['en', 'es'],
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'am',
      name: 'Հայերեն',
    }],
    defaultLocale: 'en',
    strategy: 'no_prefix', // or 'prefix_except_default'
    vueI18n: './i18n.config.ts',
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  }
})