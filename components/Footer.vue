<template>
  <v-footer color="teal" padless>
    <v-col class="text-center py-4 white--text">
      <v-row>
        <v-col cols="12">
          <p>
            &copy;{{ new Date().getFullYear() }} {{ $t('common.footer-text') }}
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-footer>
</template>

<style scoped>
  .v-footer {
    background: linear-gradient(45deg, #00695c, #004d40);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
