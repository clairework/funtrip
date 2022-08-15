<template>
  <LoadingView class="loading" :active="isLoading">
    <div class="spinner-border text-primary m-5" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
  </LoadingView>
  <div class="bg-light pb-10 product">
      <div class="product-banner"></div>
      <div class="container mt-md-n15 mt-n15">
      <div class="row justify-content-center">
        <!-- 路徑 -->
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb ">
          <ol class="breadcrumb py-3 py-md-6 m-0">
            <li class="breadcrumb-item"><router-link class="text-dark fs-6 fs-md-6" to="/">首頁</router-link></li>
            <li class="breadcrumb-item ps-1"><a href="#" class="text-dark fs-6 fs-md-6" to="/list" @click.prevent="transferCate">行程列表</a></li>
            <li class="breadcrumb-item ps-1 text-dark active" aria-current="page"><span class="fs-6 fw-bold fs-md-6">{{ product.title }}</span></li>
          </ol>
        </nav>
        <!-- 第一列 資料 align-items-center -->
        <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 justify-content-md-center justify-content-start border-2 shadow rounded-lg-4 bg-white py-3 pt-5 ps-3">
          <!--圖片 -->
          <div class="mb-3 px-lg-4">
            <img class="w-100" style="height:450px; width:450px" :src="product.imageUrl" :alt="product.title">
          </div>
          <!--基本資料 -->
          <div class="mb-3 mb-md-0">
            <div class="mt-0">
              <div class="d-flex justify-content-between w-100">
                <p class="bg-third text-white fs-5 px-4 py-1 d-inline-block mb-2">{{ product.category }}</p>
                <span class="px-1" style="cursor: pointer;">
                  <font-awesome-icon
                    :icon="['fa', 'heart']"
                    class="fs-3 text-danger"
                    data-bs-toggle="tooltip"
                    data-bs-placement="buttom"
                    title="取消收藏"
                    v-if="favoriteId.includes(product.id)"
                    @click.prevent="toggleFavorite(product)"
                  />
                  <font-awesome-icon
                    :icon="['far', 'heart']"
                    class="fs-3 text-danger"
                    data-bs-toggle="tooltip"
                    data-bs-placement="buttom"
                    title="加入收藏"
                    v-else
                    @click.prevent="toggleFavorite(product)"
                  />
                </span>
              </div>
              <h2 class="fs-2 fw-bold mb-3">{{ product.title }}</h2>
            </div>
            <div class="mb-3">
              <p v-html="product.content"></p>
            </div>
            <div class="mb-4">
              <ul class="list-unstyled">
              <li>
                  <span class="icon">
                    <i class="fas fa-plane-departure" />
                  </span>
                  出發地點 : <Skeletor v-if="isLoading" width="25%"/> {{ product.start_city }}
              </li>
              <li>
                  <span class="icon">
                    <i class="fas fa-ticket" />
                  </span>
                  包含門票
              </li>
              <li>
                  <span class="icon">
                    <i class="fas fa-bus" />
                  </span>
                  團體旅行
              </li>
              <li>
                  <span class="icon">
                    <i class="fas fa-users" />
                  </span>
                  <Skeletor v-if="isLoading" width="25%"/> {{ product.team_qty }} 人成行
              </li>
              </ul>
            </div>
            <div class="d-flex justify-content-between mb-2">
            <span class="text-decoration-line-through text-gray"
              >原價NT$ {{ product.origin_price }}/人</span
            >
            <span class="fs-5 fw-bolder">現在只要NT$ {{ product.price }}/人</span>
          </div>
          <div class="d-flex align-items-center">
            <div
              class="d-flex align-items-center flex-fill me-1"
              :style="{ cursor: quantity === 1 ? 'not-allowed' : 'pointer' }"
            >
              <button
                type="button"
                class="btn btn-primaryLight rounded-0 box-shadow-none"
                :disabled="quantity === 1"
                @click="quantity--"
              >
                -
              </button>
              <label for="qty" class="flex-fill">
                <input
                  type="number"
                  id="qty"
                  class="form-control text-center rounded-0"
                  min="1"
                  max="99"
                  v-model.number="quantity"
                />
              </label>
              <button type="button" class="btn btn-primaryLight rounded-0 box-shadow-none" @click="quantity++">+</button>
            </div>
            <button type="button" class="btn btn-primaryLight flex-fill ms-1 rounded-0" @click="addToCart(product,quantity)">
              <font-awesome-icon :icon="['fas', 'cart-plus']" class="px-1" />
              加入購物車
            </button>
          </div>
          </div>
        </div>
      </div>
      <div class="mb-5 mt-5 text-center">
        <span class="icon icon-intro">
          <i class="fas fa-bookmark" />
        </span>
        <h2 class="category fs-3 d-inline-block text-primaryDark fw-bold mb-4">行程介紹</h2>
        <div class="text-start">
        <p v-html="product.description"></p>
        </div>
      </div>
  </div>
  <section>
    <div class="container py-5">
      <h2 class="text-center fw-bolder mb-4">更多行程選擇</h2>
      <div class="px-0" data-aos="fade" data-aos-duration="1000">
        <ProdSwiper />
      </div>
    </div>
  </section>
  </div>
</template>

<script>

import favoriteMixin from '@/mixins/LocalFavorite'
import ProdSwiper from '@/components/front/ProdSwiper.vue'
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'
export default {
  mixins: [favoriteMixin],
  components: {
    ProdSwiper
  },
  data () {
    return {
      product: [],
      isLoading: false,
      quantity: 1
    }
  },
  watch: {
    product: {
    },
    quantity () {
      if (this.quantity <= 0) {
        this.quantity = 1
      }
    },
    $route () {
      if (this.$route.params.id !== undefined) {
        this.getProduct()
      }
    }
  },
  computed: {
    ...mapState(cartStore, ['cartData']),
    ...mapState(statusStore, ['isLoadingItem'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    getProduct () {
      const id = this.$route.params.id
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
          this.isLoading = false
          // 最近瀏覽紀錄
          this.resentlyViewed(this.product)
        }).catch(() => {
          this.isLoading = false
        })
    },
    transferCate () {
      this.$router.push('/list')
      // 利用localStorage存取資料
      localStorage.setItem('category', this.product.category)
      localStorage.setItem('isActive', this.product.category)
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
