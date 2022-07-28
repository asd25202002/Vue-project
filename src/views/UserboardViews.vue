<template>
  <header class="fixed-top">
    <UserNavbar />
  </header>
  <router-view/>
  <UserFooter />
  <ToastMessages />
</template>

<script>
import UserNavbar from '@/components/TheUserNavbar.vue';
import UserFooter from '@/components/TheUserFooter.vue';
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/BaseToastMessages.vue';
import toastMessagesMixin from '@/mixins/toastMessagesMixin';

export default {
  components: {
    UserNavbar,
    UserFooter,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
      toastMessagesMixin,
    };
  },
  created() {
    this.$router.push({ name: 'home' });
  },
};
</script>
