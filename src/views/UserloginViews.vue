<template>
  <main class="my-4">
      <hr>
      <div class="container my-5">
        <div class="mb-3 text-center fs-3">後台管理</div>
        <div class="mb-4 text-center fs-5">歡迎使用後台管理服務</div>
        <V-form class="mx-auto logo" v-slot="{ errors }" @submit="signIn">
          <div class="mb-3 fs-5">
            <label for="inputUserEmail" class="form-label">帳號</label>
            <span class="text-danger">*</span>
            <VField type="email" name="email" id="inputUserEmail"
            class="form-control" :class="{ 'is-invalid': errors['email'] }"
            placeholder="name@example.com"
            rules="email|required"
            aria-label="電子郵件帳號輸入框"
            v-model="user.username" />
            <ErrorMessage name="email" class="invalid-feedback" />
          </div>
          <div class="mb-4 fs-5">
            <label for="inputUserPassword" class="form-label">密碼</label>
            <span class="text-danger">*</span>
            <VField type="password" name="password" id="inputUserPassword"
            class="form-control" :class="{ 'is-invalid': errors['password'] }"
            placeholder="password"
            rules="required"
            aria-label="密碼輸入框"
            v-model="user.password" />
            <ErrorMessage name="password" class="invalid-feedback" />
          </div>
          <div class="form-text">提醒您在公共場所登入時，須小心。</div>
          <div class="mb-4 text-end">
            <button type="submit" class="btn btn-outline-success">登入</button>
          </div>
        </V-form>
        <div class="text-center fs-1"><strong>注意事項</strong></div>
        <div class="text-center fs-5">此處為供使用者管理產品、訂單、優惠卷等所使用，若忘記帳密請點選
          <a href="./index.html"> 忘記密碼</a>
        </div>
      </div>
    </main>
</template>

<script>
export default {
  data() {
    return {
      // 使用者資料
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      // 登入
      const url = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(url, this.user).then((response) => {
        if (response.data.success) {
          const { token, expired } = response.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
          this.$router.push({ name: 'admin' });
        }
      });
    },
    checkSignIn() {
      // 檢查登入狀態
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      const url = `${process.env.VUE_APP_API}api/user/check`;
      this.$http.post(url).then((response) => {
        if (response.data.success) {
          this.$router.push({ name: 'admin' });
        } else {
          this.$router.push({ name: 'login' });
        }
      });
    },
  },
  created() {
    this.checkSignIn();
  },
};
</script>
