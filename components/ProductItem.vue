<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        class="ma-2 rounded-lg"
        hover
        :disabled="!product?.inStock"
        :href="!isActionButtonClicked ? `product/${product?.id}` : undefined"
        @click="navigateToProduct"
      >
        <v-img
          :class="['align-end', { 'img-scale': isHovering }]"
          height="300px"
          cover
          :src="product?.thumbnailUrl"
        >
          <div v-if="product?.sku == '0001'" class="badge">
            {{ $t('product.one-left') }}
          </div>
        </v-img>
        <v-card-title class="text-teal-darken-4 bg-white">{{
          product?.name
        }}</v-card-title>
        <v-card-text>
          <h2>{{ product?.defaultDisplayedPriceFormatted }}</h2>
          <ProductDescription
            :description="product?.description"
            :isHovering="isHovering"
          />
        </v-card-text>
        <v-card-actions class="ml-0 pl-0">
          <v-list-item class="w-100">
            <template v-slot:prepend>
              <div class="justify-self-start">
                <v-btn
                  icon="mdi-heart-outline"
                  size="small"
                  @click.prevent="addToWishlist(product)"
                ></v-btn>
                <v-btn
                  icon="mdi-share-variant"
                  size="small"
                  @click.prevent="shareProduct(product)"
                ></v-btn>
              </div>
            </template>
            <template v-slot:append>
              <div class="justify-self-end">
                <v-btn
                  class="me-3"
                  icon="mdi-cart-plus"
                  size="small"
                  @click.prevent="addToCart(product)"
                ></v-btn>
                <v-btn
                  color="teal"
                  variant="elevated"
                  size="small"
                  rounded="xl"
                  class="px-6"
                  text="buy"
                  prepend-icon="mdi-credit-card-fast-outline"
                  @click.prevent="buyNow(product)"
                />
              </div>
            </template>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>

<script setup lang="ts">
  const props = defineProps({
    productData: Object,
  });

  const product = ref(props.productData);

  const navigateToProduct = () => {
    if (!isActionButtonClicked) {
      navigateTo(`/product/${product.value.id}`);
    }
  };

  const isActionButtonClicked = ref(false);

  const addToWishlist = (product) => {
    console.log('Added to wishlist:', product);
  };

  const shareProduct = (product) => {
    console.log('Shared product:', product);
  };

  const addToCart = (product) => {
    console.log('Added to cart:', product);
  };

  const buyNow = (product) => {
    console.log('Buying product:', product);
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
    transform: scaleX(1.3);
    overflow-y: hidden !important;
    transition: 0.5s ease all;
    width: 100%;
    object-fit: cover;
  }

  .badge {
    position: absolute;
    top: 0px;
    right: 0;
    width: fit-content;
    height: 40px;
    padding: 0 10px;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    background-color: rgb(202, 100, 125);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-bottom-left-radius: 20px;
    animation:
      slide-in 1s ease-out forwards,
      flash 1s infinite;
  }
</style>
