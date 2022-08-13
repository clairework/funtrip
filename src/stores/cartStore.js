// 匯入 defineStore 的方法
import axios from 'axios'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

import debounce from 'lodash/debounce'
import statusStore from './statusStore'
const status = statusStore()
// 這裡帶入兩個參數，一個是store 名稱、另一個是屬性參數
export default defineStore('cartStore', {
  // 對應 data
  state: () => ({
    cartData: {
      carts: [],
      final_total: ''
    },
    coupon_code: ''
  }),
  // 對應 methods (物件形式)
  actions: {
    getCartList () {
      status.isBounced = true
      axios.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
          status.isBounced = false
        }).catch(() => {
          status.pushMsg(false, '載入', '請重新整理')
        })
    },
    updateCart (item, qty = 1) {
      if (item.qty <= 1) {
        item.qty = 1
      } else if (item.qty >= item.product.inventory) {
        item.qty = item.product.inventory
      }
      axios.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, {
        data: {
          product_id: item.product.id,
          qty: Number(item.qty)
        }
      })
        .then((res) => {
          this.getCartList()
          // status.pushMsg(res, '更新', '已成功更新購物車')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '已成功更新購物車',
            showConfirmButton: false,
            timer: 2000
          })
        }).catch(() => {
          // status.pushMsg(false, '更新', '更新購物車失敗')
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: '更新購物車失敗',
            showConfirmButton: false,
            timer: 2000
          })
        })
    },
    delCartItem (item) {
      axios.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`)
        .then((res) => {
          this.getCartList()
          // status.pushMsg(res, '刪除', '已成功刪除品項')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '已成功刪除品項！',
            showConfirmButton: false,
            timer: 2000
          })
        }).catch(() => {
          // status.pushMsg(false, '刪除', '刪除品項失敗')
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: '刪除品項失敗！',
            showConfirmButton: false,
            timer: 2000
          })
        })
    },
    delAllCart (item) {
      status.isLoadingItem = item.id
      axios.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          status.isLoadingItem = ''
          this.getCartList()
          // status.pushMsg(res, '刪除', '已成功刪除所有品項')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '已成功刪除所有品項！',
            showConfirmButton: false,
            timer: 2000
          })
        }).catch(() => {
          status.isLoadingItem = ''
          // status.pushMsg(false, '刪除', '刪除所有品項失敗')
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: '刪除所有品項失敗！',
            showConfirmButton: false,
            timer: 2000
          })
        })
    },
    addToCart: debounce(function (product, qty = 1) {
      // 如果選擇的數量>=庫存就return
      // console.log('cartStore-->addToCart')
      status.isLoadingItem = product.id
      // 篩選出cartData與指定商品中id相同的資料
      let temp = this.cartData.carts.filter(item => item.product_id === product.id)
      // 取陣列中第一個物件
      temp = { ...temp[0] }
      const resultQty = temp.qty + qty
      if (resultQty > product.inventory) {
        // status.pushMsg(false, '加入', '超過庫存數量')
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: '已無庫存,暫時無法訂購',
          showConfirmButton: false,
          timer: 2000
        })
        status.isLoadingItem = ''
      } else {
        axios.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, {
          data: {
            product_id: product.id,
            qty
          }
        }).then((res) => {
          this.getCartList()
          // status.pushMsg(res, '加入', '已成功加入購書車')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '已成功加入購物車！',
            showConfirmButton: false,
            timer: 2000
          })
          status.isLoadingItem = ''
        }).catch(() => {
          // status.pushMsg(false, '加入', '加入購書車失敗')
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: '加入購物車失敗！',
            showConfirmButton: false,
            timer: 2000
          })
        })
      }
    }, 500),
    addCouponCode () {
      if (this.coupon === '') {
        status.pushMsg(false, '套用', '你還沒填入優惠碼呢')
      } else {
        axios.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`, {
          data: { code: this.coupon_code }
        })
          .then((res) => {
            this.getCartList()
            // status.pushMsg(res, '套用', '已套用優惠券')
            console.log(this.coupon_code)
            console.log(res)
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: '已套用優惠券',
              showConfirmButton: false,
              timer: 2000
            })
          }).catch(() => {
            // status.pushMsg(false, '套用', '套用優惠券失敗')
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: '套用優惠券失敗',
              showConfirmButton: false,
              timer: 2000
            })
          })
      }
    },
    copyCouponCode (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          // status.pushMsg(true, '複製', '您已成功複製優惠碼!')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '已成功領取優惠碼',
            showConfirmButton: false,
            timer: 2000
          })
          this.coupon_code = text
        })
    }
  }
})
