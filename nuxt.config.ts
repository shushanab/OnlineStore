// Nuxt config file
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Online Store | ECWID test task',
    },
  },
  modules: ['@nuxtjs/i18n', 'vuetify-nuxt-module'],
  plugins: ['~/plugins/pinia.ts'],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'ru',
        name: 'Русский',
        file: 'ru.json',
      },
      {
        code: 'am',
        name: 'Հայերեն',
        file: 'am.json',
      },
    ],
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
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      storeID: process.env.STORE_ID,
      token: process.env.TOKEN,
    },
  },
});
