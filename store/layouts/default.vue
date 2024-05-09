<template>
  <v-app id="inspire">
    <v-app-bar flat color="purple">
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-responsive max-width="275">
          <v-text-field density="compact" label="Search" rounded="pill" variant="solo-filled" flat hide-details
            single-line></v-text-field>
        </v-responsive>

        <v-btn class="ma-2" color="purple-lighten-4" icon="mdi-map-marker" variant="text"></v-btn>
        <p>
          <b>{{ city }}</b> <small>({{ country }})</small>
        </p>

        <v-spacer></v-spacer>

        <v-btn class="ma-2" color="white" icon="mdi-cart-outline" variant="text"></v-btn>


        <v-avatar class="me-4" color="grey-darken-1" size="32"
          image="https://avatars.githubusercontent.com/u/33631649?v=4"></v-avatar>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item v-for="n in 5" :key="n" :title="`Category Name ${n}`" link></v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item color="grey-lighten-4" title="More categories ..." link></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col cols="9">
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


<script setup lang="ts">
import { ref, onMounted } from 'vue';

const country = ref('');
const city = ref('');

onMounted(async () => {
  try {
    const response = await fetch('http://ip-api.com/json');
    if (!response.ok) {
      throw new Error('Request failed. Returned status of ' + response.status);
    }
    const data = await response.json();
    country.value = data.country;
    city.value = data.city;
  } catch (error) {
    console.error('Request failed:', error);
  }
});
</script>