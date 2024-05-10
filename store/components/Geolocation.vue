<template>
  <v-btn 
    class="ma-2"
    color="purple-lighten-4" 
    icon="mdi-map-marker" 
    variant="text"
  ></v-btn>
  <p style="line-height: 16px;">
    <b >{{ city }} </b>
    <br />
    <small> {{ country }}</small>
  </p>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const country = ref('');
const city = ref('');

onMounted(async () => {
  try {
    const response = await fetch('http://ip-api.com/json?fields=country,city');
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