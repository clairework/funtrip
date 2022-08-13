<template>
  <Loading :active="isLoading" />
  <swiper
    class="px-3 py-2"
    :modules="modules"
    :slides-per-view="1"
    :space-between="20"
    :breakpoints="{
      '576': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '992': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '1200': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="item in products" :key="item.id">
      <router-link :to="`/product/${item.id}`">
        <ProdCard :product="item" />
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import {
  A11y, Autoplay
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import ProdCard from '@/components/front/ProdCard.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProdCard
  },
  data () {
    return {
      isLoading: false,
      products: [],
      modules: [A11y, Autoplay]
    }
  },
  inject: ['mitt'],
  methods: {
    getProducts () {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          this.isLoading = false
          const { products } = res.data
          this.products = products
          this.getRandom()
        })
    },
    // 亂數取10筆資料渲染
    getRandom () {
      const newArray = []
      for (let index = 0; index < 10; index += 1) {
        const n = Math.floor(Math.random() * this.products.length)
        newArray.push(this.products[n])
        this.products.splice(n, 1)
      }
      this.products = newArray
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style lang="scss">
  @import 'swiper/scss';
  @import 'swiper/scss/navigation';
</style>
