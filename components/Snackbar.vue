<template>
  <v-snackbar
    v-model="localShow"
    top
    :color="color"
    location="top"
    close-on-click
  >
    {{ text }}
  </v-snackbar>
</template>

<script setup lang="ts">
  type Props = {
    modelValue: boolean;
    color: string;
    text: string;
  };
  const props = defineProps<Props>();
  const { modelValue, color, text } = toRefs(props);
  const emit = defineEmits(['update:modelValue']);
  const localShow = ref(false);
  let timeOutId: NodeJS.Timeout;

  onMounted(() => {
    localShow.value = modelValue.value;
  });
  watch(modelValue, async () => {
    localShow.value = modelValue.value;
    await new Promise(() => {
      timeOutId = setTimeout(() => {
        emit('update:modelValue', false);
        clearTimeout(timeOutId);
      }, 5000);
    });
  });

  //   const showErrorSnackbar = (msgObj: any) => {
  //     snackShow.value = true;
  //     snackColor.value = 'error';
  //     if (typeof msgObj === 'string') {
  //       snackText.value = msgObj;
  //     } else {
  //       snackText.value = msgObj.message || msgObj.Message;
  //     }
  //   };

  //   const showSuccessSnackbar = (msg: string) => {
  //     snackShow.value = true;
  //     snackColor.value = 'success';
  //     snackText.value = msg;
  //   };
</script>
