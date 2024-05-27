<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        hover
        width="100"
        height="100"
        :class="['ma-2 rounded-lg', { 'selected-card': selected }]"
        @click="selectImage"
        v-click-outside="{
          handler: onClickOutside,
          include,
        }"
      >
        <v-img
          :class="['align-end included', { 'img-scale ': isHovering }]"
          :src="imageUrl"
        >
        </v-img>
      </v-card>
    </template>
  </v-hover>
</template>

<script setup lang="ts">
  const emit = defineEmits(['thumbnail:selected']);

  const props = defineProps({
    imageUrl: String,
  });

  const thumbnail = ref(props.imageUrl);
  const selected = ref(false);

  const onClickOutside = () => {
    selected.value = false;
  };

  const include = () => {
    return [document.querySelector('selected-card.included')];
  };

  const selectImage = () => {
    selected.value = true;
    emit('thumbnail:selected', thumbnail.value);
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
    transition: 0.5s ease all;
    width: 100%;
    object-fit: cover;
  }

  .selected-card {
    border: 2px solid teal;
  }
</style>
