<template>
  <v-app id="inspire">
    <Header />

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <Categories />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-sheet min-height="70vh" rounded="lg">
              <v-card flat rounded="lg">
                <slot />
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
html, body {
  font-family: Montserrat, sans-serif;
  overflow-y: hidden !important;
}
</style>