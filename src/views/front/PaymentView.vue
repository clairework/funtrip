<template>
  <div class="bg-light">
    <OrderSteps :order-is-paid="orderIsPaid" :step="step"></OrderSteps>
    <div class="container">
      <div class="row vh-70 vh-md-50 align-items-center">
        <div class="col">
          <div class="d-flex flex-column align-items-center">
            <i class="fa-solid fa-circle-check fa-4x text-primary mb-4"></i>
            <p class="text-primaryDark fw-bold text-center fs-4 fs-md-3 mb-4">您已成功付款 </p>
            <p class="text-primary fw-bold text-center mb-4">該頁將在 <span class="text-primaryDark fs-4">{{ count }}</span> 秒後自動跳轉 </p>
            <router-link to="/" class="btn btn-sm btn-primaryDark fs-5 fs-md-4 text-white">回到首頁</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderSteps from '@/components/front/OrderSteps'

export default {
  data () {
    return {
      step: 3,
      orderIsPaid: true,
      count: 3
    }
  },
  components: {
    OrderSteps
  },
  methods: {
    countDown () {
      this.count--
      if (this.count === 0) {
        this.$router.push('/')
      }
      setTimeout(() => {
        this.countDown()
      }, 1000)
    }
  },
  mounted () {
    this.countDown()
  }
}
</script>
