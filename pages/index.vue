<template>
  <v-container class="bg-grey-lighten-3" fluid>
    <v-row>
      <v-col cols="12">
        <Categories @category:filter="getProductsByCategoriesAndKeyword" />
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
  import { useCategoryStore } from '~/stores/category';
  import { useSearchStore } from '~/stores/search';

  const productStore = useProductStore();
  const categoriesStore = useCategoryStore();
  const searchStore = useSearchStore();

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

  const getProductsByCategoriesAndKeyword = async () => {
    const selectedCategoriesIds = categoriesStore.selectedCategories.length
      ? categoriesStore.selectedCategories.map((category) => category.id)
      : ['home'];

    await getProducts(0, selectedCategoriesIds, searchStore.searchValue);
  };

  const handleSearchEvent = async (event: CustomEvent) => {
    const searchValue = event.detail;
    await getProducts(0, 'home', searchValue);
  };

  onMounted(async () => {
    await getProductsByCategoriesAndKeyword();
    window.addEventListener('perform-search', handleSearchEvent);
  });
</script>
