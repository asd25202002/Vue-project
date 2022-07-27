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
          <li class="breadcrumb-item active" aria-current="page">填寫資料</li>
        </ol>
      </nav>
      <div class="d-none d-lg-block mb-5">
        <ul class="row row-col-4 align-items-center text-center list-unstyled">
          <li class="col position-relative">
            <p class="m-0 py-2">購物車確認</p>
          </li>
          <li class="col position-relative text-white progressMenu__itme--active">
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
      <div class="mb-3 fs-3 text-center"><strong>訂購人資訊</strong></div>
      <VForm class="row mx-auto cart" v-slot="{ errors }">
        <div class="mb-3">
          <div class="input-group">
            <label for="inputUserName" class="input-group-text">姓名</label>
            <VField type="text" name="userName" id="inputUserName" class="form-control"
            :class="{
              'is-invalid': errors['userName']||!form.user.name,
              'is-valid': !errors['userName']&&form.user.name
            }"
            placeholder="請輸入姓名"
            rules="required"
            aria-label="姓名輸入框"
            v-model="form.user.name" />
            <ErrorMessage name="userName" class="invalid-feedback text-end" />
            <div class="valid-feedback text-end">
              <i class="bi bi-check-circle"></i>姓名格式正確
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="input-group">
            <label for="inputUserPhone" class="input-group-text">手機號碼</label>
            <VField type="text" name="phone" id="inputUserPhone" class="form-control"
            :class="{
              'is-invalid': errors['phone']||!form.user.tel,
              'is-valid': !errors['phone']&&form.user.tel
            }"
            placeholder="請輸入手機號碼"
            :rules="isPhone"
            aria-label="手機號碼輸入框"
            v-model="form.user.tel" />
            <ErrorMessage name="phone" class="invalid-feedback text-end" />
            <div class="valid-feedback text-end">
              <i class="bi bi-check-circle"></i>手機號碼格式正確
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="input-group">
            <label for="inputUserEmail" class="input-group-text">電子郵件</label>
            <VField type="email" name="userEmail" id="inputUserEmail" class="form-control"
            :class="{
              'is-invalid': errors['userEmail']||!form.user.email,
              'is-valid': !errors['userEmail']&&form.user.email
            }"
            placeholder="請輸入電子郵件"
            rules="email|required"
            aria-label="電子郵件輸入框"
            v-model="form.user.email" />
            <ErrorMessage name="userEmail" class="invalid-feedback text-end" />
            <div class="valid-feedback text-end">
              <i class="bi bi-check-circle"></i>電子郵件格式正確
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="input-group">
            <label for="inputUserPosition" class="input-group-text">地址</label>
            <VField type="text" name="userPosition" id="inputUserPosition" class="form-control"
            :class="{
              'is-invalid': errors['userPosition']||!form.user.address,
              'is-valid': !errors['userPosition']&&form.user.address
            }"
            placeholder="請輸入地址"
            rules="required"
            aria-label="地址輸入框"
            v-model="form.user.address" />
            <ErrorMessage name="userPosition" class="invalid-feedback text-end" />
            <div class="valid-feedback text-end">
              <i class="bi bi-check-circle"></i>地址格式正確
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="inputMessages" class="form-label">留言</label>
          <textarea type="text" id="inputMessages" class="form-control"
          v-model="form.message"></textarea>
        </div>
        <div class="mb-3 text-center">
          <button type="sumbit"
          class="btn btn-secondary"
          :disabled="isEmpty || Object.keys(errors).length !== 0"
          href="#" @click.prevent="gotoCartCheck">確認資料並送出</button>
        </div>
      </VForm>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      isEmpty: true,
    };
  },
  inject: ['toastMessagesMixin'],
  methods: {
    getCarts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.carts = response.data.data;
        }
      });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    gotoCartCheck() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.$http.post(url, { data: this.form }).then((response) => {
        console.log(response);
        this.toastMessagesMixin(response, '成功建立訂單');
        this.$router.push({
          name: 'cartcheck',
          params: {
            id: response.data.orderId,
          },
        });
      });
    },
  },
  watch: {
    form: {
      handler(val) {
        if (val.user.email && val.user.tel && val.user.name && val.user.address) {
          this.isEmpty = false;
        }
      },
      deep: true,
    },
  },
};
</script>
