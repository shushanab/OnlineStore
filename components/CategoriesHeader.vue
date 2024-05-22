<template>
  <div @click.stop="toggleExpansion" class="expansion-panel-header">
    <v-row>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="toggleExpansion">
        <v-icon>{{ expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    expanded: Boolean,
    title: String,
  });

  const emit = defineEmits(['update:expanded']);

  const toggleExpansion = () => {
    console.log('update:expanded', !props.expanded);

    emit('update:expanded', !props.expanded);
  };
</script>

<style scoped>
  .expansion-panel-header {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
</style>
