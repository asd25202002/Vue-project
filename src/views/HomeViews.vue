<template>
  <div class="banner position-relative">
    <div class="position-absolute top-50 start-50 translate-middle display-1">
      <strong><span class="text-white slogan">連結</span>你與每個</strong>
      <span class="text-white slogan">朋友</span>
    </div>
  </div>
  <main class="my-4">
    <div class="container">
      <div class="row">
        <div class="d-none d-lg-block col-lg-3 text-center">
          <label for="inputProductName" class="form-label fs-5">
            <strong>產品收尋</strong>
          </label>
          <div class="position-relative mb-3">
            <input type="text" id="inputProductName" class="form-control rounded-pill"
            placeholder="請輸入產品名稱"
            aria-label="產品收尋框">
            <button type="button"
            class="position-absolute top-50 translate-middle border-0 searchBtn">
              <i class="bi bi-search"></i>
            </button>
          </div>
          <div class="py-2 bg-categoryTitle text-white">
            <strong>從遊戲人數找查</strong>
          </div>
          <ul class="px-0 text-start list-unstyled">
            <li class="mb-2 py-2 categoryMeun__item--hover">
              <a class="d-block link-dark text-decoration-none" href="#"
              @click.prevent="gotoproducts(1, 3)">
                上限 3 人
              </a>
            </li>
            <li class="mb-2 py-2 categoryMeun__item--hover">
              <a class="d-block link-dark text-decoration-none" href="#"
              @click.prevent="gotoproducts(1, 4)">
                上限 4 人
              </a>
            </li>
            <li class="mb-2 py-2 categoryMeun__item--hover">
              <a class="d-block link-dark text-decoration-none" href="#"
              @click.prevent="gotoproducts(5, 6)">
                上限 5~6 人
              </a>
            </li>
            <li class="mb-2 py-2 categoryMeun__item--hover">
              <a class="d-block link-dark text-decoration-none" href="#"
              @click.prevent="gotoproducts(7, 10)">
                上限 7~10 人
              </a>
            </li>
            <li class="mb-2 py-2 categoryMeun__item--hover">
              <a class="d-block link-dark text-decoration-none" href="#"
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
              href="#" @click.prevent="gotoproducts('bgleisure')">
                勃根地
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('SwanPanasia')">
                新天鵝堡
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('gokids')">
                玩樂小子
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('Kanga')">
                袋鼠
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('sunnyboard')">
                陽光
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('hsinyi')">
                上誼
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('Hasbro')">
                孩之寶
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('gege')">
                哿哿屋
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('bghut')">
                卡牌屋
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('emperors4')">
                愛樂事
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('SharpPoint')">
                尖端出版社
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('Taiwan')">
                台灣設計專區
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('moaideas')">
                摩埃創意工作室
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('bigfungame')">
                Big Fun
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('2plus')">
                TWO PLUS
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('morefun')">
                玩坊
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('Chinese')">
                中國、港澳代理
              </a>
            </li>
            <li>
              <a class="py-2 d-block link-dark text-decoration-none
              position-relative
              categoryMeun__item--hover"
              href="#" @click.prevent="gotoproducts('English')">
                英文/其他國家版本遊戲
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-9">
          <div class="mb-3 fs-3 text-center"><strong>最新上架</strong></div>
          <ul class="row g-4 p-0 list-unstyled">
            <li class="col-sm-6 col-lg-3 border-0"
            v-for="product in products" :key="product.id">
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
          <div class="mb-3 fs-3 text-center"><strong>發行商一覽</strong></div>
          <ul class="row g-4 p-0 align-items-center text-center list-unstyled">
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('bgleisure')">
                <img src="../assets/img/bgleisure.png" alt="勃根地" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('SwanPanasia')">
                <img src="../assets/img/SwanPanasia.gif" alt="新天鵝堡" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('gokids')">
                <img src="../assets/img/gokids.jpg" alt="玩樂小子" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('Kanga')">
                <img src="../assets/img/Kanga.jpg" alt="袋鼠" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('sunnyboard')">
                <img src="../assets/img/sunnyboard.jpg" alt="陽光" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('hsinyi')">
                <img src="../assets/img/hsinyi.png" alt="上誼" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('Hasbro')">
                <img src="../assets/img/Hasbro.png" alt="孩之寶" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('gege')">
                <img src="../assets/img/gege.jpg" alt="哿哿屋" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('bghut')">
                <img src="../assets/img/bghut.jpg" alt="卡牌屋" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('emperors4')">
                <img src="../assets/img/emperors4.jpg" alt="愛樂事" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('SharpPoint')">
                <img src="../assets/img/SharpPoint.png" alt="尖端出版社" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('Taiwan')">
                <img src="../assets/img/Taiwan.gif" alt="台灣設計專區" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('moaideas')">
                <img src="../assets/img/moaideas.png" alt="摩埃創意工作室" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('bigfungame')">
                <img src="../assets/img/bigfungame.jpg" alt="Big Fun、TWO PLUS、玩坊" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('Chinese')">
                <img src="../assets/img/Chinese.png" alt="中國、港澳代理" class="img-fluid">
              </a>
            </li>
            <li class="col-md-6 col-lg-3 categoryImgMenu__item--hover">
              <a class="text-decoration-none" href="#" @click.prevent="gotoproducts('English')">
                <img src="../assets/img/English.gif" alt="英文/其他國家版本遊戲" class="img-fluid">
              </a>
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
      products: [],
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      // 產品重新載入
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=1`;
      this.$http.get(url).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.products = response.data.products;
        }
      });
    },
    gotoproducts(islink, maximum) {
      // 跳轉產品類型頁面
      this.islink = islink;
      this.$router.push({
        name: 'userproducts',
        params: {
          link: islink,
          max: maximum,
        },
      });
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
  created() {
    this.getProducts();
  },
};
</script>
