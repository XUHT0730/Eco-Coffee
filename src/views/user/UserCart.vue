<template>
  <LoadingOverLay :active="isLoading" :z-index="1060"></LoadingOverLay>
  <section class="container">
    <div class="mt-4">
      <!-- 如購物車內有產品則顯示，沒有的話則顯示購物車目前無商品-->
      <div v-if="cart.carts && cart.carts.length > 0">
        <div class="text-end">
          <button
            class="btn btn-outline-danger"
            type="button"
            @click="delAllCarts"
          >
            清空購物車
          </button>
        </div>
          <div class="row justify-content-center mt-4">
            <div
              class="col-md-6 bg-white mb-4 overflow-hidden"
              style="min-height: calc(100vh - 56px - 76px)"
            >
              <div class="d-flex justify-content-between">
                <p class="h2 text-primary fw-bold">購物車內容</p>
              </div>
              <template v-if="cart.carts">
                <div v-for="item in cart.carts" :key="item.id">
                  <div class="d-flex mt-4 bg-light align-items-center">
                      <img
                        :src="item.product.imageUrl"
                        :alt="item.product.title"
                        class="object-fit-cover w-70"
                        style="max-height: 150px"
                      />
                    <div class="w-100 p-3 position-relative">
                      <button
                        type="button"
                        class="btn btn-outline-dark position-absolute fw-bold border-0"
                        style="top: 16px; right: 15px"
                        @click="delCartItem(item.id)"
                        :disabled="status.loadingItem === item.id"
                      >
                        <i
                          class="fas fa-spinner fa-pulse"
                          v-if="status.loadingItem === item.id"
                        ></i>
                        X
                      </button>
                      <div>
                        <p class="mb-2 fw-bold me-4">
                          {{ item.product.title }}
                        </p>
                        <div
                          class="fw-bold text-primary"
                          style="font-size: 16px"
                          v-if="item.coupon"
                        >
                          已套用優惠券
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-between align-items-center w-100 mt-4"
                      >
                        <div class="input-group w-50 align-items-center">
                          <div class="input-group-prepend pe-1">
                            <!-- 如果商品數量為 2 個以上顯示減號，如果數量為 1 個顯示垃圾桶 -->
                            <button
                              type="button"
                              style="background-color: transparent; border: none;"
                              @click="
                                item.qty--;
                                updateCart(item);"
                              :disabled="item.qty === 1"
                              v-if="item.qty > 1"
                            >
                             <i class="bi bi-dash-lg fs-4 text-primary fw-bold"></i>
                            </button>
                            <button
                              type="button"
                              style="background-color: transparent; border: none;"
                              @click="delCartItem(item.id)"
                              v-else
                            >
                              <i class="bi bi-trash3 fs-4 text-dark fw-bold"></i>
                            </button>
                          </div>
                          <input
                            id="qty"
                            type="number"
                            class="form-control border-0 text-center my-auto
                             shadow-none bg-light px-0"
                            :value="item.qty"
                            :disabled="status.loadingItem === item.id"
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                            readonly
                          />
                          <div class="input-group-append ps-1">
                            <button
                              type="button"
                              style="background-color: transparent; border: none;"
                              @click="
                                item.qty++;
                                updateCart(item);"
                            >
                            <i class="bi bi-plus-lg fs-4 text-primary fw-bold"></i>
                            </button>
                          </div>
                        </div>
                        <p class="mb-0 ms-auto text-end">
                          <small
                            v-if="cart.final_total !== cart.total"
                            class="text-primary"
                            >優惠價<br/>
                          </small>
                          NT$ {{ $filters.currency(item.final_total) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="input-group w-50 mb-5 mt-3 border-dark">
                  <input
                    type="text"
                    v-model="coupon_code"
                    class="form-control rounded-0 border-bottom border-dark
                    border-top-0 border-start-0 border-end-0 shadow-none fs-5"
                    placeholder="請輸入優惠碼"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-dark border-bottom border-dark
                      border-top-0 border-start-0 border-end-0 rounded-0 fs-5"
                      type="button"
                      id="button-addon2"
                      @click="addCouponCode"
                    >
                      <i class="bi bi-send-check-fill"></i>
                    </button>
                  </div>
              </div>
              <router-link to="/products" class="text-primary fw-bold mb-5 h5">
                <i class="bi bi-chevron-double-left mr-1"></i>
                繼續購物
              </router-link>
              </template>
            </div>
            <div class="col-md-4">
              <div class="border p-4 mb-4 border-dark">
                <p class="h4 mb-4 text-primary fw-bold">訂單明細</p>
                <table class="table text-muted border-bottom border-dark">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        class="border-0 px-0 pt-4 font-weight-normal"
                      >
                        小計
                      </th>
                      <td class="text-end border-0 px-0 pt-4">
                        {{ $filters.currency(cart.total) }}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                      >
                        支付方式
                      </th>
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
                <div
                  v-if="cart.final_total !== cart.total"
                  class="d-flex justify-content-between mt-4"
                >
                  <p class="mb-0 h4 fw-bold text-primary">折扣價</p>
                  <p class="mb-0 h4 fw-bold text-primary">
                    {{ $filters.currency(cart.final_total) }}
                  </p>
                </div>
                <router-link
                  to="/checkoutfirst"
                  class="btn btn-dark w-100 mt-4"
                >
                  確認訂單
                </router-link>
              </div>
            </div>
          </div>
      </div>
      <div v-else class="text-center text-danger">
        <p class="h3 fw-bold mb-3">購物車無商品，快去逛逛吧 ~ </p>
        <router-link to="/products" class="text-dark h3">
          <i class="bi bi-chevron-double-left mr-1"></i>
          前往購物
        </router-link>
      </div>
    </div>
  </section>
  <SwiperComponent2 />
</template>

<script>
import { mapActions, mapState } from 'pinia';
import Swal from 'sweetalert2';
import cartStore from '@/stores/cartStore';
import toastMessage from '@/stores/toastMessage';
import SwiperComponent2 from '@/components/SwiperComponent2.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: '',
      },
      isLoading: false,
      coupon_code: '',
    };
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  methods: {
    ...mapActions(toastMessage, ['pushMessage']),
    ...mapActions(cartStore, ['getCart', 'addToCart']),
    getProducts() {
      this.isLoading = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/products/all`;
      this.axios
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          // alert(err.response.data.message);
        });
    },
    updateCart(data) {
      this.isLoading = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/cart/${data.id}`;
      const cart = {
        product_id: data.product_id,
        qty: data.qty,
      };
      this.axios
        .put(url, { data: cart })
        .then((res) => {
          this.pushMessage({
            style: 'success',
            title: '更新購物車',
            content: res.data.message,
          });
          this.isLoading = false;
          this.getCart(); // 重新渲染購物車列表
        })
        .catch((err) => {
          this.isLoading = false;
          this.pushMessage({
            style: 'danger',
            title: '更新購物車',
            content: err.response.data.message,
          });
        });
    },
    getProduct(id) {
      this.$router.push(`product/${id}`);
    },
    delCartItem(id) {
      this.status.loadingItem = id;
      const url = `${VITE_URL}/api/${VITE_PATH}/cart/${id}`;
      this.isLoading = true;
      this.axios
        .delete(url)
        .then((res) => {
          this.pushMessage({
            style: 'success',
            title: '移除購物車品項',
            content: res.data.message,
          });
          this.status.loadingItem = '';
          this.isLoading = false;
          this.getCart();
        })
        .catch((err) => {
          this.isLoading = false;
          this.pushMessage({
            style: 'danger',
            title: '移除購物車品項',
            content: err.response.data.message,
          });
        });
    },
    delAllCarts() {
      this.isLoading = true;
      Swal.fire({
        title: '確定清空購物車?',
        icon: 'question',
        showCancelButton: true,
        cancelButtonColor: '#6E7881',
        confirmButtonColor: '#198754',
        cancelButtonText: '取消',
        confirmButtonText: '確定',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `${VITE_URL}/api/${VITE_PATH}/carts`;
          this.axios
            .delete(url)
            .then((res) => {
              this.getCart();
              this.isLoading = false;
              Swal.fire({
                title: '清除購物車',
                content: res.data.message,
                icon: 'success',
              });
            })
            .catch((err) => {
              this.isLoading = false;
              Swal.fire({
                icon: 'error',
                title: err.response.data.message,
              });
            });
        } else this.isLoading = false;
      });
    },
    addCouponCode() {
      const url = `${VITE_URL}/api/${VITE_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.axios
        .post(url, { data: coupon })
        .then((res) => {
          this.pushMessage({
            style: 'success',
            title: '加入優惠券',
            content: res.data.message,
          });
          this.getCart();
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.pushMessage({
            style: 'danger',
            title: '加入優惠券',
            content: err.response.data.message,
          });
        });
    },
  },
  mounted() {
    this.getCart();
    this.getProducts();
  },
  components: {
    SwiperComponent2,
  },
};
</script>

<style>
@media (max-width: 576px) {
  .no-wrap {
    white-space: nowrap;
  }
}
.ec-container {
  min-height: calc(100vh - 56px - 76px);
}
</style>
