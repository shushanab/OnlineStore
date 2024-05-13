<template>
  <v-card class="ma-4 rounded-lg" :disabled="!product?.inStock">
    <v-img
      class="align-end"
      height="300px"
      cover
      :src="product?.thumbnailUrl"
    >
  </v-img>
  <v-card-title class="text-teal-darken-4">{{ product?.name }}</v-card-title>
  <v-card-subtitle class="pt-4">
    <span>Stock keeping unit: {{ product?.sku }}</span>
    <!-- <p>
      {{ product?.categoryIds}}
    </p> -->
  </v-card-subtitle>
    <v-card-text>
      <h2>{{ product?.defaultDisplayedPriceFormatted }}</h2>
      <!-- <p>{{ product?.description }}</p> -->
      <!-- <pre>
        {{ product?.options}}
      </pre>
      <pre>
        {{ product?.galleryImages}}
      </pre> -->
    </v-card-text>
    <v-card-actions class="ml-0 pl-0">
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <div class="justify-self-start">
            <v-btn icon="mdi-heart-outline" size="small"></v-btn>
            <v-btn icon="mdi-share-variant" size="small"></v-btn>
          </div>
        </template>
        <template v-slot:append>
          <div class="justify-self-end">
            <v-btn class="me-3" icon="mdi-cart-plus" size="small"></v-btn>
            <v-btn color="teal" variant="elevated"  size="small" rounded="xl" class="px-6" text="buy" prepend-icon="mdi-credit-card-fast-outline"/>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  productData: Object,
});

const product = ref(props.productData);
</script>

<style scoped>

</style>