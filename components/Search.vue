<template>
  <v-responsive :max-width="minWidth" min-width="150">
    <transition name="field-transition">
      <v-text-field
        v-model.trim="internalSearchValue"
        density="compact"
        rounded="pill"
        variant="solo-filled"
        flat
        autofocus
        clearable
        hide-details
        single-line
        prepend-inner-icon="mdi-magnify"
        clear-icon="mdi-close"
        class="highlight-on-focus"
        :label="$t('common.search')"
        @click:clear="handleClear"
        @keyup.enter="handleFilter"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </transition>
  </v-responsive>
</template>

<script setup lang="ts">
  import { useSearchStore } from '~/stores/search';

  const emit = defineEmits(['focus', 'blur', 'update:modelValue']);
  const minWidth = ref(275);

  const props = defineProps({
    modelValue: String,
  });

  const router = useRouter();
  const route = useRoute();
  const searchStore = useSearchStore();
  const internalSearchValue = ref(
    route.query.keyword || searchStore.searchValue
  );

  const handleFocus = () => {
    minWidth.value = minWidth.value * 2;
    emit('focus');
  };

  const handleClear = () => {
    internalSearchValue.value = '';
    handleFilter();
  };

  const handleFilter = () => {
    const keyword = internalSearchValue.value;
    searchStore.setSearchValue(keyword);
    router.push({ path: '/products', query: { keyword } });
    const searchEvent = new CustomEvent('perform-search', {
      detail: keyword,
    });
    window.dispatchEvent(searchEvent);
  };

  const handleBlur = () => {
    minWidth.value = minWidth.value / 2;
    emit('blur');
  };

  watch(
    () => props.modelValue,
    (newValue) => {
      internalSearchValue.value = newValue;
    }
  );

  watch(
    () => internalSearchValue.value,
    (newValue) => {
      if (newValue !== props.modelValue) {
        emit('update:modelValue', newValue);
        searchStore.setSearchValue(newValue);
      }
    }
  );

  onMounted(() => {
    if (route.query.keyword) {
      internalSearchValue.value = route.query.keyword;
    }
  });
</script>

<style scoped>
  .field-transition-enter-active,
  .field-transition-leave-active {
    transition: width 0.3s ease-in-out;
  }
  .field-transition-enter,
  .field-transition-leave-to {
    width: 0;
  }
  .v-field--active .v-input__control,
  .highlight-on-focus .v-text-field__slot {
    border-color: rebeccapurple !important;
  }
</style>
