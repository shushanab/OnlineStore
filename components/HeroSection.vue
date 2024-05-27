<template>
  <v-row class="sale-section">
    <v-col cols="3" class="text-left">
      <h1 class="display-2 font-weight-bold sale-title">
        {{ $t('home.black-friday-sale-title') }}
      </h1>
      <p class="sale-subtitle">{{ $t('home.black-friday-sale-subtitle') }}</p>

      <v-btn
        to="/products"
        color="teal"
        variant="elevated"
        rounded="shaped"
        class="px-8 mt-6"
        x-large
        prepend-icon="mdi-cart-plus"
        :text="$t('home.shop-now')"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts"></script>

<style scoped>
  .sale-section {
    color: black;
    padding: 60px;
  }
  .sale-title {
    animation: flash 2s infinite;
  }
  .sale-subtitle {
    font-size: 1.1rem;
    padding-top: 4px;
    font-weight: 500;
  }

  @keyframes flash {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
</style>
