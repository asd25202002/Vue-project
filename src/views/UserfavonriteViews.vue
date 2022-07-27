<template>
  <main>
    <div class="container">
      <table class="table table-hover align-middle" v-if="myFavorite.length">
        <thead>
          <tr>
            <th class="text-center">圖片</th>
            <th class="text-center">分類</th>
            <th>產品名稱</th>
            <th class="text-right">原價</th>
            <th class="text-right">售價</th>
            <th class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td class="text-center">
              <img :src="product.imageUrl" :alt="product.title"
              class="img-fluid cartImg-size">
            </td>
            <td class="text-center">{{ product.category }}</td>
            <td>{{ product.title }}</td>
            <td class="text-right">{{ $filters.currency(product.origin_price) }}</td>
            <td class="text-right">{{ $filters.currency(product.price) }}</td>
            <td class="text-center">
              <div class="btn-group">
                <button type="button" class="btn btn-danger"
                @click.prevent="removeFavorite(product)">
                  <i class="bi bi-heart"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="py-4 fs-5 text-muted" v-else>您還沒有願望清單</div>
    </div>
  </main>
</template>

<script>
import handleFavorite from '@/methods/favorite';

export default {
  data() {
    return {
      myFavorite: handleFavorite.getFavorite() || [],
      products: '',
      isLoading: false,
    };
  },
  inject: ['emitter', 'toastMessagesMixin'],
  methods: {
    getFavorite() {
      this.myFavorite = handleFavorite.getFavorite();
      this.getProducts();
    },
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url)
        .then((response) => {
          if (!response.data.success) {
            this.toastMessagesMixin(response, '取得全部產品資料');
            return;
          }
          this.products = response.data.products
            .filter((product) => this.myFavorite.includes(product.id));
        })
        .catch((error) => {
          this.toastMessagesMixin(error, '連線錯誤');
        });
    },
    removeFavorite(item) {
      this.isLoading = true;
      this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
      this.toastMessagesMixin({
        data: {
          success: true,
          message: `已將 ${item.title} 移除收藏`,
        },
      }, '移除收藏');
      handleFavorite.storeFavorite(this.myFavorite);
      this.emitter.emit('update-favorite');
      this.getFavorite();
      this.isLoading = false;
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
