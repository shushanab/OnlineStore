<template>
  <v-app id="inspire">
    <Header />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<style scoped>
html,
body {
  font-family: Montserrat, sans-serif;
  overflow-y: hidden !important;
}
</style>