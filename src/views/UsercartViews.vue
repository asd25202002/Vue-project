<template>
  <VLoading :active="isLoading" />
  <main class="my-4">
    <hr>
    <div class="container">
      <nav style="--bs-breadcrumb-divider: '>';" aria-label="索引列">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            首頁
          </li>
          <li class="breadcrumb-item active" aria-current="page">購物車確認</li>
        </ol>
      </nav>
      <div class="d-none d-lg-block mb-5">
        <ul class="row row-col-4 align-items-center text-center list-unstyled">
          <li class="col position-relative progressMenu__itme--active">
            <p class="m-0 py-2 text-white">購物車確認</p>
          </li>
          <li class="col position-relative">
            <p class="m-0 py-2">填寫資料</p>
          </li>
          <li class="col position-relative">
            <p class="m-0 py-2">資料確認</p>
          </li>
          <li class="col position-relative">
            <p class="m-0 py-2 fs-6">購物完成</p>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="mb-3 fs-5" v-if="carts.carts">
            <strong>已購買 {{ carts.carts.length }} 件</strong>
          </div>
          <div class="row row-cols-2" v-for="item in carts.carts" :key="item.id">
            <div class="col-3 align-items-center">
              <img :src="item.product.imageUrl" :alt="item.product.title"
              class="img-fluid cartImg-size">
            </div>
            <div class="col-9 mb-3">
              <div class="row">
                <div class="col-5">
                  {{ item.product.title }}
                </div>
                <div class="col-7">
                  <div class="mb-3 text-end">
                    <button type="button" class="btn btn-outline-danger"
                    @click="delCart(item.id)">刪除</button>
                  </div>
                  <div class="mb-3">
                    <div class="input-group">
                      <input type="number" min="1" id="Unit"
                      class="form-control text-center" v-model="item.qty"
                      @change="updateCart(item)">
                      <label for="Unit" class="input-group-text">盒</label>
                    </div>
                  </div>
                  <div class="text-end">
                    <p class="fs-5">
                      <strong>小計 <i class="bi bi-currency-dollar"></i>
                        {{ carts.final_total }}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="mb-3 py-2 bg-categoryTitle text-center text-white fs-5">
            <strong>合計金額</strong>
          </div>
          <div class="row mb-5">
            <div class="col-6 fs-4"><strong>商品合計</strong></div>
            <div class="col-6 text-end fs-4">
              <strong v-if="carts.total === carts.final_total">
                <i class="bi bi-currency-dollar"></i>{{ carts.total }}
              </strong>
              <div v-if="carts.total > carts.final_total">
                <p>
                  <del class="text-muted">
                    <i class="bi bi-currency-dollar"></i>{{ carts.total }}
                  </del>
                </p>
                <p>
                  <strong><i class="bi bi-currency-dollar"></i>{{ carts.final_total }}</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="mb-3 py-2 bg-categoryTitle text-center text-white fs-5">
            <strong>優惠卷</strong>
          </div>
          <div class="row mb-5">
            <div class="input-group mb-3">
              <label for="inputCoupon" class="input-group-text"><strong>優惠碼</strong></label>
              <input type="text" id="inputCoupon" class="form-control" v-model="code">
              <button type="button" class="btn btn-outline-secondary"
              @click.prevent="coupon">兌換</button>
            </div>
            <div class="fs-5 text-end text-muted">現在輸入<strong>summer9487</strong>即可享有25%的優惠</div>
          </div>
          <div class="text-center">
            <router-link class="btn btn-secondary" :to="{ name: 'cartform'}">前往結帳</router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      carts: {},
      code: '',
      isLoading: false,
    };
  },
  inject: ['emitter', 'toastMessagesMixin'],
  methods: {
    getCarts() {
      // 取得購物車
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.carts = response.data.data;
        }
      });
    },
    delCart(id) {
      // 刪除購物車商品
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        if (response.data.success) {
          this.toastMessagesMixin(response, '刪除購物車項目');
          this.emitter.emit('update-cart');
          this.getCarts();
        }
      });
    },
    updateCart(product) {
      // 更新購物車
      const cart = {
        product_id: product.id,
        qty: product.qty,
      };
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${product.id}`;
      this.isLoading = true;
      this.$http.put(url, { data: cart }).then((response) => {
        if (response.data.success) {
          this.toastMessagesMixin(response, '更新購物車項目');
          this.getCarts();
        }
      });
    },
    coupon() {
      // 套用優惠卷
      const code = {
        code: this.code,
      };
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.isLoading = true;
      this.$http.post(url, { data: code }).then((response) => {
        this.isLoading = false;
        this.toastMessagesMixin(response, '優惠卷使用');
        this.getCarts();
      });
    },
  },
  created() {
    this.getCarts();
  },
};
</script>
