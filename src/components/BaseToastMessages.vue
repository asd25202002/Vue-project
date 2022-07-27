<template>
  <div class="toast-container position-absolute mt-6 pe-3 top-0 end-0">
    <ToastMessage v-for="(msg, key) in messages" :key="key" :msg="msg"></ToastMessage>
  </div>
</template>

<script>
import ToastMessage from '@/components/BaseToastMessage.vue';

export default {
  data() {
    return {
      messages: [],
    };
  },
  components: {
    ToastMessage,
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
