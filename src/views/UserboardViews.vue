<template>
  <UserNavbar />
  <router-view/>
  <UserFooter />
</template>

<script>
import UserNavbar from '@/components/TheUserNavbar.vue';
import UserFooter from '@/components/TheUserFooter.vue';

export default {
  components: {
    UserNavbar,
    UserFooter,
  },
  created() {
    this.$router.push({ name: 'home' });
  },
};
</script>
