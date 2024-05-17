<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title v-slot="{ expanded }">
        <v-row>
          <v-card-title>
            {{  $t('category.list') }}
          </v-card-title>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row no-gutters>
          <v-col v-for="category of categoryObj.items" :key="category?.id"
          sx="12"
                md="6"
                lg="4"
                xl="3"
                class="mt-4">
             <pre>{{ category }} </pre>
            </v-col>

        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" rounded="xl" variant="text" class="px-6"> Clear selection </v-btn>
          <v-btn color="secondary" rounded="xl" variant="outlined" class="px-6" pill> Filter </v-btn>
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

const getCategories = async () => {
  try {
    await categoryStore.getCategories();
  } catch (error) {
    console.error('Request failed:', error);
  }
}

onMounted(async () => {
    await getCategories();
});
</script>