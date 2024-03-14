<template>
  <footer class="border-2 bg-primary border-top mt-6">
    <div class="container text-white text-center">
      <!-- 在 sm 尺寸下僅顯示 RouterLink 元素 -->
      <div class="row d-lg-none d-md-none">
        <RouterLink to="/" class="navbar-brand py-3">
          <i class="bi bi-cup-hot"></i>
          <span class="ms-2 fw-bold text-white">Eco-Coffee</span>
        </RouterLink>
      </div>
      <div class="footer__wrapper d-none d-sm-block">
          <div class="row">
              <div class="col-md-4 mb-4">
                  <div class="footer-block">
                      <p class="h4 fw-bold mb-3">首次下單可享 15% 優惠</p>
                      <p>訂閱獲取優惠卷 & 最新商品</p>
                      <VeeForm ref="form" v-slot="{ errors }" @submit="createOrder">
                          <div class="mb-3">
                              <label for="email" class="form-label">Email</label>
                              <VeeField id="email" name="email" type="email"
                               class="form-control w-70" :class="{ 'is-invalid': errors['email'] }"
                                  placeholder="請輸入 Email" rules="email|required"
                                   v-model="form.user.email" />
                              <ErrorMessage name="email" class="invalid-feedback" />
                          </div>
                      </VeeForm>
                  </div>
              </div>
              <div class="col-md-4 mb-4">
                  <div class="footer-block-center">
                      <p class="h4 fw-bold mb-4">相關連結</p>
                      <ul class="footerul ps-6">
                        <li class="mb-3"><a class="text-white" href="#">主頁</a></li>
                        <li class="mb-3"><a class="text-white" href="#">常見問題</a></li>
                      </ul>
                      <ul class="footerul">
                          <li class="mb-3"><a class="text-white" href="#">最新消息</a></li>
                          <li class="mb-3"><a class="text-white" href="#">聯絡我們</a></li>
                      </ul>
                  </div>
              </div>
              <div class="col-md-4 mb-4">
                  <div class="footer-block-center">
                    <p class="h4 fw-bold mb-4">聯絡我們</p>
                      <div class="row">
                          <div class="col-4">
                              <i class="bi bi-instagram icon"></i>
                          </div>
                          <div class="col-4">
                              <i class="bi bi-facebook icon"></i>
                          </div>
                          <div class="col-4">
                              <i class="bi bi-envelope-heart icon"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  .footer__wrapper {
      padding-top: 3rem;
      padding-bottom: 1rem;
  }
  .footer-block {
      text-align: left;
  }
  .footer-block-center{
    text-align: center;
  }
  .icon {
      font-size: 30px;
  }
  .footerul {
    list-style: none;
    padding: 0;
    float: left;
    margin-left: 50px;
 }
</style>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      form: {
        user: {
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    createOrder() {
      // 檢查購物車是否為空
      if (this.cart.carts && this.cart.carts.length === 0) {
        // 如果購物車為空，顯示通知訊息
        // alert('購物車為空');
        // 不執行後續的 API 請求
        return;
      }
      this.isLoading = true;
      // 先將表單資料儲存到 order 變數再代入 API 串接
      const url = `${VITE_URL}/api/${VITE_PATH}/order`;
      const order = this.form;
      this.axios.post(url, { data: order })
        .then((res) => {
          // 建立訂單成功後，再把頁面導向到結帳頁
          this.$router.push(`/checkout/${res.data.orderId}`);
          this.$refs.form.resetForm();
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.pushMessage({
            style: 'danger',
            title: '建立訂單',
            content: err.response.data.message,
          });
        });
    },
  },

};
</script>
