<template>
  <v-expansion-panels>
    <v-expansion-panel class="rounded-lg">
      <v-expansion-panel-title v-slot="{ expanded }">
        <v-row>
          <v-card-title>
            {{  $t('category.list') }}
          </v-card-title>
        </v-row>
        <div v-if="expanded" class="mr-6">
          <v-col>selected: {{  selectedCategoryIds }}</v-col>

          {{ $t('category.help-text') }}
        </div>
          <v-row
            v-else
            style="width: 100%"
            no-gutters
          >
            <v-col>selected: {{  selectedCategoryIds }}</v-col>
          </v-row>
                
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row no-gutters>
          <v-col v-for="category of categoryObj.items" :key="category?.id"
            sx="12"
            md="6"
            lg="4"
            xl="3"
          >
            <Subcategory :categoryData="category" :selected="category.selected" @category:selected="handleCategorySelection" />
          </v-col>
        </v-row>
        <v-card-actions>
          
          <v-spacer></v-spacer>
          <v-btn color="grey" rounded="xl" variant="text" class="px-6"  @click="clearSelection"> {{ $t("category.clear-selections") }} </v-btn>
          <v-btn color="secondary" rounded="xl" variant="outlined" class="px-6" pill  @click="filterProducts"> {{ $t("category.filter") }} </v-btn>
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

const selectedCategoryIds = ref([]);

const getCategories = async () => {
  try {
    await categoryStore.getCategories();
  } catch (error) {
    console.error('Request failed:', error);
  }
}

const handleCategorySelection = (categoryId: number, isSelected: boolean) => {
  console.log("OUTER: ", categoryId, isSelected)
  if (isSelected) {
    selectedCategoryIds.value.push(categoryId);
    console.log(categoryId, selectedCategoryIds.value)
  } else {
    const index = selectedCategoryIds.value.indexOf(categoryId);
    if (index !== -1) {
      selectedCategoryIds.value.splice(index, 1);
    }
  }
};

const clearSelection = () => {
  selectedCategoryIds.value = [];
};

const filterProducts = () => {
  // Perform filtering logic based on selectedCategoryIds
};

onMounted(async () => {
    await getCategories();
});
</script>