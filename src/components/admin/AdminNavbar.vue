<template>
  <div class="sticky-top" id="top">
    <!-- nav -->
    <nav class="navbar navbar-expand-lg bg-white-70 box-shadow bg-primaryThree">
      <div class="container-fluid">
        <!-- logo -->
        <router-link class="navbar-brand" to="/">
          <h1 class="logo">
            <img src="../../assets/images/logo01.png" alt="放假趣">
          </h1>
        </router-link>
        <!-- 漢堡選單 -->
        <button class="navbar-toggler box-shadow-none px-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"
        @click="navIconChange = !navIconChange">
          <span v-if="navIconChange">
            <i class="fa-solid fa-x text-secondaryDark"></i>
          </span>
          <span v-else>
            <i class="fa-solid fa-bars text-secondaryDark"></i>
          </span>
        </button>
        <!-- 摺疊 -->
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item me-md-3 py-1 fs-6" @click="navCollapseBack">
              <router-link class="nav-link w-100 fs-5" to="/admin/products">
              商品管理</router-link>
            </li>
            <li class="nav-item me-md-3 py-1 fs-6" @click="navCollapseBack">
              <router-link class="nav-link w-100 fs-5" to="/admin/orders">
              訂單管理</router-link>
            </li>
            <li class="nav-item me-md-3 py-1 fs-5" @click="navCollapseBack">
              <router-link class="nav-link w-100 fs-5" to="/admin/coupons">
              優惠券管理</router-link>
            </li>
            <li class="nav-item me-md-3 py-1 fs-5" @click="signOut">
              <div class="nav-link text-dark w-100 fs-5" style="cursor: pointer">
              <i class="fa-solid fa-arrow-right-from-bracket me-2"></i>登出
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signOut () {
      document.cookie = "zytoken=''; expires=''"
      this.$router.push('/login')
    }
  }
}
</script>
