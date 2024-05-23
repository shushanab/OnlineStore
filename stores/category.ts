import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', {
  state: () => ({
    responseFields:
      'count,parentCategoryId,items(id,name,thumbnailUrl,productCount)',
    selectedCategories: [],
    categoryObj: {
      count: Number,
      items: [],
    },
  }),
  actions: {
    async getCategories() {
      const { pending, data, error } = await useApiFetch(
        `/categories?lang=en&responseFields=${this.responseFields}`
      );
      if (data.value) {
        this.categoryObj = data.value;
      }
    },
    setSelectedCategories(data: []) {
      this.selectedCategories = data;
    },
  },
});
