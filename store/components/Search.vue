<template>
  <v-responsive :max-width="minWidth" width="minWidth">
    <v-text-field density="compact"
      rounded="pill" 
      variant="solo-filled" 
      flat 
      clearable
      hide-details
      single-line
      prepend-inner-icon="mdi-magnify"
      clear-icon="mdi-close"
      v-model="internalValue"
      @focus="handleFocus"
      @blur="handleBlur"
      :label="$t('search')"
    />
  </v-responsive>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';
const emit = defineEmits(['focus', 'blur', 'update:modelValue']);
const minWidth = ref(275);

const props = defineProps({
  modelValue: String,
});

const internalValue = ref(props.modelValue);

const handleFocus = () => {
  minWidth.value = minWidth.value * 2;
  emit('focus');
};

const handleBlur = () => {
  minWidth.value = minWidth.value / 2;
  emit('blur');
};

watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue;
});

watch(() => internalValue.value, (newValue) => {
  if (newValue !== props.modelValue) {
    // Emit the update:modelValue event when the internal value changes
    emit('update:modelValue', newValue);
  }
});

</script>
