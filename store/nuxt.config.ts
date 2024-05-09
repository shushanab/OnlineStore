// Nuxt config file
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Online Store | ECWID test task',
    }
  },
  modules: ['@nuxtjs/i18n', 'vuetify-nuxt-module'],
  i18n: {
    // if not using RTL, you can replace locales with codes only
    // locales: ['en', 'es'],
    locales: [{
      code: 'en',
      name: 'English',
      file: 'en.json'
    }, {
      code: 'am',
      name: 'Հայերեն',
      file: 'am.json'
    }],
    defaultLocale: 'en',
    langDir: 'locales',
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
  },
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      storeID: process.env.STORE_ID,
      token: process.env.TOKEN,
    }
  }
})