<template>
  <footer class="border-2 bg-primary border-top mt-5 footer">
    <div class="container text-white text-center">
      <!-- 在 sm 尺寸下僅顯示 RouterLink 元素 -->
      <div class="row d-lg-none d-md-none">
        <RouterLink to="/" class="fs-2 navbar-brand pt-4 pb-1">
          <i class="bi bi-cup-hot"></i>
          <span class="ms-2 fw-bold text-white ff-minor">Eco-Coffee</span>
        </RouterLink>
        <p class="mb-0 text-center">
          <small>無商業用途，僅供學習使用</small>
        </p>
      </div>
      <div class="footer__wrapper d-none d-sm-block">
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="footer-block">
              <p class="h4 fw-bold mb-3">首次下單可享 15% 優惠</p>
              <p>訂閱獲取優惠卷 & 最新商品</p>
              <VeeForm ref="form" v-slot="{ errors }" @submit="subscribe">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <VeeField
                    id="email"
                    name="email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors['email'] }"
                    placeholder="請輸入 Email"
                    rules="email|required"
                    v-model="email"
                  />
                  <ErrorMessage name="email" class="invalid-feedback" />
                </div>
                <div class="w-auto">
                  <button
                    type="submit"
                    class="btn btn-secondary d-flex align-items-center
                     py-2 px-6 px-sm-10 text-white fw-semibold"
                    :disabled="isLoading"
                  >
                    <span
                      v-show="isLoading"
                      class="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    訂閱
                  </button>
                </div>
              </VeeForm>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="footer-block-center">
              <p class="h4 fw-bold mb-4">相關連結</p>
              <ul class="footerul ps-6">
                <li class="mb-3">
                  <router-link to="/products" class="text-white">商品一覽</router-link>
                </li>
                <li class="mb-3">
                  <a class="text-white" href="#">常見問題</a>
                </li>
              </ul>
              <ul class="footerul">
                <li class="mb-3">
                  <router-link to="/articles" class="text-white"
                    >最新消息</router-link
                  >
                </li>
                <li class="mb-3">
                  <a class="text-white" href="#">聯絡我們</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="footer-block-center">
              <p class="h4 fw-bold mb-4">聯絡我們</p>
              <div class="row">
                <div class="col-4 text-end">
                    <a class="text-white" href="https://www.instagram.com/accounts/login/">
                      <i class="bi bi-instagram footer-icon">
                      </i>
                    </a>
                </div>
                <div class="col-4">
                  <a class="text-white" href="https://www.facebook.com/?locale=zh_TW">
                    <i class="bi bi-facebook footer-icon"></i>
                  </a>
                </div>
                <div class="col-4 text-start">
                  <a class="text-white" href="https://mail.google.com/mail/">
                    <i class="bi bi-envelope-heart footer-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="mb-0 text-center">
          <small>無商業用途，僅供學習使用</small>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      email: '',
      coupon: 'coupon2024',
      isLoading: false,
    };
  },
  methods: {
    subscribe() {
      this.isLoading = true;
      this.emil = '';
      setTimeout(() => {
        this.isLoading = false;
        this.$refs.form.resetForm();
      }, 1000);
      Swal.fire({
        icon: 'success',
        title: '成功訂閱',
        text: `恭喜獲得優惠碼: ${this.coupon}`,
        showConfirmButton: true,
        allowOutsideClick: true,
      });
    },
  },
};
</script>

<style lang="scss">
.footer__wrapper {
  padding-top: 3rem;
  padding-bottom: 1rem;
}
.footer-block {
  text-align: left;
}
.footer-block-center {
  text-align: center;
}
.footer-icon {
  font-size: 30px;
}
.footerul {
  list-style: none;
  padding: 0;
  float: left;
  margin-left: 50px;
}
</style>
