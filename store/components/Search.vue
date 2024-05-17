<template>
  <v-responsive :max-width="minWidth" min-width="150">
    <transition name="field-transition">
      <v-text-field
        v-model="internalValue"
        density="compact"
        rounded="pill"
        variant="solo-filled"
        flat
        clearable
        hide-details
        single-line
        prepend-inner-icon="mdi-magnify"
        clear-icon="mdi-close"
        @focus="handleFocus"
        @blur="handleBlur"
        :label="$t('search')"
        class="highlight-on-focus"
      />
    </transition>
  </v-responsive>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

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
    emit('update:modelValue', newValue);
  }
});
</script>

<style scoped>
.field-transition-enter-active, .field-transition-leave-active {
  transition: width 0.3s ease-in-out;
}
.field-transition-enter, .field-transition-leave-to {
  width: 0;
}
.v-field--active .v-input__control, .highlight-on-focus .v-text-field__slot {
  border-color: rebeccapurple !important;
}
</style>
