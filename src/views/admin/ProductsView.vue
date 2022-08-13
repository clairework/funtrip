<template>
<LoadingView class="loading" :active="isLoading">
  <div class="spinner-border text-primary m-5" role="status">
  <span class="visually-hidden">Loading...</span>
  </div>
</LoadingView>
<div class="container">
<h2 class="text-dark fw-bold me-4 p-2 text-center pb-2 pt-4">商品管理</h2>
<!--align-items-center  -->
<div class="d-flex justify-content-between align-items-center mb-4">
    <div class="header align-items-center">
        <select class="form-select form-select-sm bg-white box-shadow-none w-auto" aria-label=".form-select-sm example"
        v-model="selectAnswer">
            <option selected value =''>全部</option>
            <option :value="item" v-for="(item,i) in category" :key="i">{{ item }}</option>
        </select>
    </div>
    <div class="btn btn-primary text-white rounded-2" @click="openModal ('isCreateNew')">
      新增行程</div>
</div>
<div class="table-responsive">
<table class="table caption-top table-hover text-primaryDark text-nowrap">
  <thead>
    <tr>
      <th class="fw-bold" scope="col">洲別</th>
      <th scope="col">國別</th>
      <th scope="col">行程名稱</th>
      <th scope="col">原價</th>
      <th scope="col">售價</th>
      <th scope="col">是否上架</th>
      <th scope="col">編輯</th>
      <th scope="col">刪除</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in products" :key="item.id">
      <th scope="row">{{ item.category }}</th>
      <td>{{ item.country }}</td>
      <td>{{ item.title }}</td>
      <td>NT$ {{ item.origin_price }}</td>
      <td>NT$ {{ item.price }}</td>
      <td class="ps-3">
        <label class="switch fs-4">
          <input type="checkbox"
          @change="updateProducts(item,false)"
          v-model="item.is_enabled"
          :true-value="1" :false-value="0">
          <span class="slider"></span>
        </label>
      </td>
      <td>
          <div class="editBtn d-flex align-items-center" @click="openModal ('edit', item)">
            <i class="bi bi-pencil-square cursor-pointer text-primaryDark fs-4 me-6"></i>
          </div>
      </td>
      <td>
          <div class="delBtn d-flex align-items-center" @click="openModal ('delete', item)">
            <i class="bi bi-trash fs-4 cursor-pointer text-primaryDark"></i>
          </div>
      </td>
    </tr>
  </tbody>
</table>
</div>
</div>

<ProductModal ref="productModal"
:temp="temp" :isCreateNew="isCreateNew" @update-products="updateProducts"></ProductModal>
<DelModal ref="delModal" :temp="temp" @del-item="delProductItem"></DelModal>
<PagiNation class="d-flex justify-content-center pb-4 pt-4"
  :pages="pagination" @update-page="getProducts"></PagiNation>
</template>

<script>
import { mapActions } from 'pinia'
import statusStore from '@/stores/statusStore'

import PagiNation from '@/components/front/PagiNation'
import ProductModal from '@/components/admin/ProductModal'
import DelModal from '@/components/admin/DelModal'

export default {
  data () {
    return {
      temp: [],
      products: [],
      productsAll: [],
      category: [],
      pagination: [],
      selectAnswer: '',
      isCreateNew: false,
      isLoading: false
    }
  },
  components: {
    PagiNation,
    ProductModal,
    DelModal
  },
  watch: {
    selectAnswer: {
      handler (value) {
        this.getProducts(value)
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(statusStore, ['pushMsg']),
    getProducts (category, page = 1) {
      // let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      if (category) {
        // url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?category=${category}&page=${page}`
        url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/products?category=${category}&page=${page}`
      }
      // console.log(url) // add by claire
      this.isLoading = true
      this.$http.get(url)
        .then((res) => {
          // console.log(res.data)
          if (res.data.success) {
            this.products = res.data.products
            this.pagination = res.data.pagination
            this.isLoading = false
            // console.log(res.data)
          }
        }).catch(() => {
          this.isLoading = false
          console.log('nodata')
        })
    },
    getAllProducts () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`)
      // for test
      // const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`
      // console.log(api)
        .then((res) => {
          this.productsAll = res.data.products
          this.filterCategory()
        }).catch(() => {
          this.pushMsg(false, '載入', '請重新整理')
        })
    },
    filterCategory () {
      this.getAllProducts()
      // 將物件轉成陣列
      this.productsAll = Object.keys(this.productsAll).map((i) => this.productsAll[i])
      // 提取出category
      const array = this.productsAll.map((item) => item.category)
      // 過濾出重複的元素
      this.category = [...new Set(array)]
    },
    updateProducts (product, isCreateNew) {
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let method = 'post'
      // 如果是編輯模式
      if (isCreateNew === false) {
        method = 'put'
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`
      }
      this.isLoading = true
      this.$http[method](url, { data: product })
        .then((res) => {
          this.isLoading = false
          this.pushMsg(res, '更新', '更新成功')
          this.$refs.productModal.hideModal()
          // console.log(res.data)
          this.getProducts()
        }).catch(() => {
          this.isLoading = false
          this.pushMsg(false, '更新', '更新失敗')
        })
    },
    openModal (status, product) {
      if (status === 'isCreateNew') {
        this.temp = {}
        this.$refs.productModal.openModal()
        this.isCreateNew = true
      } else if (status === 'edit') {
        this.temp = JSON.parse(JSON.stringify(product))
        this.$refs.productModal.openModal()
        this.isCreateNew = false
      } else if (status === 'delete') {
        this.temp = { ...product }
        this.$refs.delModal.openModal()
      }
    },
    delProductItem () {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.temp.id}`)
        .then((res) => {
          this.pushMsg(res, '刪除', '已成功刪除')
          this.$refs.delModal.hideModal()
          this.getProducts()
        }).catch(() => {
          this.pushMsg(false, '刪除', '刪除失敗')
        })
    }
  },
  mounted () {
    this.getProducts()
    this.filterCategory()
  }
}
</script>
