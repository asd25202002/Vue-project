<template>
  <main class="my-4">
    <hr>
    <div class="container">
      <nav style="--bs-breadcrumb-divider: '>';" aria-label="索引列">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            首頁
          </li>
          <li class="breadcrumb-item">
            {{ product.category }}
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-lg-6">
          <img :src="product.imageUrl" :alt="product.title" class="img-fluid">
        </div>
        <div class="col-lg-6">
          <p class="fs-3">{{ product.title }}</p>
          <p class="fs-5">售價：NT<i class="bi bi-currency-dollar"></i>{{ product.price }}</p>
          <hr>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-success"
            @click.prevent="addCart(product.id)">
              <i class="bi bi-cart"></i>
              加入購物車
            </button>
            <button type="button" class="btn btn-outline-danger"
            @click.prevent="toggleFavorite(product)">
              <i class="bi bi-heart"></i>
              加入願望清單
            </button>
          </div>
        </div>
      </div>
      <ul class="nav nav-tabs mb-3">
        <li class="nav-item active">
          <a href="#" class="nav-link link-dark" aria-current="page" @click.prevent="page = '產品描述'">
            產品描述
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-dark" @click.prevent="page = '產品說明'">
            產品內容
          </a>
        </li>
      </ul>
      <div class="mb-3" v-if="page === '產品描述'">
        <p class="fs-3"><strong>產品描述</strong></p>
        {{ product.description }}
      </div>
      <div class="mb-3" v-if="page === '產品說明'">
        <p class="fs-3"><strong>產品說明</strong></p>
        {{ product.content }}
      </div>
      <div class="mb-3 fs-3"><strong>你可能也會喜歡....</strong></div>
      <ul class="row g-4 p-0 list-unstyled">
        <template v-for="(recommend, i) in filterProducts" :key="recommend.id">
          <li class="col-sm-6 col-lg-2 border-0"
          v-if="i < 6 && recommend.id !== product.id">
            <div class="card border-0 h-100">
              <img :src="recommend.imageUrl" alt="product.title"
              class="img-fluid mx-auto productImg-size">
              <div class="card-body text-center">
                <h5 class="card-title text-truncate">{{ recommend.title }}</h5>
                <p class="card-text">
                  遊戲人數：{{ recommend.unit }} 人
                </p>
                <p class="card-text">
                  發行商：{{ recommend.category }}
                </p>
                <p class="card-text">
                  NT<i class="bi bi-currency-dollar"></i>{{ $filters.currency(recommend.price) }}
                </p>
                <a type="button"
                class="btn btn-secondary stretched-link" href="#"
                @click.prevent="gotoProduct(recommend.id)">
                  前往
                </a>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>

<script>
import handleFavorite from '@/methods/favorite';

export default {
  data() {
    return {
      product: {},
      products: [],
      page: '產品描述',
      myFavorite: handleFavorite.getFavorite() || [],
    };
  },
  inject: ['emitter', 'toastMessagesMixin'],
  methods: {
    getProducts() {
      // 產品重新載入
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.products = response.data.products;
          this.pagination = response.data.pagination;
        }
      });
    },
    getProduct(productID) {
      // 產品資訊
      const id = productID || this.$route.params.id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(url).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
        }
      });
    },
    addCart(productID) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: productID,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.emitter.emit('update-cart');
          this.toastMessagesMixin(response, '加入購物車');
        }
      });
    },
    gotoProduct(productID) {
      // 跳轉產品頁面
      this.$router.push({
        name: 'userproduct',
        params: {
          id: productID,
        },
      });
      this.getProduct(productID);
    },
    toggleFavorite(item) {
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
        this.toastMessagesMixin({
          data: {
            success: true,
            message: `已將 ${item.title} 移除收藏`,
          },
        }, '移除收藏');
      } else {
        this.myFavorite.push(item.id);
        this.toastMessagesMixin({
          data: {
            success: true,
            message: `已將 ${item.title} 加入收藏`,
          },
        }, '加入收藏');
      }
      handleFavorite.storeFavorite(this.myFavorite);
      this.emitter.emit('update-favorite');
    },
  },
  computed: {
    filterProducts() {
      // 收尋 category
      return this.products.filter((product) => {
        const response = product.category.match(this.product.category);
        return response;
      });
    },
  },
  created() {
    this.getProduct();
    this.getProducts();
  },
};
</script>
