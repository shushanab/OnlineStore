import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    responseFields: "count,items(id,name,thumbnailUrl,sku,description,defaultDisplayedPriceFormatted,inStock)",
    productObj: {
      count: Number,
      items: []
    },
  }),
  actions: {
    async getProducts(offset: number, keyword: string) {
        const { pending, data, error } = await useApiFetch(`/products?responseFields=${this.responseFields}&offset=${offset}&keyword=${keyword}`);
        if (data.value) {
          this.productObj = data.value;
        }
    },
  },
})
