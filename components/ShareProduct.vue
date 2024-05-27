<template>
  <v-dialog v-model="internalDialog" max-width="400">
    <v-card class="rounded-xl">
      <v-card-title class="text-center mt-4 d-flex justify-end">
        <h4 class="ml-2">{{ $t('product.share') }}</h4>
        <v-spacer></v-spacer>
        <v-icon class="cursor-pointer" @click="closeDialog">mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="props.productUrl"
          density="compact"
          variant="solo-filled"
          flat
          hide-details
          single-line
          append-icon="mdi-content-copy"
          label="Shareable Link"
          class="mt-2"
          readonly
          @click:append="copyLink"
        ></v-text-field>
        <v-row class="mt-4 text-center">
          <v-col v-for="option in shareOptions" :key="option.name">
            <v-btn
              :icon="option.icon"
              color="teal"
              @click="share(option)"
              variant="outlined"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <Snackbar
      v-model="showSnackbar"
      color="success"
      :text="$t('product.copy-success')"
    />
  </v-dialog>
</template>

<script setup lang="ts">
  const props = defineProps({
    productUrl: String,
    showShareDialog: Boolean,
  });

  const emit = defineEmits(['update:showShareDialog']);

  const internalDialog = ref(props.showShareDialog);
  const showSnackbar = ref(false);

  const shareOptions = [
    {
      name: 'LinkedIn',
      icon: 'mdi-linkedin',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${props.productUrl}`,
    },
    {
      name: 'Telegram',
      icon: 'mdi-send',
      url: `https://t.me/share/url?url=${props.productUrl}`,
    },
    {
      name: 'Facebook',
      icon: 'mdi-facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${props.productUrl}`,
    },
  ];

  watch(
    () => props.showShareDialog,
    (newVal) => {
      internalDialog.value = newVal;
    }
  );

  watch(internalDialog, (newVal) => {
    emit('update:showShareDialog', newVal);
  });

  const share = (option: shareOption) => {
    window.open(option.url, '_blank');
  };

  const copyLink = () => {
    if (props.productUrl) {
      navigator.clipboard.writeText(props.productUrl);
      showSnackbar.value = true;
    } else {
      console.error('Product URL is undefined');
    }
  };

  const closeDialog = () => {
    internalDialog.value = false;
  };
</script>

<style scoped></style>
