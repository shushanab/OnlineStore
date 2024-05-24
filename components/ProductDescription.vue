<template>
  <div
    :class="['description', { visible: isHovering }]"
    v-html="description"
  ></div>
</template>
<script setup lang="ts">
  const props = defineProps({
    description: String,
    isHovering: Boolean,
  });
</script>

<style scoped>
  .description {
    font-size: 16px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    overflow: hidden;
    padding: 16px;
    text-overflow: ellipsis;
    color: darkslategray;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition:
      visibility 0.3s,
      opacity 0.3s;
    visibility: hidden;
    opacity: 0;
    z-index: 10;
  }

  .description.visible {
    visibility: visible;
    opacity: 1;
  }
</style>
