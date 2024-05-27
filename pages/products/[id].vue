<template>
  <v-container>
    <v-row class="ml-3 mt-3">
      <v-col cols="1" class="text-center">
        <v-btn icon="mdi-arrow-left" size="small" to="/products" />
      </v-col>
      <v-col>
        <h1>{{ product?.name }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="2">
        <v-col
          cols="12"
          sx="2"
          v-for="(image, index) in product?.media.images"
          :key="index"
        >
          <Thumbnail
            :imageUrl="image.image800pxUrl"
            @thumbnail:selected="selectedImage = image.image800pxUrl"
          />
        </v-col>
      </v-col>
      <v-col cols="12" md="6">
        <v-col cols="9" sx="4">
          <v-card class="rounded-xl">
            <v-img
              cover
              class="mb-4 thumbnail"
              height="500"
              :src="selectedImage"
              @mouseover="isZoomed = true"
              @mouseleave="isZoomed = false"
              :class="{ zoom: isZoomed }"
            ></v-img>
          </v-card>
        </v-col>
      </v-col>

      <v-col cols="12" md="4">
        <h2 class="my-4">{{ product?.defaultDisplayedPriceFormatted }}</h2>
        <Sizes :options="product?.options[0]" v-if="product?.options?.length" />

        <v-btn
          color="teal"
          variant="elevated"
          rounded="xl"
          class="px-8"
          size="large"
          prepend-icon="mdi-cart-plus"
          @click="addToCart(product)"
          :text="$t('product.add-to-cart')"
        />

        <div class="mt-4 description pl-0" v-html="product?.description" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useProductStore } from '~/stores/product';

  const route = useRoute();
  const productStore = useProductStore();
  const product = ref(null);
  const selectedImage = ref('');
  const isZoomed = ref(false);

  const getProductById = async (id: number) => {
    try {
      const response = await productStore.getProductById(id);
      if (response) {
        product.value = response;
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  onMounted(async () => {
    const productId = parseInt(route.params.id as string);
    await getProductById(productId);
    selectedImage.value = product.value.hdThumbnailUrl;
  });

  const addToCart = (product) => {
    console.log('Add to Cart:', product);
  };
</script>

<style scoped>
  .thumbnail {
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .zoom {
    transform: scale(1.8);
  }
  .description {
    font-size: 16px;
    overflow: hidden;
    color: darkslategray;
    line-height: 1.6rem;
  }
</style>
