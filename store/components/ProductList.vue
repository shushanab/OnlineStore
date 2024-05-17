<template>
  <v-sheet flat>
    <strong>
      <i> {{ $t('product.total', [productObj.count]) }}</i>
    </strong>
  </v-sheet>
  <v-container fluid class="scroll-container">
    <v-row dense>
      <v-col v-for="product of productObj.items"
        :key="product?.id"
        sx="12"
        md="6"
        lg="4"
        xl="3"
      >
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

const getProducts = async (offset: number, keyword: string) => {
  try {
    await productStore.getProducts(offset, keyword);
  } catch (error) {
    console.error('Request failed:', error);
  }
}

onMounted(async () => {
    await getProducts(0, "");
});
</script>

<style scoped>
.scroll-container {
  overflow-y: auto;
  max-height: calc(100vh - 200px);
}
</style>