<template>
  <v-app>
    <v-col class="text-center">
      <NoResult
        :description="error?.statusCode === 404 ? pageNotFound : otherError"
      />
    </v-col>
    <v-col class="text-center">
      <NuxtLink to="/" variant="elevated">
        {{ $t('common.home-page') }}
      </NuxtLink>
    </v-col>
  </v-app>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const props = defineProps<{
    error: {
      statusCode: number;
    } | null;
  }>();

  const pageNotFound = t('error.page-not-found');
  const otherError = t('error.other-error');

  const error = ref(props.error);
</script>
