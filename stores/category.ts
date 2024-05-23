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
      try {
        const { data } = await useApiFetch(
          `/categories?&responseFields=${this.responseFields}`
        );
        if (data.value) {
          this.categoryObj = data.value;
        }
      } catch (error) {
        console.error('Request failed:', error);
        throw error;
      }
    },
    setSelectedCategories(data: []) {
      this.selectedCategories = data;
    },
  },
});
