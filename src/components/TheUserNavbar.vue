<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <button type="button"
      class="navbar-toggler d-lg-none"
      aria-label="導覽列"
      @click.prevent="showOffcanvas">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand logo logo--hover" to="/userboard/home">
        <span class="display-4 display-lg-2">
          <strong>CAT HOUSE</strong>
        </span>
      </router-link>
      <div tabindex="-1"
      class="offcanvas offcanvas-start"
      ref="menu"
      aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasNavbarLabel" class="offcanvas-title">CAT HOUSE</h5>
          <button type="button"
          class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="關閉">
          </button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="./userproduct.html" class="nav-link link-dark">產品一覽</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="ms-auto mt-2 mt-md-0 align-items-center">
        <router-link
        class="btn border-0 position-relative p-0 me-4 me-lg-5 icon--hover"
        :to="{ name: 'cart' }">
          <i class="bi bi-cart" style="font-size: 1.5rem;"></i>
          <span class="position-absolute start-100 translate-middle
          badge rounded-pill bg-secondary navbarIconBtn" v-if="carts.carts">
            {{ carts.carts.length ? carts.carts.length : '' }}
          </span>
        </router-link>
        <router-link
        class="btn border-0 position-relative p-0 me-4 me-lg-5 icon--hover"
        :to="{ name: 'favonrite' }">
          <i class="bi bi-heart" style="font-size: 1.5rem;"></i>
          <span class="position-absolute start-100 translate-middle
          badge rounded-pill bg-secondary navbarIconBtn" v-if="myFavorite.length">
            {{ myFavorite.length ? myFavorite.length : '' }}
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import offcanvasMixin from '@/mixins/offcanvasMixin';
import handleFavorite from '@/methods/favorite';

export default {
  data() {
    return {
      offcanvas: {},
      carts: [],
      myFavorite: handleFavorite.getFavorite() || [],
    };
  },
  inject: ['emitter'],
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((response) => {
        this.carts = response.data.data;
      });
    },
    getFavorite() {
      this.myFavorite = handleFavorite.getFavorite();
    },
  },
  mounted() {
    this.getCart();
    this.emitter.on('update-cart', this.getCart);
    this.emitter.on('update-favorite', this.getFavorite);
  },
  mixins: [offcanvasMixin],
};
</script>
