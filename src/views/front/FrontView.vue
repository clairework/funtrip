<template>
    <FrontNavbar/>
    <ToastMsg/>
    <GoTop/>
    <RouterView/>
    <FooterComponent/>
</template>

<script>
import FrontNavbar from '@/components/front/FrontNavbar.vue'
import FooterComponent from '@/components/front/FooterComponent.vue'
import ToastMsg from '@/components/ToastMsg.vue'
import GoTop from '@/components/front/GoTop.vue'

export default {
  components: {
    FrontNavbar,
    FooterComponent,
    ToastMsg,
    GoTop
  }
}
</script>
