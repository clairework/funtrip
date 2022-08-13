<template>
  <div class="custom-card card w-100 h-100 shadow-sm" style="width: 18rem">
    <div class="custom-img">
      <img
        :src="product.imageUrl"
        class="card-img-top cover-fit"
        alt="rot1"
      />
      <!-- <span class="custom-text d-flex justify-content-center align-items-center text-white">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="px-1" />
          查看更多
      </span> -->
    </div>

    <div class="card-body p-3">
      <h5 class="card-title fw-bolder mb-3">{{ product.title }}</h5>
      <p class="card-text mb-2" style="height: 1.5rem; overflow: hidden" v-html="product.content"></p>
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-gray text-decoration-line-through mb-0">
          NT$ {{ product.origin_price }}/人
        </p>
        <p class="fs-5 fw-bolder mb-0">NT$ {{ product.price }}/人</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  // inject: ['currency'],
  props: ['product']
}
</script>
