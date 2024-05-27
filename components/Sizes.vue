<template>
  <div>
    <h3>{{ options?.name }}</h3>
    <v-radio-group v-model="selected" class="horizontal-radios">
      <v-radio
        v-for="(option, index) in options?.choices"
        :key="index"
        color="teal-lighten-2"
        :label="option.text"
        :value="option.text"
      ></v-radio>
    </v-radio-group>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    options: Object,
  });

  const selected = ref(props.options?.choices[0].text);
</script>

<style scoped>
  .horizontal-radios >>> .v-selection-control-group {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
