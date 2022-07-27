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
            購物車確認
          </li>
          <li class="breadcrumb-item">
            填寫資料
          </li>
          <li class="breadcrumb-item active" aria-current="page">資料確認</li>
        </ol>
      </nav>
      <div class="d-none d-lg-block mb-5">
        <ul class="row row-col-4 align-items-center text-center list-unstyled">
          <li class="col position-relative">
            <p class="m-0 py-2">購物車確認</p>
          </li>
          <li class="col position-relative">
            <p class="m-0 py-2">填寫資料</p>
          </li>
          <li class="col position-relative text-white progressMenu__itme--active">
            <p class="m-0 py-2">資料確認</p>
          </li>
          <li class="col position-relative">
            <p class="m-0 py-2 fs-6">購物完成</p>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <form class="row mx-auto cart">
            <div class="mb-3">
              <div class="input-group">
                <label for="inputUserName" class="input-group-text">姓名</label>
                <input type="text" id="inputUserName" class="form-control"
                v-model="order.user.name" readonly disabled>
              </div>
            </div>
            <div class="mb-3">
              <div class="input-group">
                <label for="inputUserPhone" class="input-group-text">手機號碼</label>
                <input type="text" id="inputUserPhone" class="form-control"
                v-model="order.user.tel" readonly disabled>
              </div>
            </div>
            <div class="mb-3">
              <div class="input-group">
                <label for="inputUserEmail" class="input-group-text">電子郵件</label>
                <input type="text" id="inputUserEmail" class="form-control"
                v-model="order.user.email" readonly disabled>
              </div>
            </div>
            <div class="mb-3">
              <div class="input-group">
                <label for="inputUserPosition" class="input-group-text">地址</label>
                <input type="text" id="inputUserPosition" class="form-control"
                v-model="order.user.address" readonly disabled>
              </div>
            </div>
            <div class="mb-3">
              <label for="inputMessages" class="form-label">留言</label>
              <textarea type="text"
              id="inputMessages" class="form-control" readonly disabled></textarea>
            </div>
          </form>
        </div>
        <div class="col-lg-4">
          <div class="row row-cols-2" v-for="product in order.products" :key="product.id">
            <div class="col-3 align-items-center">
              <img :src="product.product.imageUrl" :alt="product.product.title"
              class="img-fluid cartImg-size">
            </div>
            <div class="col-9 mb-3">
              <div class="row">
                <div class="col-5">
                  {{ product.product.title }}
                </div>
                <div class="col-7">
                  <div class="mb-3">
                    <div class="input-group">
                      <input type="number" min="1" id="Unit"
                      class="form-control text-center" v-model="product.qty" readonly>
                      <label for="Unit" class="input-group-text">盒</label>
                    </div>
                  </div>
                  <div class="text-end">
                    <p class="fs-5">
                      <strong>小計 <i class="bi bi-currency-dollar"></i>
                        {{ product.final_total }}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3 py-2 bg-categoryTitle text-center text-white fs-5">
            <strong>合計金額</strong>
          </div>
          <div class="row mb-5">
            <div class="col-6 fs-4"><strong>商品合計</strong></div>
            <div class="col-6 text-end fs-4">
              <strong><i class="bi bi-currency-dollar"></i>{{ order.total }}</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 text-center">
        <button type="button" class="btn btn-secondary"
        @click.prevent="gotoCartDone">完成購物並付款</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      order: {},
    };
  },
  inject: ['emitter', 'toastMessagesMixin'],
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.$route.params.id}`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.order = response.data.order;
        }
      });
    },
    gotoCartDone() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.order.id}`;
      this.isLoading = true;
      this.$http.post(url).then((response) => {
        this.isLoading = false;
        this.emitter.emit('update-cart');
        this.toastMessagesMixin(response, '完成付款');
        this.$router.push({
          name: 'cartdone',
        });
      });
    },
  },
  created() {
    this.getOrder();
  },
};
</script>
