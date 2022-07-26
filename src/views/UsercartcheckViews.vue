<template>
  <main class="my-4">
    <hr>
    <div class="container">
      <nav style="--bs-breadcrumb-divider: '>';" aria-label="索引列">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="./index.html" class="link-dark text-decoration-none">首頁</a>
          </li>
          <li class="breadcrumb-item">
            <a href="./cart.html" class="link-dark text-decoration-none">購物車確認</a>
          </li>
          <li class="breadcrumb-item">
            <a href="./cartForm.html" class="link-dark text-decoration-none">填寫資料</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">資料確認</li>
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
          <li class="col position-relative text-white progressMenu__itme--active">
            <p class="m-0 py-2">資料確認</p>
          </li>
          <li class="col position-relative">
            <p class="m-0 py-2 fs-6">購物完成</p>
          </li>
        </ul>
      </div>
      <form class="row mx-auto cart">
        <div class="mb-3">
          <div class="input-group">
            <label for="inputUserName" class="input-group-text">姓名</label>
            <input type="text" id="inputUserName" class="form-control" readonly disabled>
          </div>
        </div>
        <div class="mb-3">
          <div class="input-group">
            <label for="inputUserPhone" class="input-group-text">手機號碼</label>
            <input type="text" id="inputUserPhone" class="form-control" readonly disabled>
          </div>
        </div>
        <div class="mb-3">
          <div class="input-group">
            <label for="inputUserEmail" class="input-group-text">電子郵件</label>
            <input type="text" id="inputUserEmail" class="form-control" readonly disabled>
          </div>
        </div>
        <div class="col-6">
          <div class="input-group">
            <label for="inputUserCitys" class="input-group-text">縣市</label>
            <select id="inputUserCitys" class="form-select" readonly disabled>
              <option value="" disabled>請選擇縣市</option>
            </select>
          </div>
        </div>
        <div class="col-6 mb-3">
          <div class="input-group">
            <label for="inputUserDistrict" class="input-group-text">區域</label>
            <select id="inputUserDistrict" class="form-select" readonly disabled>
              <option value="" disabled>請選擇區域</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <div class="input-group">
            <label for="inputUserPosition" class="input-group-text">地址</label>
            <input type="text" id="inputUserPosition" class="form-control" readonly disabled>
          </div>
        </div>
        <div class="mb-3">
          <label for="inputMessages" class="form-label">留言</label>
          <textarea type="text"
          id="inputMessages" class="form-control" readonly disabled></textarea>
        </div>
      </form>
      <div class="mb-3 text-center">
        <a href="./cartDone.html" class="btn btn-secondary">完成購物並付款</a>
      </div>
    </div>
  </main>
</template>
