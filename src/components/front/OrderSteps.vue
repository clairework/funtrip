<template>
    <section class="zones section_process py-5">
      <div class="container ">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="step-wrap">
              <div class="step step1 done">
                <h3>1</h3>
                <span class="txt">確認訂單</span>
              </div>
              <div
                class="step step2"
                :class="{done:step === 2 || step === 3}"
              >
                <h3>2</h3>
                <span class="txt">確認付款</span>
              </div>
              <div
                class="step step3"
                :class="{done:step === 3}"
              >
                <h3>3</h3>
                <span class="txt">完成訂單</span>
              </div>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-primaryLight"
                :class="{step2:step === 2,step3:step === 3}"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['step']
}
</script>
