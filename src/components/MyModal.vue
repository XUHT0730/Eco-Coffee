<template>
  <div
    class="modal fade"
    id="myModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <VeeForm
      ref="form"
      v-slot="{ errors }"
      @submit="$emit('update-product', tempProduct)"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span v-if="isNew">新增產品</span>
              <span v-else>編輯產品</span>
            </h5>
            <button
              type="button"
              class="btn-close bg-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="image" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="mb-3">
                  <label for="customFile" class="form-label"
                    >或 上傳圖片
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="fileInput"
                    @change="uploadFile"
                  />
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" />
                <!-- 延伸技巧，多圖 -->
                <div class="mt-5" v-if="tempProduct.imagesUrl">
                  <div
                    v-for="(image, key) in tempProduct.imagesUrl"
                    class="mb-3"
                    :key="key"
                  >
                    <input
                      type="url"
                      class="form-control form-control"
                      v-model="tempProduct.imagesUrl[key]"
                      placeholder="請輸入連結"
                    />
                    <div>
                      <img class="img-fluid" :src="image" />
                    </div>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="tempProduct.imagesUrl.splice(key, 1)"
                    >
                      移除
                    </button>
                  </div>
                  <div
                    v-if="
                      tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1] ||
                      !tempProduct.imagesUrl.length
                    "
                  >
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm d-block w-100"
                      @click="tempProduct.imagesUrl.push('')"
                    >
                      新增圖片
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <VeeField
                    id="title"
                    name="title"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['title'] }"
                    placeholder="請輸入標題"
                    rules="required"
                    v-model="tempProduct.title"
                  />
                  <ErrorMessage name="title" class="invalid-feedback" />
                </div>

                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <VeeField
                      id="category"
                      name="category"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['category'] }"
                      placeholder="請輸入分類"
                      rules="required"
                      v-model="tempProduct.category"
                    />
                    <ErrorMessage name="category" class="invalid-feedback" />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="unit" class="form-label">單位</label>
                    <VeeField
                      id="unit"
                      name="unit"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['unit'] }"
                      placeholder="請輸入單位"
                      rules="required"
                      v-model="tempProduct.unit"
                    />
                    <ErrorMessage name="unit" class="invalid-feedback" />
                  </div>
                </div>

                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <VeeField
                      id="origin_price"
                      name="origin_price"
                      type="number"
                      class="form-control"
                      :class="{ 'is-invalid': errors['origin_price'] }"
                      placeholder="請輸入原價"
                      rules="required"
                      v-model.number="tempProduct.origin_price"
                    />
                    <ErrorMessage
                      name="origin_price"
                      class="invalid-feedback"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <VeeField
                      id="price"
                      name="price"
                      type="number"
                      class="form-control"
                      :class="{ 'is-invalid': errors['price'] }"
                      placeholder="請輸入售價"
                      rules="required|min_value:0"
                      v-model.number="tempProduct.price"
                    />
                    <ErrorMessage name="price" class="invalid-feedback" />
                  </div>
                </div>
                <hr />

                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="tempProduct.description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    v-model="tempProduct.content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button type="submit" class="btn btn-primary">確認</button>
          </div>
        </div>
      </div>
    </VeeForm>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import toastMessage from '@/stores/toastMessage';

import modalMixin from '../mixins/modalMixin';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  props: {
    product: Object,
    isNew: Boolean,
  },
  data() {
    return {
      status: {},
      modal: '',
      tempProduct: {},
    };
  },
  emits: ['update-product'],
  mixins: [modalMixin],
  watch: {
    product() {
      this.tempProduct = this.product;
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
      if (!this.tempProduct.imageUrl) {
        this.tempProduct.imageUrl = '';
      }
    },
  },
  methods: {
    ...mapActions(toastMessage, ['pushMessage']),
    // 上傳圖片檔案
    uploadFile() {
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/upload`;
      this.status.fileUploading = true;
      this.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          this.status.fileUploading = false;
          this.tempProduct.imageUrl = response.data.imageUrl;
          this.$refs.fileInput.value = '';
          this.pushMessage({
            style: 'success',
            title: '圖片上傳結果',
            content: response.data.message,
          });
        })
        .catch((error) => {
          this.status.fileUploading = false;
          this.pushMessage({
            style: 'danger',
            title: '圖片上傳結果',
            content: error.response.data.message,
          });
        });
    },
  },
};
</script>
