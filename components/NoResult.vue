<template>
  <v-card flat widht="300" height="300">
    <NoResultSvg />
  </v-card>
  <h3 v-html="description" class="mt-6 text-center"></h3>
</template>

<script lang="ts" setup>
  const props = defineProps({
    description: String,
  });
</script>
