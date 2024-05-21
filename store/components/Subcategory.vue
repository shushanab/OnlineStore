<template>
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-card 
          :class="['ma-4 rounded-lg', { 'selected-card': isSelected }]" 
          v-bind="props" 
          hover 
          width="200" 
          height="200" 
          @click="toggleSelection"
        >
          <v-img 
            :class="['align-end', {'img-scale': isHovering}]" 
            width="200px" 
            :src="category?.thumbnailUrl"
          >
            <v-card-title class="text-teal-darken-4 bg-white text-center">{{ category?.name }}</v-card-title>
          </v-img>
        </v-card>
      </template>
    </v-hover>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  const emit = defineEmits(['category:selected']);
  
  const props = defineProps({
    categoryData: Object,
    selected: Boolean,
  });
  
  const category = ref(props.categoryData);
  const isSelected = ref(props.selected);

const toggleSelection = () => {
  isSelected.value = !isSelected.value;
  console.log("INNER: ", category.value.id, isSelected.value);
  emit('category:selected', category.value.id, isSelected.value);
};
  
  </script>
  
  <style scoped>
  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
  
    to {
      transform: translateX(0);
    }
  }
  
  @keyframes flash {
    0%,
    100% {
      opacity: 1;
    }
  
    50% {
      opacity: 0;
    }
  }
  
  .img-scale {
    transform: scale(1.1);
    overflow-y: hidden !important;
    transition: .5s ease all;
    width: 100%;
    object-fit: cover;
  }
  
  .selected-card {
    border: 2px solid teal;
  }
  </style>
  