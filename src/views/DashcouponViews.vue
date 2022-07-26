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
      <button class="btn btn-outline-secondary"
      @click.prevent="openCouponsModal(true)">
        新增優惠卷
      </button>
    </div>
  </div>
  <div class="row my-4">
    <table class="table table-hover align-middle">
      <thead>
        <tr>
          <th>活動名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th class="text-center">狀態</th>
          <th class="text-center">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coupon in filterCoupons" :key="coupon.id">
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.percent }}</td>
          <td>{{ $filters.date(coupon.due_date) }}</td>
          <td class="text-center">
            <span class="text-success" v-if="coupon.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td class="text-center">
            <div class="btn-group">
              <button type="button" class="btn btn-outline-success"
              @click.prevent="openCouponsModal(false, coupon)">編輯</button>
              <button type="button" class="btn btn-outline-danger"
              @click.prevent="openDelCouponsModal(coupon)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <CouponsModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon" />
  <DelModal ref="delModal" :item="tempCoupon" @del-item="delCoupon" />
  <Pagination :pages="pagination" @emit-pages="getCoupons" />
</template>

<script>
import CouponsModal from '@/components/TheCouponsModal.vue';
import DelModal from '@/components/BaseDelModal.vue';
import Pagination from '@/components/BasePagination.vue';

export default {
  data() {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {},
      search: '',
      isLoading: false,
      isNew: false,
    };
  },
  components: {
    CouponsModal,
    DelModal,
    Pagination,
  },
  inject: ['toastMessagesMixin'],
  methods: {
    getCoupons(page = 1) {
      // 優惠卷重新載入
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(url).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.coupons = response.data.coupons;
          this.pagination = response.data.pagination;
        }
      });
    },
    openCouponsModal(isNew, coupon) {
      // 打開優惠卷表單
      if (isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...coupon };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.couponModal;
      productComponent.showModal();
    },
    openDelCouponsModal(item) {
      // 確認刪除提示窗
      this.tempCoupon = { ...item };
      const productComponent = this.$refs.delModal;
      productComponent.showModal();
    },
    delCoupon() {
      // 優惠卷刪除
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.toastMessagesMixin(response, '刪除', this.tempCoupon.title);
        const productComponent = this.$refs.delModal;
        productComponent.hideModal();
        this.getCoupons(this.pagination.currentPage);
      });
    },
    updateCoupon(coupon) {
      // 產品上傳
      this.tempCoupon = coupon;
      // vee-validate 套件資料無法轉型成 number
      this.tempCoupon.percent = parseInt(this.tempCoupon.percent, 10);
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = 'post';
      if (!this.isNew) {
        // 產品更新
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${coupon.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.couponModal;
      this.isLoading = true;
      this.$http[httpMethod](url, { data: this.tempCoupon }).then((response) => {
        this.toastMessagesMixin(response, '上傳', coupon.title);
        productComponent.hideModal();
        this.getCoupons();
      });
    },
  },
  computed: {
    filterCoupons() {
      return this.coupons.filter((coupon) => {
        const response = coupon.title.match(this.search);
        return response;
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
