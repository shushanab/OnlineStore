import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', {
  state: () => ({
    responseFields: 'count,items(id,name,thumbnailUrl)',
    categoryObj: {
      count: Number,
      items: [],
    },
  }),
  actions: {
    async getCategories() {
      const { pending, data, error } = await useApiFetch(
        `/categories?responseFields=${this.responseFields}`
      );
      if (data.value) {
        this.categoryObj = data.value;
      }
    },
  },
});
