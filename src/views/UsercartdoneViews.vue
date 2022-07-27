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
          <li class="breadcrumb-item">
            資料確認
          </li>
          <li class="breadcrumb-item active" aria-current="page">購物完成</li>
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
          <li class="col position-relative">
            <p class="m-0 py-2">資料確認</p>
          </li>
          <li class="col position-relative text-white progressMenu__itme--active">
            <p class="m-0 py-2 fs-6">購物完成</p>
          </li>
        </ul>
      </div>
      <div class="card mb-3 text-center">
        <div class="card-body">
          <p class="card-text fs-1"><strong>謝謝您的光臨</strong></p>
          <p class="card-text fs-1"><strong>您已購買成功，可以繼續購物！</strong></p>
          <router-link class="btn btn-secondary" :to="{ name: 'home' }">回首頁</router-link>
        </div>
      </div>
    </div>
  </main>
</template>
