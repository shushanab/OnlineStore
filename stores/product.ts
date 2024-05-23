import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    responseFields:
      'count,items(id,name,thumbnailUrl,sku,description,defaultDisplayedPriceFormatted,inStock,categories)',
    productObj: {
      count: 0,
      items: [],
    },
    loading: false,
  }),
  actions: {
    async getProducts(
      offset: number,
      categories: string | [],
      keyword: string
    ) {
      this.loading = true;
      try {
        const { data } = await useApiFetch(
          `/products?responseFields=${this.responseFields}&offset=${offset}&keyword=${keyword}&categories=${categories}`
        );
        if (data.value) {
          this.productObj = data.value;
          return this.productObj;
        }
        return null;
      } catch (error) {
        console.error('Request failed:', error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
