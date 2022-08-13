<template>
  <div class="sticky-top" id="top">
    <!-- nav -->
    <nav class="navbar navbar-expand-lg navbar-white bg-white-70 box-shadow">
      <div class="container">
        <!-- logo -->
        <router-link class="navbar-brand" to="/">
          <h1 class="logo">
            <img src="../../assets/images/logo01.png" alt="放假趣">
          </h1>
        </router-link>
        <!-- cart -->
        <div class="cart dropdown ms-auto cursor-pointer order-lg-3 fs-6">
          <div class="text-primaryDark" id="cartDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <div class="d-flex">
              <div class="position-relative me-2 me-md-3" :class="{'bounced':isBounced}">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                v-if="cartData.carts.length != 0">{{ cartData.carts.length }}</span>
              </div>
              <span class="d-none d-md-block">購物車</span>
            </div>
          </div>
          <!-- cart -->
          <div class="dropdown-menu dropdown-menu-end vw-87.5 vw-md-27.5 rounded-4">
            <CartList @get-cart-list="getCartList"></CartList>
          </div>
        </div>
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
              <router-link class="nav-link" to="/">
              <i class="fa-solid fa-house-chimney me-2"></i>首頁
              </router-link>
            </li>
            <li class="nav-item me-md-3 py-1 fs-6" @click="navCollapseBack">
              <router-link class="nav-link" to="/list">
              <i class="fa-solid fa-clipboard me-2"></i>行程列表
              </router-link>
            </li>
            <li class="nav-item me-md-3 py-1 fs-6" @click="navCollapseBack">
              <router-link class="nav-link" to="/favorite">
              <i class="fa-solid fa-heart me-2"></i>我的收藏
              </router-link>
            </li>
            <li class="nav-item me-md-3 py-1 fs-6" @click="navCollapseBack">
              <router-link class="nav-link" to="/orderSearch">
              <i class="fa-solid fa-magnifying-glass me-2"></i>查詢訂單
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import CartList from '@/components/front/CartList.vue'

// 匯入 mapState、 mapActions 方法
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'
import goAnchor from '@/stores/goAnchor'
import LocalFavorite from '@/mixins/LocalFavorite'

export default {
  data () {
    return {
      navIconChange: false
    }
  },
  components: {
    CartList
  },
  mixins: [LocalFavorite],
  computed: {
    ...mapState(cartStore, ['cartData']),
    ...mapState(statusStore, ['isBounced']),
    ...mapState(goAnchor, ['anchorActive'])
  },
  methods: {
    ...mapActions(cartStore, ['getCartList']),
    ...mapActions(goAnchor, ['clickAnchor']),
    // 判斷當螢幕為手機版時，點擊後選單自動收合
    navCollapseBack () {
      if (window.matchMedia('(max-width: 767px)').matches) {
        const navbarToggle = document.querySelector('.navbar-toggler')
        navbarToggle.click()
      }
    }
  }
}
</script>
