<template>
  <div class="modal fade" id="productModal" tabindex="-1"
  data-bs-backdrop="static"
  ref="modal">
    <div class="modal-dialog modal-xl modal-fullscreen-md-down">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="productModalLabel">新增產品</h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <V-form class="row g-4" v-slot="{ errors }">
              <div class="col-4">
                <div class="row">
                  <div class="col mb-3">
                    <label for="inputImageUrl" class="form-label">產品封面圖片網址</label>
                    <VField type="url" name="imageUrl" id="inputImageUrl"
                    class="form-control"
                    :class="{
                      'is-invalid': errors['imageUrl']||!tempProduct.imageUrl,
                      'is-valid': !errors['imageUrl']&&tempProduct.imageUrl
                    }"
                    placeholder="請輸入圖片網址"
                    rules="url|required"
                    aria-label="產品圖片網址輸入框"
                    v-model="tempProduct.imageUrl" />
                    <ErrorMessage name="imageUrl" class="invalid-feedback text-end" />
                    <div class="valid-feedback text-end">
                      <i class="bi bi-check-circle"></i>圖片網址格式正確
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <label for="inputProductName" class="form-label">或 上傳圖片</label>
                    <input type="file" name="url" id="inputImageFile"
                    class="form-control"
                    ref="fileInput"
                    aria-label="產品圖片檔案上傳輸入框"
                    @change="uploadFile" />
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3" v-if="!errors['imageUrl']&&tempProduct.imageUrl">
                    <img :src="tempProduct.imageUrl" alt="圖片封面圖" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="col-8">
                <div class="row">
                  <legend class="h3">產品資訊</legend>
                </div>
                <div class="row">
                  <div class="input-group mb-3">
                    <label for="inputProductName" class="input-group-text">名稱</label>
                    <VField type="text" name="productName" id="inputProductName"
                    class="form-control"
                    :class="{
                      'is-invalid': errors['productName']||!tempProduct.title,
                      'is-valid': tempProduct.title
                    }"
                    placeholder="請輸入產品名稱"
                    rules="required"
                    aria-label="產品名稱輸入框"
                    v-model="tempProduct.title" />
                    <ErrorMessage name="productName" class="invalid-feedback text-end" />
                    <div class="valid-feedback text-end">
                      <i class="bi bi-check-circle"></i>產品名稱格式正確
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-7">
                    <div class="input-group mb-3">
                      <label for="inputProductCategory" class="input-group-text">分類</label>
                      <select id="inputProductCategory"
                      class="form-select" :class="{
                        'is-invalid': !tempProduct.category,
                        'is-valid': tempProduct.category
                      }"
                      aria-label="產品分類選擇"
                      v-model="tempProduct.category">
                        <option selected disabled>請選擇產品類別</option>
                        <option value="bgleisure">勃根地</option>
                        <option value="SwanPanasia">新天鵝堡</option>
                        <option value="gokids">玩樂小子</option>
                        <option value="Kanga">袋鼠</option>
                        <option value="sunnyboard">陽光</option>
                        <option value="hsinyi">上誼</option>
                        <option value="Hasbro">孩之寶</option>
                        <option value="gege">哿哿屋</option>
                        <option value="bghut">卡牌屋</option>
                        <option value="emperors4">愛樂事</option>
                        <option value="SharpPoint">尖端出版社</option>
                        <option value="Taiwan">台灣設計專區</option>
                        <option value="moaideas">摩埃創意工作室</option>
                        <option value="bigfungame">Big Fun</option>
                        <option value="2plus">TWO PLUS</option>
                        <option value="morefun">玩坊</option>
                        <option value="Chinese">中國、港澳代理</option>
                        <option value="English">英文/其他國家版本遊戲</option>
                      </select>
                      <div id="inputProductCategoryFeedback" class="invalid-feedback text-end">
                        請選擇產品類別
                      </div>
                      <div class="valid-feedback text-end">
                        <i class="bi bi-check-circle"></i>產品類別已選擇
                      </div>
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="input-group mb-3">
                      <label for="inputProductUnit" class="input-group-text">人數</label>
                      <input type="text" min="1" name="productUnit" id="inputProductUnit"
                      class="form-control" :class="{
                        'is-invalid': !tempProduct.unit,
                        'is-valid': tempProduct.unit
                      }"
                      aria-label="產品單位"
                      v-model="tempProduct.unit">
                      <div class="invalid-feedback text-end">
                        請填寫產品遊玩人數
                      </div>
                      <div class="valid-feedback text-end">
                        <i class="bi bi-check-circle"></i>產品遊玩人數格式正確
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="input-group mb-3">
                      <label for="inputProductOriginPrice" class="input-group-text">原價</label>
                      <VField type="number" min="0"
                      name="productOriginPrice" id="inputProductOriginPrice"
                      class="form-control"
                      :class="{
                        'is-invalid': errors['productOriginPrice']||!tempProduct.origin_price,
                        'is-valid': tempProduct.origin_price
                      }"
                      placeholder="請輸入產品原價"
                      aria-label="產品原價輸入框"
                      v-model="tempProduct.origin_price" />
                      <ErrorMessage name="productOriginPrice" class="invalid-feedback" />
                      <div class="valid-feedback text-end">
                        <i class="bi bi-check-circle"></i>產品原價格式正確
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-group mb-3">
                      <label for="inputProductPrice" class="input-group-text">售價</label>
                      <VField type="number" min="0"
                      name="productPrice" id="inputProductPrice"
                      class="form-control"
                      :class="{
                        'is-invalid': errors['productPrice']||!tempProduct.price,
                        'is-valid': tempProduct.price
                      }"
                      placeholder="請輸入產品售價"
                      rules="numeric|required"
                      aria-label="產品售價輸入框"
                      v-model="tempProduct.price" />
                      <ErrorMessage name="productPrice" class="invalid-feedback" />
                      <div class="valid-feedback text-end">
                        <i class="bi bi-check-circle"></i>產品售價格式正確
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col mb-3">
                    <label for="inputProductDescription" class="form-label">產品描述</label>
                    <textarea type="text" name="productDescription" id="inputProductDescription"
                    class="form-control" rows="3"
                    placeholder="請輸入產品描述"
                    aria-label="產品描述輸入框"
                    v-model="tempProduct.description" />
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <label for="inputProductContent" class="form-label">產品說明</label>
                    <textarea type="text" name="productContent" id="inputProductContent"
                    class="form-control" rows="3"
                    placeholder="請輸入產品說明"
                    aria-label="產品說明輸入框"
                    v-model="tempProduct.content" />
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <input type="checkbox" name="productIsEnabled" id="inputProductIsEnabled"
                    class="form-check-input"
                    :true-value="1" :false-value="0"
                    v-model="tempProduct.is_enabled">
                    <label for="inputProductIsEnabled" class="form-check-label">是否啟用</label>
                  </div>
                </div>
              </div>
              <hr />
              <div class="col" v-if="tempProduct.imagesUrl">
                <legend class="h3">產品圖片</legend>
                <div class="input-group mb-3"
                v-for="(image, key) in tempProduct.imagesUrl" :key="key">
                  <label for="`inputProductImagesUrl${key}`"
                  class="input-group-text">圖片{{ key + 1 }}</label>
                  <input type="url" name="productImagesUrl" :id="`inputProductImagesUrl${key}`"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                  aria-label="產品圖片網址列"
                  v-model="tempProduct.imagesUrl[key]">
                  <button type="button"
                    class="btn btn-outline-danger"
                    @click="tempProduct.imagesUrl.splice(key, 1)">
                    移除
                  </button>
                </div>
                <div
                  v-if="tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                  || !tempProduct.imagesUrl.length">
                  <button
                    class="btn btn-outline-dark btn-sm d-block w-100"
                    @click="tempProduct.imagesUrl.push('')">
                    新增圖片
                  </button>
                </div>
              </div>
            </V-form>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-muted" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-dark"
          @click.prevent="$emit('update-product', tempProduct)">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    product: {
      type: Object,
      default() { return {}; },
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {},
    };
  },
  methods: {
    uploadFile() {
      // 上傳圖片檔案
      const uploadFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadFile);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((response) => {
        console.log(response);
        if (response.data.success) {
          this.tempProduct.imageUrl = response.data.imageUrl;
        }
      });
    },
  },
  watch: {
    product() {
      // 檢查產品資料
      this.tempProduct = this.product;
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
    },
  },
  mixins: [modalMixin],
};
</script>
