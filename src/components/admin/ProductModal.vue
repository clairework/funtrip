<template>
  <div class="modal fade" ref="modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content background-transparent">
        <div class="modal-header bg-primaryLight text-center">
          <h4 class="modal-title text-white">{{ isCreateNew ? '新增' : '編輯' }}行程</h4>
        </div>
        <div class="modal-body bg-white">
          <div class="d-flex justify-content-center align-items-center">
            <div class="nav flex-column w-30 w-md-15 nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button class="nav-link fw-bold w-100 active"
                      id="v-pills-info-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-info"
                      type="button" role="tab"
                      aria-controls="v-pills-info"
                      aria-selected="true">行程資訊</button>
               <button class="nav-link fw-bold w-100"
                      id="v-pills-image-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-image"
                      type="button" role="tab"
                      aria-controls="v-pills-image"
                      aria-selected="false">圖片上傳</button>
              <button class="nav-link fw-bold w-100"
                      id="v-pills-intro-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-intro"
                      type="button" role="tab"
                      aria-controls="v-pills-intro"
                      aria-selected="false">行程簡介</button>
              <button class="nav-link fw-bold w-100"
                      id="v-pills-detail-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-detail"
                      type="button" role="tab"
                      aria-controls="v-pills-detail"
                      aria-selected="false">行程介紹</button>
            </div>
            <div class="tab-content w-70 w-md-85 text-dark" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-info" role="tabpanel" aria-labelledby="v-pills-info-tab">
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="title text-dark" class="form-label">標題</label>
                      <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model.trim="tempModalData.title">
                    </div>
                    <div class="mb-3 col-md-3">
                      <p class="fw-bold fs-5 mb-2">是否上架</p>
                      <label class="switch">
                        <input type="checkbox"
                        v-model="tempModalData.is_enabled"
                        :true-value="1" :false-value="0">
                        <span class="slider"></span>
                      </label>
                    </div>
                  </div>
                  <div class="row">
                      <div class="mb-3 col-md-3">
                        <label for="category" class="form-label">洲別</label>
                        <input id="category" type="text" class="form-control" placeholder="請輸入洲別"
                          v-model.trim="tempModalData.category">
                      </div>
                      <div class="mb-3 col-md-3">
                        <label for="Country" class="form-label">國別</label>
                        <input id="Country" type="text" class="form-control" placeholder="請輸入國別"
                          v-model.trim="tempModalData.country">
                      </div>
                      <div class="mb-3 col-md-3">
                        <label for="start_city" class="form-label">出發地點</label>
                        <input id="start_city" type="text" class="form-control" placeholder="請輸入出發地"
                        v-model.trim="tempModalData.start_city">
                      </div>
                    </div>
                    <div class="row">
                        <div class="mb-3 col-md-3">
                          <label for="start_date" class="form-label">去程日期</label>
                          <input id="start_date" type="date" class="form-control" placeholder="請輸入出版日期"
                          v-model.trim="tempModalData.start_date">
                        </div>
                        <div class="mb-3 col-md-3">
                          <label for="end_date" class="form-label">回程日期</label>
                          <input id="end_date" type="date" class="form-control" placeholder="請輸入出版日期"
                          v-model.trim="tempModalData.end_date">
                        </div>
                        <div class="mb-3 col-md-3">
                        <label for="team_qty" class="form-label">成團人數</label>
                        <input id="team_qty" type="text" class="form-control" placeholder="請輸入成團人數"
                          v-model.trim="tempModalData.team_qty">
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-3">
                        <label for="origin_price" class="form-label">定價</label>
                        <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入定價"
                        v-model.number="tempModalData.origin_price">
                      </div>
                      <div class="mb-3 col-md-3">
                        <label for="price" class="form-label">售價</label>
                        <input id="price" type="number" min="0" class="form-control"
                          placeholder="請輸入售價" v-model.number="tempModalData.price">
                      </div>
                      <div class="mb-3 col-md-3">
                        <label for="unit" class="form-label">單位</label>
                        <input id="unit" type="text" class="form-control" placeholder="請輸入單位"
                        v-model.trim="tempModalData.unit">
                      </div>
                    </div>
              </div>
              <div class="tab-pane fade" id="v-pills-image" role="tabpanel" aria-labelledby="v-pills-image-tab">
                <div>
                  <p class="fw-bold fs-4">圖片上傳</p>
                  <input type="text" class="form-control mb-2" v-model="tempModalData.imageUrl" placeholder="請輸入圖片連結">
                  <div class="input-group mb-5">
                    <input type="file" class="form-control" ref="fileInput" id="imgUploadInput" aria-describedby="imgUploadFileAddon" aria-label="Upload" @change="chooseImg">
                    <button class="btn btn-primaryLight text-white" type="button" id="imgUploadFileAddon" @click.prevent="upload">確認上傳</button>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="MainImg me-3">
                    <p class="fw-bold fs-4 text-center mb-2">行程主圖</p>
                    <img class="bg-light" :src="tempModalData.imageUrl" :alt="tempModalData.title">
                  </div>
                  <div class="MainImg me-3" v-if="tempModalData.imgPreviewURL">
                    <p class="fw-bold fs-4 text-center mb-2">圖片預覽</p>
                    <img class="" :src="tempModalData.imgPreviewURL" :alt="tempModalData.title">
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="v-pills-intro" role="tabpanel" aria-labelledby="v-pills-intro-tab">
                  <div class="mb-3">
                    <label for="content" class="form-label">行程簡介</label>
                    <ckeditor :editor="editor" :config="editorConfig" v-model="tempModalData.content"></ckeditor>
                  </div>
                </div>
               <div class="tab-pane fade" id="v-pills-detail" role="tabpanel" aria-labelledby="v-pills-detail-tab">
                  <div class="mb-3">
                    <label for="description" class="form-label">行程介紹</label>
                    <ckeditor :editor="editor" :config="editorConfig" v-model="tempModalData.description"></ckeditor>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer bg-white">
          <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary text-white" @click="$emit('update-products',tempModalData,isCreateNew)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import statusStore from '@/stores/statusStore'
import modalMixin from '@/mixins/modalMixin'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
export default {
  mixins: [modalMixin],
  props: ['isCreateNew'],
  data () {
    return {
      publication_date: '',
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', 'bold', 'italic']
      }
    }
  },
  methods: {
    ...mapActions(statusStore, ['pushMsg']),
    // 圖片預覽效果
    chooseImg (e) {
      const [file] = e.target.files
      this.tempModalData.imgPreviewURL = window.URL.createObjectURL(file)
    },
    // 圖片上傳
    upload () {
      const file = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`, formData)
        .then(res => {
          this.pushMsg(res, '上傳', '圖片已成功上傳')
          this.tempModalData.imageUrl = res.data.imageUrl
          this.tempModalData.imgPreviewURL = ''
        }).catch(() => {
          this.pushMsg(false, '上傳', '圖片上傳失敗')
        })
    }
  }
}
</script>

<style lang="scss">
.MainImg{
  width: 150px;
  height: 150px;
  overflow: hidden;
}
.ck-editor__editable {
  height: 300px !important;
}
</style>
