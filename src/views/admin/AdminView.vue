<template>
    <AdminNavbar/>
    <ToastMsg/>
    <div style="height: 91vh">
      <router-view v-if="checkSuccess"></router-view>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import statusStore from '@/stores/statusStore'
import AdminNavbar from '@/components/admin/AdminNavbar'
import ToastMsg from '@/components/ToastMsg.vue'

export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  components: {
    AdminNavbar,
    ToastMsg
  },
  methods: {
    ...mapActions(statusStore, ['pushMsg']),
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)zyToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      this.$http.post(`${process.env.VUE_APP_API}/api/user/check`)
        .then((res) => {
          this.checkSuccess = true
          this.pushMsg(res, '登入', '已成功登入')
        }).catch(() => {
          this.pushMsg(false, '登入', '請重新登入')
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
