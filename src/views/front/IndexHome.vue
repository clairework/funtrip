<template>
  <LoadingView class="loading" :active="isLoading">
      <div class="spinner-border text-primary m-5" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>
  </LoadingView>
  <!-- 表頭 -->
  <div class="bg-light">
  <section class="bg-light section-banner">
    <div class="index-banner overflow-hidden">
      <div class="txt-wrap">
        <h2 class="text-wrap text-white"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="50">
          <span class="text-third">旅行</span>挖掘世界的美麗寶藏，
          讓生命更加豐富而美好
        </h2>
        <div
          class="d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500">
          <button
            type="button"
            class="btn link text-white btn-outline-primaryLight rounded-0 me-2"
            data-toggle="modal"
            @click="copyCouponCode('test')"
          >
          領取優惠
          </button>
          <router-link
            class="link text-third bg-primaryDark rounded-2"
            to="/list">
            開始選擇行程
          </router-link>
        </div>
      </div>
    </div>
    <div class="bg-white shawdow">
    <div class="container bg-white">
            <div class="row text-center pb-1">
                <div class="col-md-4 indexbox d-flex">
                    <div class="d-flex align-items-center">
                        <img class="imgbox rounded-circle" src="@/assets/images/cate_img01.png" alt="">
                    </div>
                    <div class="text-start ms-3">
                        <h4 class="h5 indexbox-text">價格實惠</h4>
                        <p>平實的價格，豐富的行程</p>
                    </div>
                </div>
                <div class="col-md-4 indexbox d-flex">
                    <div class="d-flex align-items-center">
                        <img class="imgbox rounded-circle" src="@/assets/images/cate_img02.png" alt="">
                    </div>
                    <div class="text-start ms-3">
                        <h4 class="h5 indexbox-text">線上預訂</h4>
                        <p>網路訂購，省時省力</p>
                    </div>
                </div>
                <div class="col-md-4 indexbox d-flex">
                    <div class="d-flex align-items-center">
                        <img class="imgbox rounded-circle" src="@/assets/images/cate_img03.png" alt="">
                    </div>
                    <div class="text-start ms-3">
                        <h4 class="h5 indexbox-text">客戶服務</h4>
                        <p>專業團隊，服務周到</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </section>

  <section class="bg-light pt-5 pb-3 section-category">
    <div class="container">
      <div class="text-center mb-5">
      <h3 class="h1 mb-3">想要去哪裡呢？</h3>
      </div>
      <div class="row row-cols-1 row-cols-md-3 justify-content-center ">
      <div type="button" class="card card-hover bg-primary col w-80 w-md-25 me-md-5 mb-5 index-card card-bk1 text-center border-0" @click.prevent="toCategory('亞洲')"
      data-aos="zoom-in" data-aos-duration="1000">
        <h2 class="text-white">亞洲</h2>
      </div>
      <div type="button" class="card card-hover bg-primary col w-80 w-md-25 me-md-5 mb-5 index-card card-bk2 text-center border-0" @click.prevent="toCategory('歐洲')"
      data-aos="zoom-in" data-aos-duration="1000">
        <h2 class="text-white">歐洲</h2>
      </div>
      <div type="button" class="card card-hover bg-primary col w-80 w-md-25 me-md-5 mb-5 index-card card-bk3 text-center border-0" @click.prevent="toCategory('美洲')"
      data-aos="zoom-in" data-aos-duration="1000">
        <h2 class="text-white">美洲</h2>
      </div>
      <div type="button" class="card card-hover bg-primary col w-80 w-md-25 me-md-5 mb-5 index-card card-bk4 text-center border-0" @click.prevent="toCategory('非洲')"
      data-aos="zoom-in" data-aos-duration="1000">
        <h2 class="text-white">非洲</h2>
      </div>
      <div type="button" class="card card-hover bg-primary col w-80 w-md-25 me-md-5 mb-5 index-card card-bk5 text-center border-0" @click.prevent="toCategory('澳洲')"
      data-aos="zoom-in" data-aos-duration="1000">
        <h2 class="text-white">澳洲</h2>
      </div>
      <div type="button" class="card card-hover bg-primary col w-80 w-md-25 me-md-5 mb-5 index-card card-bk6 text-center border-0" @click.prevent="toCategory('')"
      data-aos="zoom-in" data-aos-duration="1000">
        <h2 class="text-white">全部</h2>
      </div>
    </div>
    </div>
  </section>

  <section class="section-hot bg-white py-5">
      <div class="container">
        <div class="row">
          <h2 class="mx-auto title-dec">
            <span class="circle" /><span class="txt">主題旅遊</span>
          </h2>
          <div class="col-12">
            <div class="row mt-5 align-items-center">
              <div class="col-lg-6">
                <div class="row justify-content-lg-between row-cols-1 row-cols-lg-2">
                  <div class="col-lg-3">
                    <h3 class="text-primary">
                      韓國
                    </h3>
                  </div>
                  <div class="col-lg-9">
                    <div
                      class="txt"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    >
                      <ul>
                        <li class="mb-2">
                          韓國古蹟—景福宮是朝鮮最具代表性的王宮，迄今已有624年的歷史，而光化門是景福宮的南門。許多韓劇都在這裡拍攝，喜愛韓劇的朋友一定要來參觀。
                        </li>
                        <li class="mb-2">
                          東大門商圈，是韓國另個景點重頭戲，是亞洲最大服裝市場，有各種美食及批發服飾、批發飾品。
                        </li>
                        <li class="mb-2">
                          南大門市場，是韓國最大綜合市場：童裝販售，批發市場及傳統美食；特色街，文具街；是逛街愛好者的天堂。
                        </li>
                        <li class="mb-2">
                          愛寶樂園，是韓國最大主題樂園，擁有世界最高、韓國首創木製雲霄飛車，園區內「韓國最大野生動物園」，可以近距離接觸長頸鹿和動物們。
                        </li>
                      </ul>
                      <div class="d-flex justify-content-end my-3">
                        <router-link
                          class="link bg-secondary text-white"
                          to="/product/-N3IcpLJohiszBeXAXNK"
                        >
                          了解更多
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <img
                  class="img-fluid rounded-3"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  src="../../assets/images/home01.jpg"
                  alt=""
                >
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-lg-6 order-lg-2">
                <div class="row justify-content-lg-between">
                  <div class="col-lg-3">
                    <h3 class="text-primary h3">
                      日本
                    </h3>
                  </div>
                  <div class="col-lg-9">
                    <div
                      class="txt"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    >
                      <ul>
                        <li class="mb-2">
                          北海道：十勝牧羊犬秀、阿寒愛奴火祭、旭山動物園、螃蟹溫泉，喜愛泡温泉的朋友可以來一趟幸福的温泉之旅。
                        </li>
                        <li class="mb-2">
                          九洲：賞楓秘境高千穗峽，其中有真名井瀑布，有美麗的神話傳說，等你一起來探索。
                        </li>
                        <li class="mb-2">
                          東京：日光東照宮、中禪寺湖、華嚴瀑布是世界遺產，日立常陸海濱公園，有隨處可見大規模的花園，還有東京迪士尼樂園，都市與美景直接玩透透。
                        </li>
                        <li class="mb-2">
                          沖繩：北部有美麗海水族館、南部有國際通、玉泉洞，中部的美國村。
                        </li>
                      </ul>
                      <div class="d-flex justify-content-end my-3">
                        <router-link
                          class="link bg-secondary text-white"
                          to="/product/-N3S4DhyCFccUGCnj9gt"
                        >
                          了解更多
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 order-lg-1">
                <img
                  class="img-fluid rounded-3"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  src="../../assets/images/home02.jpg"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>

  <section class="section-person bg-person bg-opacity-25 bg-light ">
      <div class="container pt-5 pb-3">
        <h2 class="text-center">跟上旅遊達人全世界走透透</h2>
        <div class="row row-cols-1 row-cols-md-3 my-5">
          <div class="col-md-4 d-flex align-items-center flex-column" data-aos="fade-up" data-aos-duration="2000">
            <div class="card border-0 bg-light w-90 align-items-center ">
              <div class="card-header bg-light border-0">
                <div class="box box-1 mb-4 mt-4"></div>
                <p class="fs-5 fw-bold">部落客Jimmy分享</p>
              </div>
              <div class="card-body border-top">
                <p>
                  紀錄日本北海道,九洲楓葉行程美景
                  <br />堅持用相機一點一滴記錄世界的美好
                  <br />你與自由的距離只差一步
                </p>
              </div>
              </div>
          </div>
          <div class="col-md-4 d-flex align-items-center flex-column" data-aos="fade-up" data-aos-duration="2000">
            <div class="card border-0 bg-light w-90 align-items-center ">
            <div class="card-header bg-light border-0">
              <div class="box box-2 mb-4 mt-4"></div>
              <p class="fs-5 fw-bold">旅遊作家Jenny分享</p>
            </div>
            <div class="card-body border-top">
              <p>
                韓國的流行文化,親臨浪漫韓劇拍攝地點
                <br />古蹟巡禮與現代流行文化的並存
                <br />走過難忘的青春之旅
              </p>
            </div>
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-center flex-column" data-aos="fade-up" data-aos-duration="2000">
            <div class="card border-0 bg-light w-90 align-items-center ">
            <div class="card-header bg-light border-0">
              <div class="box box-3 mb-4 mt-4"></div>
              <p class="fs-5 fw-bold">旅遊達人Susan分享</p>
            </div>
            <div class="card-body border-top">
              <p>
                喜歡探訪遠古文化,用旅行來洗滌心靈
                <br />埃及金字塔,人面獅身
                <br />絕佳的不凡體驗等你來發掘
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import swiperMixin from '@/mixins/swiperMixin'
import { mapState, mapActions } from 'pinia'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore'
import goAnchor from '@/stores/goAnchor'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

export default {
  data () {
    return {
      categories: [
        {
          category: '亞洲',
          name: '亞洲'
        },
        {
          category: '歐洲',
          name: '歐洲'
        },
        {
          category: '美洲',
          name: '美洲'
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
          category: '',
          name: '全部'
        }
      ]
    }
  },
  mixins: [swiperMixin],
  computed: {
    ...mapState(statusStore, ['isLoading']),
    ...mapState(goAnchor, ['anchorActive'])
  },
  methods: {
    ...mapActions(statusStore, ['loadingEffect']),
    ...mapActions(cartStore, ['copyCouponCode']),
    ...mapActions(goAnchor, ['goAnchor']),
    toCategory (el) {
      this.$router.push({
        name: 'list',
        params: { pathCategory: el }
      })
    }
  },
  mounted () {
    this.loadingEffect()
  }
}
</script>
