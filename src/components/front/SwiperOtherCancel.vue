<template>
  <div class="container mb-9 bg-light" style="height:500px">
    <!-- <h2 class="category fs-4 fs-md-3 d-inline-block text-dark p-2 fw-bold mb-7"
    :class="{'bg-light': titlebgColor }"
    v-if="showTitle" style="background-color:white"
    > {{ category }}</h2> -->
    <swiper
    :slidesPerView="1"
    :spaceBetween="20"
    :autoplay="{
      delay: 2000
    }"
    :navigation="false"
    :breakpoints="{
      '768': {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }"
    :modules="modules"
    class="rounded-4 h-100 p-5 section_products ">
      <swiper-slide class="swiperSlide d-flex flex-column rounded-4 border-0" v-for="item in products" :key="item.id"
      :class="{'d-none': id === item.id }">
        <div class="card h-100 position-relative w-100 shadow-sm">
          <!--照片-->
          <div class="img-wrap" >
            <router-link :to="`/product/${item.id}`">
            <div class="mb-2 d-block text-center overflow-hidden w-100" >
              <img :src="item.imageUrl" :alt="item.title" class="card-img-top w-100" style= "height:200px">
            </div>
            </router-link>
          </div>
          <!--content-->
          <div class="card-body w-100 bg-white">
            <div class="card-text">
              <h5 class="card-title">
                {{ item.title }}
              </h5>
              <p class="card-content" v-html="item.content"></p>
            </div>
            <p class="text-black fs-6">優惠價 <span class="text-danger">{{ item.price }}</span> 元/人</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import swiperMixin from '@/mixins/swiperMixin'
import collectionMixin from '@/mixins/LocalFavorite'

import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'

export default {
  // category、titlebgColor是在外層元件上自訂的屬性，用來篩選每個元件內的products資料
  props: {
    category: {
      type: String
    },
    id: {
      type: String
    },
    titlebgColor: {
      type: Boolean
    },
    showTitle: {
      type: Boolean
    }
  },
  mixins: [swiperMixin, collectionMixin],
  data () {
    return {
      pageId: this.$route.params.id,
      products: []
    }
  },
  watch: {
    // 監聽產品內頁的category變化
    category () {
      this.getProducts(this.category)
    },
    // 監聽動態路由變化
    $route (to) {
      this.pageId = to.params.id
      this.$emit('change-page')
      this.getProducts(this.category)
    }
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(statusStore, ['pushMsg']),
    getProducts (category) {
      let url = ''
      if (category === '最近瀏覽') {
        // 讓最新預覽的商品排在最前面
        this.products = this.resentlyViewdProducts.reverse()
        return
      } else if (category === '最新上架') {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      } else if (category) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category}`
      }
      // console.log(url)
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.products
        }).catch(() => {
          this.pushMsg(false, '載入', '請重新整理')
        })
    }
  },
  computed: {
    ...mapState(cartStore, ['cartData']),
    ...mapState(statusStore, ['isLoadingItem', 'isLoading'])
  },
  mounted () {
    this.getProducts(this.category)
  }
}
</script>
