<template>
  <LoadingOverLay :active="isLoading" :z-index="1060"></LoadingOverLay>
  <section class="container">
    <div class="mt-4">
        <!-- 如購物車內有產品則顯示，沒有的話則顯示購物車目前無商品-->
      <div v-if="cart.carts && cart.carts.length > 0">
        <div class="text-end">
        <button class="btn btn-outline-danger" type="button" @click="delAllCarts">
          清空購物車
        </button>
      </div>
      <div class="mt-3">
        <h3 class="mt-3 mb-4 text-primary fw-bold">購物車</h3>
        <div class="row">
          <div class="col-md-8">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 ps-0">品名</th>
                  <th scope="col" class="border-0">數量</th>
                  <th scope="col" class="border-0" style="white-space: nowrap;">價格</th>
                  <th scope="col" class="border-0"></th>
                </tr>
              </thead>
              <tbody>
                <template v-if="cart.carts">
                  <tr v-for="item in cart.carts" :key="item.id"
                   class="border-bottom border-top border-dark">
                   <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                      <router-link :to="`/product/${item.id}`">
                        <img :src="item.product.imageUrl"
                        style="width: 80px; height: 80px; object-fit: cover;" />
                      </router-link>
                      <div class="d-inline-block ms-md-3 align-middle">
                        <p class="mb-0 fw-bold d-inline-block">{{item.product.title}}</p>
                        <div class="text-primary" v-if="item.coupon">已套用優惠券</div>
                      </div>
                   </th>
                  <td class="border-0 align-middle" style="max-width: 170px;">
                    <div class="row g-0">
                      <div class="d-flex flex-wrap">
                        <div class="col-7">
                          <div class="input-group">
                            <!-- @blur="updateCart(item) 是用來觸發編輯購物車的事件，
                            使用 blur 事件監聽，當焦點離開該元素時才會觸發事件，
                            為的是避免使用者在短時間大量觸發事件，影響整體效能 -->
                            <input type="number" class="form-control border-dark" min="1"
                            v-model.number="item.qty" @blur="updateCart(item)"
                            :disabled="status.loadingItem === item.id"/>
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="input-group">
                            <span class="input-group-text border-dark" id="basic-addon2">
                            {{item.product.unit }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle" style="max-width: 160px;">
                    <p class="mb-0 ms-auto">
                      <small v-if="cart.final_total !== cart.total"
                       class="text-primary text-center">優惠<br></small>
                      {{ $filters.currency(item.final_total) }}
                    </p>
                  </td>
                  <td class="border-0 align-middle">
                    <button type="button" class="btn btn-outline-dark "
                      @click="delCartItem(item.id)"
                      :disabled="status.loadingItem === item.id"
                      >
                    <i class="fas fa-spinner fa-pulse"
                     v-if="status.loadingItem === item.id"></i>
                     X
                    </button>
                  </td>
                </tr>
                </template>
              </tbody>
            </table>
            <div class="input-group w-50 mb-6 border-dark">
              <input type="text" v-model="coupon_code" class="form-control
                rounded-0 border-bottom border-dark
                border-top-0 border-start-0 border-end-0 shadow-none"
                placeholder="請輸入優惠碼" aria-label="Recipient's username"
                 aria-describedby="button-addon2">
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-bottom border-dark
                 border-top-0 border-start-0 border-end-0 rounded-0"
                  type="button" id="button-addon2"  @click="addCouponCode">
                  <i class="bi bi-send-check-fill"></i>
                </button>
              </div>
            </div>
            <router-link to="/products" class="text-primary fw-bold mb-5 h5">
                <i class="bi bi-chevron-double-left mr-1"></i>
                繼續購物
            </router-link>
          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4 border-dark">
              <p class="h4 mb-4 text-primary fw-bold">訂單明細</p>
              <table class="table text-muted border-bottom border-dark">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                    <td class="text-end border-0 px-0 pt-4">{{ $filters.currency(cart.total) }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">支付方式</th>
                    <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 fw-bold">總計</p>
                <p class="mb-0 h4 fw-bold">{{ $filters.currency(cart.total) }}</p>
              </div>
              <div v-if="cart.final_total !== cart.total"
               class = "d-flex justify-content-between mt-4">
                <p class="mb-0 h4 fw-bold text-primary">折扣價</p>
                <p class="mb-0 h4 fw-bold text-primary">
                  {{ $filters.currency(cart.final_total) }}
                </p>
              </div>
              <router-link to="/checkoutfirst" class="btn btn-dark w-100 mt-4">
                確認訂單
              </router-link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div v-else class="text-center text-danger">
        <p>購物車無商品，快去逛逛</p>
        <router-link to="/products" class="text-dark mt-6 h5">
          <i class="bi bi-chevron-double-left mr-1"></i>
            前往購物
          </router-link>
      </div>
    </div>
  </section>
  <section class="container mt-5 ec-container">
      <h2 class="text-center fw-bold">熱銷商品</h2>
        <div class="d-flex justify-content-center my-4">
          <swiper
          :autoplay = true
          :slidesPerView="1"
          :spaceBetween="10"
          :breakpoints="{
            '375': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }"
          :modules="modules"
          class="mySwiper">
          <swiper-slide v-for="product in products" :key="product.id">
            <div class="row">
            <div class="col-md-4 col-sm">
              <div class="card swiper-card mb-sm-4 ms-md-4 m-sm-auto">
                <router-link :to="`/product/${product.id}`" class="swiper-card-link">
                <img :src="product.imageUrl" class="swiper-card-img" />
                </router-link>
                <div class="card-body">
                  <span class="badge rounded-pill bg-primary mb-2">{{product.category}}</span>
                  <h5 class="card-title fs-6 fw-bold">{{ product.title }}</h5>
                  <p class="card-text">NT$ {{ product.price }}</p>
                  <a class="btn btn-primary d-flex justify-content-center text-white"
                    @click.prevent="addToCart(product.id)">
                    <i class="bi bi-cart-check me-2">
                    </i>加入購物車</a>
                </div>
              </div>
              </div>
            </div>
            </swiper-slide>
        </swiper>
      </div>
  </section>
</template>

<style>
@media (max-width: 576px) {
  .no-wrap {
    white-space: nowrap;
  }
}
   .swiper {
    width: 100%;
    height: 100%;
  }
  .ec-container {
    min-height: calc(100vh - 56px - 76px);
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<script>
import { mapActions, mapState } from 'pinia';
import Swal from 'sweetalert2';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import cartStore from '../../stores/cartStore';
import toastMessage from '../../stores/toastMessage';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
      this.axios.get(url)
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
      this.axios.put(url, { data: cart })
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
      this.axios.delete(url)
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
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `${VITE_URL}/api/${VITE_PATH}/carts`;
          this.axios.delete(url)
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
        } else (this.isLoading = false);
      });
    },
    addCouponCode() {
      const url = `${VITE_URL}/api/${VITE_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.axios.post(url, { data: coupon })
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
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
