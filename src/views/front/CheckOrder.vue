<template>
  <LoadingView class="loading" :active="isLoading">
    <div class="spinner-border text-primaryDark m-5" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
  </LoadingView>
  <div class="bg-light">
     <OrderSteps :cartData="cartData" :step="step"></OrderSteps>
     <div style="height:50px"></div>
       <div class="container">
         <!--justify-content-center -->
        <div class="row">
           <!--左邊: 確認訂單 -->
            <div class="col-lg-8 pb-4">
              <h2 class="fs-4 fs-md-3 d-inline-block text-primaryDark p-2 fw-bold mb-6">確認訂單</h2>
              <!-- 如果購物車為空 -->
              <div class="w-100 d-flex flex-column align-items-center py-5"
              v-if="cartData.carts.length === 0">
                <i class="fa-solid fa-triangle-exclamation text-primaryDark fa-2x mb-3"></i>
                  <p class="fw-bold mb-4">購物車內沒有商品</p>
              </div>
              <!--左邊: 購物車品項 -->
              <table class="table align-middle">
              <thead>
                <tr>
                  <th width="20%"></th>
                  <th class="d-none d-md-table-cell text-start" width="30%">
                    名稱
                  </th>
                  <th class="d-table-cell d-md-none text-start" width="40%">
                    名稱
                  </th>
                  <th class="d-md-table-cell text-center">
                    單價
                  </th>
                  <th class="d-none d-none d-md-table-cell text-center">
                    數量
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartData.carts" :key="item.id">
                  <td>
                    <router-link class="overflow-hidden me-2" :to="`/product/${item.product.id}`">
                      <img class="imgbox_small1 " :src="item.product.imageUrl" :alt="item.product.title">
                    </router-link>
                  </td>
                  <td>
                    <p class="fw-bold">{{ item.product.title }}</p>
                    <!--數量按鈕1手機版-->
                    <div class="input-group d-lg-none">
                        <p><span class="text-danger fs-small " v-if="item.qty>=item.product.inventory">選取已達上限</span></p>
                        <div class="input-group w-lg-75">
                          <button class="btn btn-outline-primaryDark minus fs-small" type="button"
                          @click="updateCart(item, item.qty--)" :class="{'disabled':item.qty<=1}">
                              <i class="fa-solid fa-minus"></i>
                          </button>
                          <input type="number" class="form-control text-center box-shadow-none fs-small" min="1" :max="item.product.inventory"
                          v-model.lazy="item.qty" @change="updateCart(item)" readonly>
                          <button class="btn btn-primaryDark plus fs-small" type="button"
                            @click="updateCart(item,item.qty++)" :class="{'disabled':item.qty>=item.product.inventory}">
                              <i class="fa-solid fa-plus text-white"></i>
                          </button>
                        </div>
                      </div>
                  </td>
                  <td>
                      <p class="text-danger fw-bold fs-small" v-if="item.coupon">已套用優惠券</p>
                      <p class="fw-bold text-primaryDark">NT$ {{ item.product.price }}</p>
                  </td>
                  <!-- 數量按钮2桌面版-->
                  <td class="text-center d-none d-lg-table-cell">
                      <p><span class="text-danger fs-small ms-2" v-if="item.qty>=item.product.inventory">選取已達上限</span></p>
                      <div class="input-group">
                        <div class="input-group ">
                          <button class="btn btn-outline-primaryDark minus fs-small" type="button"
                          @click="updateCart(item, item.qty--)" :class="{'disabled':item.qty<=1}">
                              <i class="fa-solid fa-minus"></i>
                          </button>
                          <input type="number" class="form-control text-center box-shadow-none fs-small" min="1" :max="item.product.inventory"
                          v-model.lazy="item.qty" @change="updateCart(item)" readonly>
                          <button class="btn btn-primaryDark plus fs-small" type="button"
                            @click="updateCart(item,item.qty++)" :class="{'disabled':item.qty>=item.product.inventory}">
                              <i class="fa-solid fa-plus text-white"></i>
                          </button>
                        </div>
                      </div>
                  </td>
                  <td class="delCartItem text-center" @click="delCartItem(item)">
                    <i class="fa-solid fa-trash text-primaryDark cursor-pointer"></i>
                  </td>
                </tr>
              </tbody>
              </table>
                <!-- 左邊: 優惠券6col及小計6com -->
                <div class="row flex-sm-row align-items-center flex-column-reverse">
                  <div class="col-md-6">
                    <div class="p-3" v-show="cartData.carts.length">
                      <div class="input-group mb-3">
                          <input type="text" class="form-control" placeholder="已套用優惠券" v-if="cartData.final_total !== cartData.total" disabled>
                          <input type="text" class="form-control" placeholder="輸入優惠券" v-else v-model="coupon_code" aria-label="coupon" aria-describedby="coupon">
                          <button class="btn btn-primaryLight text-white" type="button" id="coupon"
                          @click="addCoupon" :class="{'disabled':cartData.final_total !== cartData.total}">套用優惠券</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                      <p class="text-end fs-4" :class="{'mb-3':cartData.final_total !== cartData.total}">
                      小計 : <span class="text-primaryDark fw-bold">NT$ {{ cartData.total }}</span>
                      </p>
                      <p class="text-end text-danger mb-3 fw-bold" v-if="cartData.final_total !== cartData.total">折扣 : {{ discount_price }}</p>
                      <p class="text-secondaryDark fw-bold text-end mb-3 fs-md-4"
                        v-if="cartData.final_total !== cartData.total">
                        應付金額 : NT${{ final_total }}
                      </p>
                  </div>
                </div>
            </div>
            <!-- 右邊--訂購人資料 -->
            <div class="col-lg-4">
              <form-view ref="form" class="bg-primaryLight p-4 p-md-8 shadow" v-slot="{ errors }">
                <h2 class="category fs-4 fs-md-3 d-inline-block text-primaryDark p-2 fw-bold mb-6">填寫訂購人資料</h2>
                  <div class="mb-3">
                    <label for="Email" class="form-label fw-bold text-white">Email<span class="text-danger">*</span></label>
                    <field-view id="Email" name="Email" type="Email" class="form-control"
                    :class="{ 'is-invalid': errors['Email'] }" rules="required" placeholder="請輸入 Email"
                          v-model="form.user.email" ></field-view>
                    <error-message name="Email" class="invalid-feedback text-start"></error-message>
                  </div>
                  <div class="mb-3">
                    <label for="name" class="form-label fw-bold text-white">訂購人姓名<span class="text-danger">*</span></label>
                    <field-view id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                            placeholder="請輸入姓名" rules="required" v-model="form.user.name"></field-view>
                    <error-message name="姓名" class="invalid-feedback"></error-message>
                  </div>
                  <div class="mb-3">
                    <label for="tel" class="form-label fw-bold text-white">訂購人電話<span class="text-danger">*</span></label>
                    <field-view id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                            placeholder="請輸入電話" :rules="isPhone" v-model="form.user.tel"></field-view>
                    <error-message name="電話" class="invalid-feedback"></error-message>
                  </div>
                  <div class="mb-3" style="height:100px">
                    <label for="address" class="form-label fw-bold text-white">訂購人地址<span class="text-danger">*</span></label>
                    <field-view id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                    placeholder="請輸入地址" rules="required" v-model="form.user.address"></field-view>
                    <error-message name="地址" class="invalid-feedback"></error-message>
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label fw-bold text-white">備註</label>
                    <textarea id="message" class="form-control min-h-25" v-model="form.message"></textarea>
                  </div>
                  <div class="text-end">
                    <button type="submit" class="btn btn-primaryDark text-white w-100"
                    @click.prevent="onSubmit">送出訂單</button>
                  </div>
              </form-view>
          </div>
        </div>
       </div>
   </div>
   <div class="bg-light" style="height:100px"></div>
</template>

<script>
import OrderSteps from '@/components/front/OrderSteps'
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      step: 1,
      final_total: '',
      discount_price: '',
      form: {
        user: {
          payment: '',
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      coupon_code: '',
      orderId: this.$route.params.id,
      resentlyViewdProducts: JSON.parse(localStorage.getItem('resentlyViewdProducts')) || []
    }
  },
  components: {
    OrderSteps
  },
  watch: {
    cartData: {
      handler () {
        this.final_total = Math.round(this.cartData.final_total)
      },
      deep: true
    },
    final_total: {
      handler () {
        this.discount_price = this.final_total - this.cartData.total
      },
      deep: true
    }
  },
  computed: {
    ...mapState(cartStore, ['cartData']),
    ...mapState(statusStore, ['isLoading'])
  },
  methods: {
    ...mapActions(cartStore, ['getCartList', 'updateCart', 'delCartItem']),
    ...mapActions(statusStore, ['loadingEffect', 'pushMsg']),
    // 手機驗證
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    // 送出訂單
    onSubmit () {
      if (this.cartData.carts.length === 0) {
        this.pushMsg(false, '送出', '購物車還是空的呢!')
      } else {
        this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, { data: this.form })
          .then((res) => {
            this.pushMsg(res, '送出', '已成功送出訂單')
            this.form.message = ''
            this.getCartList()
            // 跳轉換頁
            this.$router.push(`/checkout/${res.data.orderId}`)
          }).catch(() => {
            this.pushMsg(false, '送出', '送出訂單失敗')
          })
      }
    },
    addCoupon () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http.post(url, { data: coupon }).then((response) => {
        this.getCartList()
        // this.isLoading = false
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '已套用優惠券!!!',
          showConfirmButton: false,
          timer: 2000
        })
      })
    },
    // 取得最近瀏覽的資料
    getResentlyViewdProducts () {
      this.resentlyViewdProducts = JSON.parse(localStorage.getItem('resentlyViewdProducts')) || []
    },
    // 清除最近瀏覽
    clearRecentlyViewed () {
      this.loadingEffect()
      localStorage.removeItem('resentlyViewdProducts')
      this.getResentlyViewdProducts()
    }
  },
  mounted () {
    this.final_total = Math.round(this.cartData.final_total)
    this.discount_price = this.final_total - this.cartData.total
  }
}
</script>

<style lang="scss" scoped>
.min-h-25{
  min-height:100px
}
</style>
