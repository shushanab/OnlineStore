<template>
  <v-app-bar flat color="teal">
    <v-container class="mx-auto d-flex align-center justify-center">
      <Search
        v-model="searchText"
        @focus="handleSearchFocus"
        @blur="handleSearchBlur"
        @filter="handleFilter"
      />

      <Geolocation v-if="!isSearchActive" />

      <v-spacer></v-spacer>

      <v-btn class="ma-2" color="white" icon="mdi-heart" variant="text"></v-btn>

      <v-btn
        class="ma-2"
        color="white"
        icon="mdi-cart-outline"
        variant="text"
      ></v-btn>

      <v-avatar
        color="grey-darken-1"
        size="32"
        image="https://avatars.githubusercontent.com/u/33631649?v=4"
      ></v-avatar>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
  const emit = defineEmits(['filter']);

  const isSearchActive = ref(false);
  const searchText = ref('');

  const handleSearchFocus = () => {
    isSearchActive.value = true;
  };

  const handleSearchBlur = () => {
    isSearchActive.value = false;
  };

  const handleFilter = (searchValue: string) => {
    emit('filter', searchValue);
  };

  onMounted(async () => {});
</script>
