<!-- Views: MyFavorite.vue -->
<template>
  <LoadingView class="loading" :active="isLoading">
      <div class="spinner-border text-primary m-5" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>
  </LoadingView>
  <div class="bg-light">
    <div class="favorite-banner">
      <div class="container">
        <div class="title">
          <h2 class="text-white text-center">我的收藏行程</h2>
        </div>
      </div>
    </div>
    <section class="favorite-base section_favorites">
    <div class="container">
      <h3 class="border-bottom pb-3 mb-3 text-end">收藏清單列表</h3>
      <div v-if="favorite.length">
        <ul class="list-group">
          <li v-for="item in favorite" :key="item.id" class="border-0 custom-item favbox list-group-item bg-lightDark shadow-sm align-items-center mb-4">
            <span class="custom-icon">
              <a href="#" class="del-icon"
               @click.prevent="removeFavoriteItem(item)"><i class="fas fa-times fs-4" /></a>
            </span>
            <div class="row ">
              <!--照片-->
              <div class="col-5 col-sm-5 col-md-4 col-lg-3 mt-2">
                <div class="img-wrap pl-3">
                  <img class="rounded-2" :src="item.imageUrl">
                </div>
              </div>
              <div class="col-7 col-sm-7 col-md-8 col-lg-9
                    mt-2 mt-md-0
                    d-flex
                    align-items-center">
                    <div class="row flex-fill align-items-center">
                      <!--名稱-->
                      <div class="col-sm-12 col-md-4 col-lg-5">
                        <p class="text-start mb-0 fw-bold pr-4 fs-5 text-primaryDark">
                        {{ item.title }}
                        </p>
                      </div>
                      <!--價格 -->
                      <div class="col-sm-12 col-md-4 col-lg-5">
                        <p class="prices">
                          <span class="price_origin fs-5"> 價格：{{ item.price }}/人</span>
                        </p>
                      </div>
                      <!--更多-->
                      <div class="col-sm-12 col-md-4 col-lg-2 text-center py-2">
                        <button type="button"
                                class="position-absolute bottom-0 mb-3 mt-2 btn btn-secondary rounded-5" @click.prevent="toProduct(item.id)"
                                style="right: 15px;">
                          了解更多 <span><i class="fas fa-chevron-right" /></span>
                        </button>
                      </div>
                  </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-else>
        <div class="text-center">
          <div class="bg-light py-5 px-2 px-sm-5">
            <h2 class="mb-5 fw-bolder">尚無行程加入收藏</h2>
            <router-link class="btn btn-secondary fs-5 fw-bolder" to="/list">
              把喜歡的行程加入收藏吧 !
            </router-link>
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import favoriteMixin from '@/mixins/LocalFavorite'

import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'

export default {
  mixins: [favoriteMixin],
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
    ...mapState(cartStore, ['cartData']),
    ...mapState(statusStore, ['isLoadingItem', 'isLoadingItem', 'isLoading'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(statusStore, ['loadingEffect', 'loadingItemEffect', 'pushMsg']),
    toProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  mounted () {
    this.loadingEffect()
  }
}
</script>
