<template>
  <div class="modal fade" id="couponsModal" tabindex="-1"
  data-bs-backdrop="static"
  ref="modal">
    <div class="modal-dialog modal-xl modal-fullscreen-md-down">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="couponModalLabel">新增優惠卷</h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <V-form class="row g-4" v-slot="{ errors }">
              <legend class="h3">優惠卷資訊</legend>
              <div class="col-6">
                <div class="input-group mb-3">
                  <label for="inputCouponName" class="input-group-text">名稱</label>
                  <VField type="text" name="couponName" id="inputCouponName"
                  class="form-control"
                  :class="{
                    'is-invalid': errors['couponName']||!tempCoupon.title,
                    'is-valid': tempCoupon.title
                  }"
                  placeholder="請輸入活動名稱"
                  rules="required"
                  aria-label="活動名稱輸入框"
                  v-model="tempCoupon.title" />
                  <ErrorMessage name="couponName" class="invalid-feedback text-end" />
                  <div class="valid-feedback text-end">
                    <i class="bi bi-check-circle"></i>活動名稱格式正確
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <label for="inputCouponCode" class="input-group-text">優惠碼</label>
                  <VField type="text" name="couponCode" id="inputCouponCode"
                  class="form-control"
                  :class="{
                    'is-invalid': errors['couponCode']||!tempCoupon.code,
                    'is-valid': tempCoupon.code&&!errors['couponCode']
                  }"
                  placeholder="請輸入優惠碼"
                  rules="alpha_num|required"
                  aria-label="優惠碼輸入框"
                  v-model="tempCoupon.code" />
                  <ErrorMessage name="couponCode" class="invalid-feedback text-end" />
                  <div class="valid-feedback text-end">
                    <i class="bi bi-check-circle"></i>優惠碼格式正確
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <label for="inputCouponDue_date" class="input-group-text">到日期</label>
                  <input type="date" name="couponDue_date" id="inputCouponDue_date"
                  class="form-control"
                  :class="{
                    'is-invalid': !tempCoupon.due_date,
                    'is-valid': tempCoupon.due_date
                  }"
                  placeholder="請輸入到日期"
                  aria-label="到日期輸入框"
                  v-model="due_date" required />
                  <div name="couponDue_date" class="invalid-feedback text-end">
                    到日期不能為空
                  </div>
                  <div class="valid-feedback text-end">
                    <i class="bi bi-check-circle"></i>到日期格式正確
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <label for="inputCouponPercent" class="input-group-text">折扣百分比</label>
                  <VField type="number" name="couponPercent" id="inputCouponPercent"
                  class="form-control"
                  :class="{
                    'is-invalid': errors['couponPercent']||!tempCoupon.percent,
                    'is-valid': tempCoupon.percent
                  }"
                  placeholder="請輸入折扣百分比"
                  rules="numeric|required"
                  aria-label="折扣百分比輸入框"
                  v-model="tempCoupon.percent" />
                  <ErrorMessage name="couponPercent" class="invalid-feedback text-end" />
                  <div class="valid-feedback text-end">
                    <i class="bi bi-check-circle"></i>折扣百分比格式正確
                  </div>
                </div>
              </div>
              <div class="col mb-3 text-end">
                <input type="checkbox" name="couponIsEnabled" id="inputCouponIsEnabled"
                class="form-check-input"
                :true-value="1" :false-value="0"
                v-model="tempCoupon.is_enabled">
                <label for="inputCouponIsEnabled" class="form-check-label">是否啟用</label>
              </div>
            </V-form>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-muted" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-dark"
          @click.prevent="$emit('update-coupon', tempCoupon)">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    coupon: {
      type: Object,
      default() { return {}; },
    },
  },
  data() {
    return {
      modal: {},
      tempCoupon: {},
      due_date: {},
    };
  },
  watch: {
    coupon() {
      // 檢查產品資料
      this.tempCoupon = this.coupon;
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString().split('T');
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  mixins: [modalMixin],
};
</script>
