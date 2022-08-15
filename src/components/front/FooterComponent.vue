<template>
  <footer class="text-white bg-primaryOne">
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-2 pt-3">
        <div class="col-md-6 col-lg-8 text-lg-start text-center">
          <router-link class="w-2" to="/">
            <h1 class="logo">
              <img src="../../assets/images/logo01.png" alt="放假趣">
            </h1>
          </router-link>
          <div class="py-2 ms-2">
            <div class="pt-4 pb-3">
              <p class="">
                © 2022 FunTrip All Rights Reserved.
              </p>
              <span class="text-primaryDark">
                本網站僅供個人學習使用，無商業行為
              </span>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-3 mb-lg-3 text-lg-left">
          <h3 class="text-center fw-bolder py-2">聯絡我們</h3>
          <div class="d-flex text-dark justify-content-center">
            <div class="d-flex flex-column">
              <span class="">
                <font-awesome-icon :icon="['fas', 'house']" class="px-3" />
                桃園市桃園區中山路
              </span>
              <span class="">
                <font-awesome-icon :icon="['fas', 'envelope']" class="px-3" />
                funtrip123@gmail.com
              </span>
              <span class="">
                <font-awesome-icon :icon="['fas', 'phone']" class="px-3" />
                +886 908112333
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="border-top py-3 ms-2 text-center">
          <router-link  class="me-4 fs-6" to="/login">
            <i class="fas fa-user-cog text-dark fs-6"></i>
            <span class="fs-5 ms-3">管理員登入</span>
          </router-link>
      </div>
    </div>
  </footer>
</template>
