<template>
  <DashNavbar />
  <div class="container mt-4">
    <router-view/>
    <ToastMessages />
  </div>
</template>

<script>
import DashNavbar from '@/components/TheDashNavbar.vue';
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/BaseToastMessages.vue';
import toastMessagesMixin from '@/mixins/toastMessagesMixin';

export default {
  components: {
    DashNavbar,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
      toastMessagesMixin,
    };
  },
  created() {
    // 檢查登入狀態
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    const url = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(url).then((response) => {
      if (response.data.success) {
        this.$router.push({ name: 'dashproduct' });
      } else {
        this.$router.push({ name: 'login' });
      }
    });
  },
};
</script>
