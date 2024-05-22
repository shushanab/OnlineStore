<template>
  <div>
    <template v-if="productObj?.count">
      <v-sheet flat>
        <strong>
          <i> {{ $t('product.total', [productObj.count]) }}</i>
        </strong>
      </v-sheet>
      <v-container fluid class="scroll-container">
        <v-row>
          <v-col
            v-for="product in productObj.items"
            :key="product?.id"
            sx="12"
            md="6"
            lg="4"
            xl="3"
          >
            <ProductItem :productData="product" />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    productObj: Object,
  });
</script>

<style scoped>
  .scroll-container {
    overflow-y: auto;
    max-height: calc(100vh - 200px);
    margin-top: 20px;
  }
</style>
