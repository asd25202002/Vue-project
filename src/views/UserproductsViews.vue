<template>
  <VLoading :active="isLoading" />
  <main class="my-4">
    <hr>
    <div class="container">
      <div class="row">
        <div class="d-none d-lg-block col-lg-3 text-center">
          <label for="inputProductName" class="form-label fs-5">
            <strong>產品收尋</strong>
          </label>
          <div class="position-relative mb-3">
            <form>
              <input type="text" id="inputProductName" class="form-control rounded-pill"
              placeholder="請輸入產品名稱"
              aria-label="產品收尋框"
              v-model="search">
              <button type="sumbit"
              class="position-absolute top-50 translate-middle border-0 searchBtn">
                <i class="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div class="py-2 bg-categoryTitle text-white">
            <strong>從遊戲人數找查</strong>
          </div>
          <ul class="px-0 text-start list-unstyled">
            <li>
              <a class="py-2 d-block link-dark text-decoration-none categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': max === 3 && parseInt(islink) }"
              href="#"
              @click.prevent="gotoproducts(1, 3)">
                上限 3 人
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': max === 4 && parseInt(islink) }"
              href="#"
              @click.prevent="gotoproducts(1, 4)">
                上限 4 人
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': max === 6 && parseInt(islink) }"
              href="#"
              @click.prevent="gotoproducts(5, 6)">
                上限 5~6 人
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': max === 10 && parseInt(islink) }"
              href="#"
              @click.prevent="gotoproducts(7, 10)">
                上限 7~10 人
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': max === 20 && parseInt(islink) }"
              href="#"
              @click.prevent="gotoproducts(10, 20)">
                超過 10 人以上
              </a>
            </li>
          </ul>
          <div class="py-2 bg-categoryTitle text-white">
            <strong>從發行商找查</strong>
          </div>
          <ul class="px-0 text-start list-unstyled">
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'bgleisure' }"
              href="#" @click.prevent="islink = 'bgleisure'">
                勃根地
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'SwanPanasia' }"
              href="#" @click.prevent="islink = 'SwanPanasia'">
                新天鵝堡
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'gokids' }"
              href="#" @click.prevent="islink = 'gokids'">
                玩樂小子
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'Kanga' }"
              href="#" @click.prevent="islink = 'Kanga'">
                袋鼠
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'sunnyboard' }"
              href="#" @click.prevent="islink = 'sunnyboard'">
                陽光
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'hsinyi' }"
              href="#" @click.prevent="islink = 'hsinyi'">
                上誼
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'Hasbro' }"
              href="#" @click.prevent="islink = 'Hasbro'">
                孩之寶
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'gege' }"
              href="#" @click.prevent="islink = 'gege'">
                哿哿屋
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'bghut' }"
              href="#" @click.prevent="islink = 'bghut'">
                卡牌屋
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'emperors4' }"
              href="#" @click.prevent="islink = 'emperors4'">
                愛樂事
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'SharpPoint' }"
              href="#" @click.prevent="islink = 'SharpPoint'">
                尖端出版社
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'Taiwan' }"
              href="#" @click.prevent="islink = 'Taiwan'">
                台灣設計專區
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'moaideas' }"
              href="#" @click.prevent="islink = 'moaideas'">
                摩埃創意工作室
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{
                'categoryMeun__item--active': islink === 'bigfungame'
              }"
              href="#" @click.prevent="islink = 'bigfungame'">
                Big Fun
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{
                'categoryMeun__item--active': islink === '2plus'
              }"
              href="#" @click.prevent="islink = '2plus'">
                TWO PLUS
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{
                'categoryMeun__item--active': islink === 'morefun'
              }"
              href="#" @click.prevent="islink = 'morefun'">
                玩坊
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'Chinese' }"
              href="#" @click.prevent="islink = 'Chinese'">
                中國、港澳代理
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              :class="{ 'categoryMeun__item--active': islink === 'English' }"
              href="#" @click.prevent="islink = 'English'">
                英文/其他國家版本遊戲
              </a>
            </li>
          </ul>
        </div>
        <div class="col col-lg-9">
          <div class="mb-3 fs-3 text-center"><strong>產品一覽</strong></div>
          <ul class="row g-4 p-0 list-unstyled">
            <li class="col-md-6 col-lg-3 border-0"
            v-for="product in filterProducts" :key="product.id">
              <div class="card border-0 h-100">
                <img :src="product.imageUrl" alt="product.title"
                class="img-fluid mx-auto productImg-size">
                <div class="card-body text-center">
                  <h5 class="card-title text-truncate">{{ product.title }}</h5>
                  <p class="card-text">
                    遊戲人數：{{ product.unit }} 人
                  </p>
                  <p class="card-text">
                    發行商：{{ product.category }}
                  </p>
                  <p class="card-text">
                    NT<i class="bi bi-currency-dollar"></i>{{ $filters.currency(product.price) }}
                  </p>
                  <a type="button"
                  class="btn btn-secondary stretched-link" href="#"
                  @click.prevent="gotoProduct(product.id)">
                    前往
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  data() {
    return {
      islink: '',
      max: 0,
      search: '',
      products: [],
      pagination: {},
      isLoading: false,
    };
  },
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
    gotoproducts(islink, maximum) {
      // 跳轉產品類型頁面
      this.islink = islink;
      this.max = maximum;
    },
    gotoProduct(productID) {
      // 跳轉產品頁面
      this.$router.push({
        name: 'userproduct',
        params: {
          id: productID,
        },
      });
    },
  },
  computed: {
    // 收尋
    filterProducts() {
      if (parseInt(this.islink, 10)) {
        return this.products.filter((product) => parseInt(this.islink, 10) <= product.unit
        && product.unit <= parseInt(this.max, 10));
      }
      return this.products.filter((product) => {
        const response = product.category.match(this.islink);
        return response;
      });
    },
  },
  created() {
    this.getProducts();
    this.islink = this.$route.params.link;
    this.max = parseInt(this.$route.params.max, 10);
  },
};
</script>
