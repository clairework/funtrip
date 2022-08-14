<template>
  <div class="position-relative bg-light window-height">
    <div class="container position-absolute top-50 start-50 translate-middle mb-10">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-5">
          <form id="form" class="form-signin shadow" @submit.prevent="signIn">
            <div class="bg-white box-shadow pt-3 rounded-4">
              <h1 class="text-center text-Dark fw-bold mb-5">
                <i class="bi bi-key-fill h2"></i>
                管理者登入</h1>
              <div class="mb-2 mx-5">
                <label for="Email address" class="form-label text-dark w-100">Email</label>
                <input type="email" class="form-control border-primary" v-model="user.username"
                id="Email address" placeholder="name@example.com">
              </div>
              <div class="mb-2 mx-5">
                <label for="password" class="form-label text-dark w-100">密碼</label>
                <input type="password" class="form-control border-primary" v-model="user.password"
                id="password">
              </div>
              <div class="text-center">
              <button type="submit" class="btn btn-primary text-white rounded-2 w-80 mt-5 mb-3 text-center">登入</button>
              </div>
              <router-link type="button"
                class="btn  btn-white d-flex justify-content-center align-items-center text-dark mb-4" to="/">
                <i class="bi bi-house-heart-fill h4 "></i><span class="ms-3">回到首頁</span>
              </router-link>
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
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(statusStore, ['pushMsg']),
    signIn () {
      if (this.user.username === '' || this.user.password === '') {
        this.pushMsg(false, '登入', '請輸入帳號或密碼')
      } else {
        this.$http.post(`${process.env.VUE_APP_API}/admin/signin`, this.user)
          .then((res) => {
            const { token, expired } = res.data
            // token寫入cookie
            document.cookie = `zyToken=${token}; expires=${new Date(expired)}`
            // 轉址
            this.$router.push('/admin/products')
          }).catch(() => {
            this.pushMsg(false, '登入', '請重新登入')
            this.user.password = ''
          })
      }
    }
  }
}
</script>
