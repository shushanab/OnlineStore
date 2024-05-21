<template>
  <v-expansion-panels>
    <v-expansion-panel class="rounded-lg">
      <v-expansion-panel-title v-slot="{ expanded }">
        <v-row>
          <v-card-title>
            {{ $t('category.list') }}
          </v-card-title>
        </v-row>
        <div v-if="expanded" class="mr-6">
          {{ $t('category.help-text') }}
        </div>
        <v-row v-else style="width: 100%" no-gutters>
          <v-col>
            <span class="ml-6">
              <i><b>{{ formattedSelectedCategories }}</b></i>
            </span>
          </v-col>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row no-gutters>
          <v-col v-for="category in categoryObj.items" :key="category?.id">
            <Subcategory :categoryData="category" :selected="category.isSelected"
              @category:selected="handleCategorySelection" />
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" rounded="xl" variant="text" class="px-6" @click="clearSelection"> {{
            $t("category.clear-selections") }} </v-btn>
          <v-btn color="secondary" rounded="xl" variant="outlined" class="px-6" pill @click="filterProducts"> {{
            $t("category.filter") }} </v-btn>
        </v-card-actions>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCategoryStore } from '~/stores/category'

const categoryStore = useCategoryStore();

const { categoryObj } = storeToRefs(categoryStore);

const emit = defineEmits(['category:filter']);

const selectedCategories = ref([]);

const getCategories = async () => {
  try {
    await categoryStore.getCategories();
    clearSelection();
  } catch (error) {
    console.error('Request failed:', error);
  }
};

const handleCategorySelection = (category) => {
  const exists = selectedCategories.value.some(c => c.id === category.id);
  if (category.isSelected && !exists) {
    selectedCategories.value.push(category);
  } else if (!category.isSelected && exists) {
    selectedCategories.value = selectedCategories.value.filter(c => c.id !== category.id);
  }
};

const clearSelection = () => {
  selectedCategories.value = [];
  categoryObj.value.items.forEach(category => {
    category.isSelected = false;
  });
};

const formattedSelectedCategories = computed(() => {
  return selectedCategories.value.map(category => category.name).join(', ');
});


const filterProducts = () => {
  const selectedCategoriesIds = selectedCategories.value.length
    ? selectedCategories.value.map(category => category.id) 
    : ['home'];
  emit('category:filter', selectedCategoriesIds);
};


onMounted(async () => {
  await getCategories();
});
</script>