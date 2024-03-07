<template>
    <footer class="container border-2 border-top">
        <div class="footer__wrapper bg-white text-dark">
            <div class="footer-blocks">
                <div class="footer-block">
                <!-- <img src="images/undraw_chef_cu-0-r.svg"
                style="height: 109px; width: 139px; margin-bottom: 10px;" alt=""> -->
                <p>15% off your first order</p>
                <p>Subscribe today and save</p>
                <VeeForm ref="form" class="col-md-6"
                v-slot="{ errors }" @submit="createOrder">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <VeeField id="email" name="email" type="email"
                        class="form-control" :class="{ 'is-invalid': errors['email'] }"
                            placeholder="請輸入 Email"
                            rules="email|required" v-model="form.user.email" />
                        <ErrorMessage name="email" class="invalid-feedback" />
                    </div>
                </VeeForm>
                </div>
                <div class="footer-block">
                    <h4 style="margin-bottom: 25px;">相關連結</h4>
                    <ul class="footerul" style="padding-left: 50px;">
                        <li style="margin-bottom: 10px;"><a href="#">主頁</a></li>
                        <li style="margin-bottom: 10px;"><a href="#">常見問題</a></li>
                    </ul>
                    <ul class="footerul">
                        <li style="margin-bottom: 10px;"><a href="#">最新消息</a></li>
                        <li style="margin-bottom: 10px;"><a href="#">聯絡我們</a></li>
                    </ul>
                </div>
                <div class="footer-block">
                    <h4 class="mb-2">聯絡我們</h4>
                    <div class="row">
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-envelope-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    .footer__wrapper {
        display: flex;
        flex-wrap: wrap;
        max-width: 1080px;
        margin: 0 auto;
    }
    .footer-blocks {
        display: grid;
        align-items: flex-start;
        flex-basis: 100%;
        padding-top: 3rem;
        margin-bottom: 4rem;
        border-top: 1px solid #dfe3ea;
        grid-auto-columns: 1fr;
        grid-gap: 56px;
    }
    .footer-block {
        text-align: left;
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
