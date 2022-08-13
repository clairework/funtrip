<template>
  <footer class="text-white bg-primaryOne">
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-3 pt-3">
        <div class="col">
          <div class="text-left py-2">
             <router-link to="/">
              <img
                class="logo w-40"
                src="@/assets/images/logo01.png"
              >
            </router-link>
          </div>
        </div>
        <div class="col">
          <div class="text-center pt-4 pb-5">
            <div class="my-1">
              <router-link  class="me-4 h4" to="/login">
                <i class="fas fa-user-cog text-dark "></i>
                <span class="fs-5 ms-3">管理員登入</span>
              </router-link>
            </div>
            <p class="">
              © 2022 FunTrip All Rights Reserved.
            </p>
            <span class="text-primaryDark">
              本網站僅供個人學習使用，無商業行為
            </span>
          </div>
        </div>
        <div class="col mb-3 mb-md-0">
          <h3 class="text-center fw-bolder py-2">聯絡我們</h3>
          <div class="d-flex justify-content-center text-dark">
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
    </div>
  </footer>
</template>
