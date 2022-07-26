<template>
  <VLoading :active="isLoading" />
  <div class="row g-3">
    <div class="col-lg-10 text-center">
      <div class="row">
        <div class="col-10">
          <input type="search"
          class="form-control me-2"
          placeholder="請輸入產品名稱"
          aria-label="產品收尋輸入框"
          v-model="search">
        </div>
        <div class="col-2 d-grid">
          <button type="submit"
          class="btn btn-outline-secondary">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="col-lg-2 text-end">
      <button type="button" class="btn btn-outline-secondary"
      @click.prevent="openProductsModal(true)">
        新增產品
      </button>
    </div>
  </div>
  <div class="row my-4 table-responsive">
    <table class="table table-hover align-middle">
      <thead>
        <tr>
          <th class="text-center">分類</th>
          <th>產品名稱</th>
          <th class="text-right">原價</th>
          <th class="text-right">售價</th>
          <th class="text-center">狀態</th>
          <th class="text-center">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filterProducts" :key="product.id">
          <td class="text-center">{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-right">{{ $filters.currency(product.origin_price) }}</td>
          <td class="text-right">{{ $filters.currency(product.price) }}</td>
          <td class="text-center">
            <span class="text-success" v-if="product.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td class="text-center">
            <div class="btn-group">
              <button type="button" class="btn btn-outline-success"
              @click.prevent="openProductsModal(false, product)">編輯</button>
              <button type="button" class="btn btn-outline-danger"
              @click.prevent="openDelProductsModal(product)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct" />
  <DelModal ref="delModal" :item="tempProduct" @del-item="delProduct" />
  <Pagination :pages="pagination" @emit-pages="getProducts" />
</template>

<script>
import ProductModal from '@/components/TheProductModal.vue';
import DelModal from '@/components/BaseDelModal.vue';
import Pagination from '@/components/BasePagination.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      search: '',
      isLoading: false,
      isNew: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  inject: ['toastMessagesMixin'],
  methods: {
    getProducts(page = 1) {
      // 產品重新載入
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(url).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.products = response.data.products;
          this.pagination = response.data.pagination;
        }
      });
    },
    openProductsModal(isNew, product) {
      // 打開產品表單
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...product };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    openDelProductsModal(item) {
      // 確認刪除提示窗
      this.tempProduct = { ...item };
      const productComponent = this.$refs.delModal;
      productComponent.showModal();
    },
    delProduct() {
      // 產品刪除
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.toastMessagesMixin(response, '刪除');
        const productComponent = this.$refs.delModal;
        productComponent.hideModal();
        this.getProducts(this.pagination.current_page);
      });
    },
    updateProduct(product) {
      // 產品上傳
      this.tempProduct = product;
      // vee-validate 套件資料無法轉型成 number
      this.tempProduct.price = parseInt(this.tempProduct.price, 10);
      this.tempProduct.origin_price = parseInt(this.tempProduct.origin_price, 10);
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      if (!this.isNew) {
        // 產品更新
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.isLoading = true;
      this.$http[httpMethod](url, { data: this.tempProduct }).then((response) => {
        this.toastMessagesMixin(response, '上傳', product.title);
        productComponent.hideModal();
        this.getProducts(this.pagination.current_page);
      });
    },
  },
  computed: {
    // 收尋
    filterProducts() {
      return this.products.filter((product) => {
        const response = product.title.match(this.search);
        return response;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
