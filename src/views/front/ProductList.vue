<template>
  <LoadingView class="loading" :active="isLoading">
    <div class="spinner-border text-primary m-5" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
  </LoadingView>
  <ListBanner :title="title" />
  <!-- 洲別選單 -->
  <section class="list-base section_category bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 mb-3">
          <div class="position-sticky">
            <div class="accordion" id="accordion" >
              <div class="accordion-item border-0">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button class="accordion-button text-white bg-primaryDark fs-4 fs-md-3 fw-bold px-3 py-4 px-md-4 py-md-4 "
                  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne">洲別</button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body p-0">
                    <div class="list-group text-center">
                      <button
                        type="button"
                        class="list-group-item list-group-item-action fw-bolder py-3 fs-5 rounded-0"
                        v-for="item in categories" :key="item.category"
                        @click="filterCategory(item.category)"
                        :class="isActive === item.category ? 'active' : ''"
                      >
                        {{ item.name  }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- product清單 -->
          <div class="col-lg-10 section_products bg-light">
            <div class="row row-cols-1 row-cols-md-2 row-cols-xxl-3">
              <div v-for="item of products" :key="item.id" class="col mb-4">
                <div class="card h-100 shadow-sm" >
                    <span class="badge badge-pill badge-secondaryLight"> {{ item.category }}</span>
                    <div class="img-wrap position-relative ps-0" @click.prevent="getProducts(item.category)">
                      <router-link :to="`/product/${item.id}`">
                      <img :src="item.imageUrl" class="card-img-top w-100">
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-text">
                        <div class="d-flex justify-content-betwen">
                          <h5 class="card-title">
                            {{ item.title }}
                          </h5>
                          <span class="px-1 position-absolute top-0 end-0 mt-2 me-2" style="cursor: pointer;">
                            <font-awesome-icon :icon="['fa', 'heart']" class="fs-4 text-danger"
                              data-bs-toggle="tooltip" data-bs-placement="buttom"
                              title="取消收藏" v-if="favoriteId.includes(item.id)"
                              @click.prevent="toggleFavorite(item)"/>
                            <font-awesome-icon :icon="['far', 'heart']" class="fs-4 text-danger"
                              data-bs-toggle="tooltip" data-bs-placement="buttom"
                              title="加入收藏" v-else
                              @click.prevent="toggleFavorite(item)"/>
                          </span>
                        </div>
                        <p class="card-content" v-html="item.content"></p>
                      </div>
                      <div>
                        <p class="prices d-flex justify-content-between mb-auto ">
                          <span class="text-decoration-line-through text-gray me-5">NT$ {{ item.origin_price }}/人</span>
                          <span class="fs-5 fw-bolder">NT$ {{ item.price }}/人</span>
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn btn-secondary btn-addTocart"
                      @click.prevent.stop="addToCart(item)"
                    >
                      <span>
                        <i class="fas fa-shopping-cart" />
                      </span>
                      加入購物車
                    </button>
                </div>
              </div>
            </div>
        </div>
     </div>
    </div>
  </section>
  <div class="bg-light" style="height: 40px">
  </div>
</template>

<script>
import favoriteMixin from '@/mixins/LocalFavorite'
import ListBanner from '@/components/front/ListBanner.vue'
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'

export default {
  components: {
    ListBanner
  },
  data () {
    return {
      products: [],
      isActive: '',
      isLoading: '',
      title: '行程列表',
      categories: [
        {
          category: '',
          name: '全部'
        },
        {
          category: '亞洲',
          name: '亞洲'
        },
        {
          category: '歐洲',
          name: '歐洲'
        },
        {
          category: '非洲',
          name: '非洲'
        },
        {
          category: '澳洲',
          name: '澳洲'
        },
        {
          category: '美洲',
          name: '美洲'
        }
      ]
    }
  },
  mixins: [favoriteMixin],
  created () {
    const { pathCategory } = this.$route.params
    if (pathCategory) {
      this.category = this.$route.params.category
      this.isActive = this.category
    }
    this.getProducts(pathCategory)
    // console.log('created:category', this.category)
    // console.log('created:pathCategory', pathCategory)
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(statusStore, ['pushMsg']),
    filterCategory (category) {
      this.category = category
      this.getProducts(category)
    },
    getProducts (category) {
      this.isActive = ''
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      if (category) {
        url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?category=${category}`
        this.isActive = category
      }
      // console.log('Category->', category)
      // console.log('isActive->', this.isActive)
      this.isLoading = true
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
        }).catch(() => {
          this.isLoading = false
        })
    },
    computed: {
      ...mapState(cartStore, ['cartData']),
      ...mapState(statusStore, ['isLoadingItem'])
    },
    mounted () {
      if (this.$route.params.category !== undefined) {
        this.category = this.$route.params.category
        this.isActive = this.category
      }
      this.getProducts()
      // console.log('mounted:', this.category)
    }
  }
}
</script>
