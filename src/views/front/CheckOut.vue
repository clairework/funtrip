<template>
  <LoadingView class="loading" :active="isLoading">
    <div class="spinner-border text-primary m-5" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
  </LoadingView>
  <div class="bg-light">
    <OrderSteps :orderId="order" :step="step"></OrderSteps>
    <div class="container pt-14 pb-5 pb-md-9">
      <div class="row justify-content-center">
        <div class="col-lg-8 mb-6 mb-md-0">
          <div class="position-sticky top-20">
            <!-- 訂單編號 -->
             <div class="mb-8">
                <div class="d-flex mb-4">
                  <p class="text-primaryDark fw-bold fs-4 fs-md-3 p-2">訂單編號</p>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
                  <p ref="orderId" class="fs-5 fw-bold text-primary mb-2 mb-md-0">{{ order.id }}</p>
                <div class="btn btn btn-primaryDark w-100 w-md-auto text-white fs-small" @click="copyOrderId(order.id)"> 複製訂單編號</div>
              </div>
            </div>
            <!-- 訂單內容 -->
            <div class="d-flex mb-4">
              <p class="text-primaryDark fw-bold fs-4 fs-md-3 p-2">訂單內容</p>
            </div>
            <!--左邊: 購物車品項 -->
              <table class="table align-middle">
              <thead>
                <tr>
                  <th class="d-none d-md-table-cell text-start" width="40%">名稱</th>
                  <th class="d-none d-md-table-cell text-start" width="30%">單價</th>
                  <th class="d-none d-md-table-cell text-center" width="30%">數量</th>
                </tr>
              </thead>
              <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td>
                <div class="d-flex align-items-center p-3">
                  <img class="imgbox_small1 me-4" :src="item.product.imageUrl" :alt="item.product.title">
                  <div class="cart-body text-start ">
                    <p class="fw-bold">{{ item.product.title }}</p>
                    <p class="fw-bold">{{ item.product.author }}</p>
                    <p class="text-danger fw-bold" v-if="item.coupon">已套用優惠券</p>
                  </div>
                </div>
                </td>
                <td width="20%">
                  <p class="fw-bold text-primaryDark">NT$ {{ item.product.price }}</p>
                </td>
                <td class="text-center" width="20%">
                <p>x {{ item.qty }}</p>
                </td>
              </tr>
              </tbody>
            </table>
             <!-- 小計 -->
            <div>
              <p class="text-primaryDark fw-bold text-end mb-3 fs-md-4">
                應付金額 : NT${{ Math.round(order.total) }}
              </p>
            </div>
          </div>
        </div>
        <!-- 收件人資料 -->
        <div class="col-lg-4">
            <form class="bg-primaryLight p-4 p-md-8 shadow">
              <h2 class="category fs-4 fs-md-3 d-inline-block text-primaryDark p-2 fw-bold mb-6">收件人資料</h2>
                  <div class="mb-3">
                    <label for="email" class="form-label fw-bold text-white">Email</label>
                    <input id="email" name="email" type="email" class="form-control border-0" :value="order.user.email" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="name" class="form-label fw-bold text-white">收件人姓名</label>
                    <input id="name" name="姓名" type="text" class="form-control border-0" :value="order.user.name" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="tel" class="form-label fw-bold text-white">收件人電話</label>
                    <input id="tel" name="電話" type="text" class="form-control border-0" :value="order.user.tel" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="address" class="form-label fw-bold text-white">收件人地址</label>
                    <input id="address" name="地址" type="text" class="form-control border-0" :value="order.user.address" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label fw-bold text-white">備註</label>
                    <textarea id="message" class="form-control min-h-25 border-0" :value="order.message" disabled></textarea>
                  </div>
                  <div class="text-end">
                    <button type="submit" class="btn btn-primaryDark text-white w-100"
                    @click.prevent="pay">確認付款</button>
                  </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import statusStore from '@/stores/statusStore'
import OrderSteps from '@/components/front/OrderSteps'

export default {
  data () {
    return {
      step: 2,
      order: {
        user: {},
        products: {}
      },
      orderProducts: [],
      orderId: this.$route.params.id,
      isLoading: false
    }
  },
  components: {
    OrderSteps
  },
  methods: {
    ...mapActions(statusStore, ['pushMsg']),
    getOrders (id) {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`)
        .then((res) => {
          this.order = res.data.order
          // 物件轉成陣列
          this.orderProducts = Object.keys(this.order.products).map((i) => this.order.products[i])
          this.isLoading = false
        }).catch(() => {
          this.isLoading = false
        })
    },
    pay () {
      this.isLoading = true
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`)
        .then((res) => {
          this.isLoading = false
          this.pushMsg(res, '更新', '已付款成功')
          // 頁面跳轉
          this.$router.push('/payment')
        })
    },
    copyOrderId (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          this.pushMsg(true, '複製', '您已成功複製優惠碼!')
        })
    }
  },
  mounted () {
    this.getOrders(this.orderId)
  }
}
</script>

<style lang="scss" scoped>
.min-h-25{
  min-height:100px;
}
</style>
