<template>
  <v-btn
    class="ma-2"
    color="teal-lighten-4"
    icon="mdi-map-marker"
    variant="text"
  ></v-btn>
  <div class="location-wrapper">
    <b>{{ locationStore.city }} </b>
    <br />
    <small>{{ locationStore.country }}</small>
  </div>
</template>

<script setup lang="ts">
  import { useLocationStore } from '~/stores/location';

  const locationStore = useLocationStore();

  onMounted(() => {
    locationStore.fetchLocation();
  });
</script>

<style scoped>
  .location-wrapper {
    line-height: 16px;
  }
</style>
