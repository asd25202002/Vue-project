<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="home">Cat House</router-link>
      <button class="navbar-toggler" type="button" @click.prevent="showOffcanvas">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="offcanvas offcanvas-sm offcanvas-end bg-dark"
      tabindex="-1" id="offcanvasNavbar" ref="menu"
      aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header bg-white">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">CatHouse</h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="關閉"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link link-white"
            :to="{ name: dashproduct}">產品</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link-white" :to="{ name: 'order'}">訂單</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link-white" :to="{ name: 'coupon'}">優惠卷</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">登出</a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import offcanvasMixin from '@/mixins/offcanvasMixin';

export default {
  data() {
    return {
      offcanvas: {},
    };
  },
  methods: {
    logout() {
      // 登出
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((response) => {
        console.log(response);
        if (response.data.success) {
          this.$router.push({ name: 'home' });
        }
      });
    },
  },
  mixins: [offcanvasMixin],
};
</script>
