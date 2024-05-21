module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/vue3-essential',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION', // is, v-is
          'LIST_RENDERING', // v-for item in items
          'CONDITIONALS', // v-if, v-else-if, v-else, v-show, v-cloak
          'RENDER_MODIFIERS', // v-once, v-pre
          'GLOBAL', // id
          ['UNIQUE', 'SLOT'], // ref, key, v-slot, v-slot:default, slot-scope
          'TWO_WAY_BINDING', // v-model
          'OTHER_DIRECTIVES', // v-custom-directive
          'OTHER_ATTR', // everything else like width, height etc.
          'EVENTS', // @click="method"
          'CONTENT', // v-text, v-html
        ],
        alphabetical: false,
      },
    ],
  },
};
