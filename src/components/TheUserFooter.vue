<template>
  <footer class="bg-dark py-4">
    <div class="container text-center">
      <div class="mb-4">
        <router-link class="link-light logo logo--hover" to="/userboard/home">
          <span class="display-5">
            <strong>CAT HOUSE</strong>
          </span>
        </router-link>
      </div>
      <ul class="row row-cols-4 justify-content-center list-unstyled">
        <li class="col">
          <router-link class="link-light text-decoration-none icon--hover" :to="{ name: 'home' }">
            <i class="bi bi-line fs-1"></i>
            <p class="text-white d-none d-md-block">LINE</p>
          </router-link>
        </li>
        <li class="col">
          <router-link class="link-light text-decoration-none icon--hover" :to="{ name: 'home' }">
            <i class="bi bi-facebook fs-1"></i>
            <p class="text-white d-none d-md-block">Facebook</p>
          </router-link>
        </li>
        <li class="col">
          <router-link class="link-light text-decoration-none icon--hover" :to="{ name: 'home' }">
            <i class="bi bi-instagram fs-1"></i>
            <p class="text-white d-none d-md-block">Instagram</p>
          </router-link>
        </li>
        <li class="col">
          <router-link class="link-light text-decoration-none icon--hover" :to="{ name: 'home' }">
            <i class="bi bi-twitter fs-1"></i>
            <p class="text-white d-none d-md-block">Twitter</p>
          </router-link>
        </li>
      </ul>
      <ul class="row row-cols-2 row-cols-lg-4 g-2 justify-content-center list-unstyled">
        <li class="col">
          <router-link
          class="link-light text-decoration-none moreMenu__link--hover" :to="{ name: 'home' }">
            關於我們
          </router-link>
        </li>
        <li class="col">
          <router-link
          class="link-light text-decoration-none moreMenu__link--hover" :to="{ name: 'home' }">
            利用規範
          </router-link>
        </li>
        <li class="col">
          <router-link
          class="link-light text-decoration-none moreMenu__link--hover" :to="{ name: 'contact' }">
            聯絡我們
          </router-link>
        </li>
        <li class="col">
          <router-link
          class="link-light text-decoration-none moreMenu__link--hover" :to="{ name: 'login' }">
            後台登入
          </router-link>
        </li>
      </ul>
      <div class="text-white">©僅個人練習使用，不做任何商業用途</div>
    </div>
  </footer>
</template>
