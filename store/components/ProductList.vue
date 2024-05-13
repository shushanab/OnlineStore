<template>
  <v-sheet flat>
    <strong><i> {{ $t('product.total', [productObj.total]) }}</i></strong>
  </v-sheet>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="product of productObj.items"
        :key="product?.id"
        :cols="6">
        <ProductItem
          :productData="product"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductStore } from '~/stores/product'

const productStore = useProductStore();

const { productObj } = storeToRefs(productStore);

const getProducts = async () => {
  try {
    await productStore.getProducts();
  } catch (error) {
    console.error('Request failed:', error);
  }
}

onMounted(async () => {
    await getProducts();
});
</script>
