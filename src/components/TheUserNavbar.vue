<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <button type="button"
      class="navbar-toggler d-lg-none"
      aria-label="導覽列"
      @click.prevent="showOffcanvas">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand logo logo--hover" to="/userboard/home">
        <span class="display-4 display-lg-2">
          <strong>CAT HOUSE</strong>
        </span>
      </router-link>
      <div tabindex="-1"
      class="offcanvas offcanvas-start"
      ref="menu"
      aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasNavbarLabel" class="offcanvas-title">
            <span class="fs-1"><strong>CAT HOUSE</strong></span>
          </h5>
          <button type="button"
          class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="關閉">
          </button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item">
              <label for="inputProductName" class="form-label fs-5">
                <strong>產品收尋</strong>
              </label>
              <div class="position-relative mb-3">
                <input type="text" id="inputProductName" class="form-control rounded-pill mb-2"
                placeholder="請輸入產品名稱"
                aria-label="產品收尋框"
                v-model="search">
                <button type="button"
                class="col-12 btn btn-secondary">
                  <i class="bi bi-search"></i> 收尋
                </button>
              </div>
            </li>
            <li class="nav-item">
              <div class="py-2 text-center bg-categoryTitle text-white">
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
            </li>
            <li class="nav-item">
              <div class="py-2 text-center bg-categoryTitle text-white">
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
            </li>
          </ul>
        </div>
      </div>
      <div class="ms-auto mt-2 mt-md-0 align-items-center">
        <router-link
        class="btn border-0 position-relative p-0 me-4 me-lg-5 icon--hover"
        :to="{ name: 'cart' }">
          <i class="bi bi-cart" style="font-size: 1.5rem;"></i>
          <span class="position-absolute start-100 translate-middle
          badge rounded-pill bg-secondary navbarIconBtn" v-if="carts.carts">
            {{ carts.carts.length ? carts.carts.length : '' }}
          </span>
        </router-link>
        <router-link
        class="btn border-0 position-relative p-0 me-4 me-lg-5 icon--hover"
        :to="{ name: 'favonrite' }">
          <i class="bi bi-heart" style="font-size: 1.5rem;"></i>
          <span class="position-absolute start-100 translate-middle
          badge rounded-pill bg-secondary navbarIconBtn" v-if="myFavorite.length">
            {{ myFavorite.length ? myFavorite.length : '' }}
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import offcanvasMixin from '@/mixins/offcanvasMixin';
import handleFavorite from '@/methods/favorite';

export default {
  data() {
    return {
      offcanvas: {},
      islink: '',
      max: 0,
      search: '',
      carts: [],
      myFavorite: handleFavorite.getFavorite() || [],
    };
  },
  inject: ['emitter'],
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((response) => {
        this.carts = response.data.data;
      });
    },
    getFavorite() {
      this.myFavorite = handleFavorite.getFavorite();
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
  },
  mounted() {
    this.getCart();
    this.emitter.on('update-cart', this.getCart);
    this.emitter.on('update-favorite', this.getFavorite);
  },
  mixins: [offcanvasMixin],
};
</script>
