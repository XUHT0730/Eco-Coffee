<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <VeeForm
      ref="form"
      v-slot="{ errors }"
      @submit="$emit('update-coupon', tempCoupon)"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <span v-if="isNew">新增優惠卷</span>
              <span v-else>編輯優惠卷</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="title">標題</label>
              <VeeField
                id="title"
                name="title"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['title'] }"
                placeholder="請輸入標題"
                rules="required"
                v-model="tempCoupon.title"
              />
              <ErrorMessage name="title" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="coupon_code">優惠碼</label>
              <VeeField
                id="coupon_code"
                name="coupon_code"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['coupon_code'] }"
                placeholder="請輸入優惠碼"
                rules="required"
                v-model="tempCoupon.code"
              />
              <ErrorMessage name="coupon_code" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="due_date">到期日</label>
              <VeeField
                id="due_date"
                name="due_date"
                type="date"
                class="form-control"
                :class="{ 'is-invalid': errors['due_date'] }"
                placeholder="請輸入到期日"
                rules="required"
                v-model="due_date"
              />
              <ErrorMessage name="due_date" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="price">折扣百分比</label>
              <VeeField
                id="price"
                name="price"
                type="number"
                class="form-control"
                :class="{ 'is-invalid': errors['price'] }"
                placeholder="請輸入折扣百分比"
                rules="required|min_value:1"
                v-model.number="tempCoupon.percent"
              />
              <ErrorMessage name="price" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempCoupon.is_enabled"
                  id="is_enabled"
                />
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              關閉
            </button>
            <button type="submit" class="btn btn-primary">
              {{ isNew ? "新增優惠卷" : "更新優惠券" }}
            </button>
          </div>
        </div>
      </div>
    </VeeForm>
  </div>
</template>

<script>
import modalMixin from '../mixins/modalMixin';

export default {
  props: {
    coupon: Object,
    isNew: Boolean,
  },
  data() {
    return {
      tempCoupon: {},
      due_date: '',
    };
  },
  emits: ['update-coupon'],
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString()
        .split('T');
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  mixins: [modalMixin],
};
</script>
