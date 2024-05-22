<template>
  <v-container class="bg-grey-lighten-3" fluid>
    <v-row>
      <v-col cols="12">
        <Categories @category:filter="getProductsByCategories" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet min-height="70vh" rounded="lg">
          <v-card flat rounded="lg">
            <v-card-text>
              <v-card-title>{{ $t('product.list') }}</v-card-title>
              <v-card-text>
                <ProductList
                  v-if="productObj?.count"
                  :productObj="productObj"
                />
              </v-card-text>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { useProductStore } from '~/stores/product';

  const productStore = useProductStore();
  const productObj = ref();

  const getProducts = async (
    offset: number,
    categories: string | [],
    keyword: string
  ) => {
    try {
      const response = await productStore.getProducts(
        offset,
        categories,
        keyword
      );
      if (response) {
        productObj.value = response;
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  const getProductsByCategories = async (selectedCategoriesIds: []) => {
    await getProducts(0, selectedCategoriesIds, '');
  };

  onMounted(async () => {
    await getProducts(0, 'home', '');
  });
</script>
