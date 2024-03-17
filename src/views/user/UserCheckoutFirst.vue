<template>
  <div class="container">
    <LoadingOverLay :active="isLoading" :z-index="1060"></LoadingOverLay>
    <div class="row justify-content-center">
        <div class="col-md-10">
          <nav class="navbar navbar-expand-lg navbar-light px-0">
            <RouterLink to="/" class="fs-4 navbar-brand">
              <i class="bi bi-cup-hot ff-minor text-primary"></i>
              <span class="ms-2 fw-bold ff-minor">Eco-Coffee</span>
            </RouterLink>
            <ul class="list-unstyled mb-0 ms-md-auto d-flex align-items-center
             justify-content-between justify-content-md-end w-100 mt-md-0 mt-4">
              <li class="me-md-6 me-3 position-relative custom-step-line text-primary fw-bold">
                <i class="bi bi-check2-circle d-md-inline d-block text-center"></i>
                <span class="text-nowrap">購物車</span>
              </li>
              <li class="me-md-6 me-3 position-relative custom-step-line text-primary fw-bold">
                <i class="bi bi-check2-circle d-md-inline d-block text-center"></i>
                <span class="text-nowrap">訂購資料填寫</span>
              </li>
              <li><i class="bi bi-exclamation-circle d-md-inline d-block text-center"></i>
                 <span class="text-nowrap">訂單完成</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  </div>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="fw-bold mb-4 pt-3 text-primary">訂購資料填寫</h3>
        </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-5">
        <div class="border p-4 mb-4 border-dark">
          <p class="h4 text-primary fw-bold">訂單明細</p>
          <template v-if="cart.carts">
              <div v-for="item in cart.carts" :key="item.id">
                <div class="d-flex py-3">
                    <img :src="item.product.imageUrl" alt="" class="me-2"
                    style="width: 50px; height: 50px; object-fit: cover">
                    <div class="w-100">
                      <div class="d-flex justify-content-between">
                        <p class="mb-0 fw-bold">{{item.product.title}}</p>
                        <p class="mb-0">
                          <small v-if="cart.final_total !== cart.total"
                          class="text-primary">折扣價</small>
                          {{ $filters.currency(item.final_total) }}
                        </p>
                      </div>
                      <p class="mb-0 text-secondary">x {{ item.qty }} {{ item.product.unit }}</p>
                    </div>
                </div>
              </div>
            </template>
            <table class="table mt-4 border-top border-bottom text-muted border-dark">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                  <td class="text-end border-0 px-0 pt-4">
                    {{ $filters.currency(cart.total) }}
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總計</p>
              <p class="mb-0 h4 fw-bold">
                {{ $filters.currency(cart.total) }}
              </p>
            </div>
            <div v-if="cart.final_total !== cart.total"
               class = "d-flex justify-content-between mt-4">
                <p class="mb-0 h4 fw-bold text-primary">折扣價</p>
                <p class="mb-0 h4 fw-bold text-primary">
                  {{ $filters.currency(cart.final_total) }}
                </p>
            </div>
           </div>
      </div>
      <div class="col-md-5">
        <VeeForm ref="form" v-slot="{ errors }" @submit="createOrder">
          <p>Contact information</p>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <VeeField id="email" name="email" type="email"
            class="form-control" :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email" rules="email|required" v-model="form.user.email" />
            <ErrorMessage name="email" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <VeeField id="name" name="姓名" type="text"
            class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名" rules="required" v-model="form.user.name" />
            <ErrorMessage name="姓名" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <VeeField id="tel" name="電話" type="tel"
            class="form-control" :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話" rules="required|min:8|max:10" v-model="form.user.tel" />
            <ErrorMessage name="電話" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <VeeField id="address" name="地址" type="text"
            class="form-control" :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址" rules="required" v-model="form.user.address" />
            <ErrorMessage name="地址" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea name="" id="message" class="form-control"
            cols="30" rows="10" v-model="form.message"></textarea>
          </div>
          <div class="d-flex flex-column-reverse flex-md-row mt-4
            justify-content-between align-items-md-center align-items-end w-100">
            <router-link to="/cart"><i class="bi bi-chevron-double-left mr-1"></i>
              回到購物車</router-link>
            <button type="submit" class="btn btn-primary py-3 px-6">送出訂單</button>
        </div>
        </VeeForm>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cartStore';
import toastMessage from '../../stores/toastMessage';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      carts: {},
      orderId: '',
      products: [],
      product: {},
      status: {
        loadingItem: '',
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      isLoading: false,
    };
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  methods: {
    ...mapActions(toastMessage, ['pushMessage']),
    ...mapActions(cartStore, ['getCart']),
    getProduct(id) {
      this.$router.push(`product/${id}`);
    },
    createOrder() {
      // 檢查購物車是否為空
      // if (this.cart.carts && this.cart.carts.length === 0) {
      // 如果購物車為空，不執行後續的 API 請求
      //   Swal.fire({
      //     icon: 'error',
      //     title: '購物車為空',
      //     footer: '<a href="#">Why do I have this issue?</a>',
      //   });
      //   return;
      // }
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
  created() {
    this.orderId = this.$route.params.orderId; // 從路由取得訂單 id
    this.getCart();
  },
};
</script>
