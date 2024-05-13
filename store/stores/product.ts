// stores/count.ts
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    productObj: {
      total: Number,
      items: []
    },
  }),
  actions: {
    async getProducts() {
        const { pending, data, error } = await useApiFetch('/products');
        if (data.value) {
            this.productObj = data.value;
        }
    },
  },
})
