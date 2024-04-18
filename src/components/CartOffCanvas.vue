<template>
  <div
    ref="cartOffcanvas"
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header bg-primary py-4 text-white">
      <h4
        class="offcanvas-title text-white fw-bold"
        id="offcanvasRightLabel"
        style="white-space: nowrap"
      >
        購物車
      </h4>
      <button
        type="button"
        class="btn d-flex"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        style="margin-left: 15rem"
      >
        <i class="bi bi-x-lg fs-5 text-white fw-bold"></i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="text-end my-3">
        <button
          type="button"
          v-show="this.carts?.length"
          class="btn btn-outline-secondary"
          @click="delAllCarts"
        >
          清空購物車
        </button>
      </div>
      <div class="position-relative h-75">
        <!-- if 購物車中無商品 -->
        <div
          class="text-center position-absolute top-50 start-50 translate-middle"
          v-if="carts.length === 0"
        >
          <p class="fs-3 my-4">購物車為空</p>
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="offcanvas"
            @click="$router.push('/products')"
          >
            前往購物
          </button>
        </div>
        <!-- if 購物車有商品 -->
        <div v-else>
          <template v-if="cart.carts">
            <div v-for="item in cart.carts" :key="item.id">
              <div
                class="d-flex align-items-center mb-2 pb-2 border-bottom"
                v-if="item.product"
              >
                <img
                  :src="item.product.imageUrl"
                  :alt="item.product.title"
                  class="object-fit-cover"
                  style="width: 80px; height: 80px"
                />
                <div class="w-100 p-3 position-relative">
                  <button
                    type="button"
                    class="btn btn-outline-dark position-absolute fw-bold border-0"
                    style="top: 10px; right: 9px"
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
                    <span>{{ item.qty }} {{ item.product.unit }} x </span>
                    <span>NT$ {{ item.product.price }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <p class="text-end fs-3 mb-4">
                總計$NT {{ $filters.currency(cart.total) }}
              </p>
              <button
                type="button"
                class="btn btn-primary w-100 py-2 mb-4"
                @click="this.$router.push('/cart')"
                data-bs-dismiss="offcanvas"
              >
                前往結帳
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import Swal from 'sweetalert2';
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import cartStore from '@/stores/cartStore';
import toastMessage from '@/stores/toastMessage';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      offcanvas: {},
      status: {
        loadingItem: '',
      },
    };
  },
  computed: {
    // ...mapState(cartStore, ['carts']),
    ...mapState(cartStore, ['cart', 'carts']),
  },
  methods: {
    ...mapActions(toastMessage, ['pushMessage']),
    ...mapActions(cartStore, ['getCart']),
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
    delAllCarts() {
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
              Swal.fire({
                title: '清除購物車',
                content: res.data.message,
                icon: 'success',
              });
            })
            .catch((err) => {
              Swal.fire({
                icon: 'error',
                title: err.response.data.message,
              });
            });
        }
      });
    },
    delCartItem(id) {
      this.status.loadingItem = id;
      const url = `${VITE_URL}/api/${VITE_PATH}/cart/${id}`;
      this.axios
        .delete(url)
        .then((res) => {
          this.pushMessage({
            style: 'success',
            title: '移除購物車品項',
            content: res.data.message,
          });
          this.status.loadingItem = '';
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
  },
  mounted() {
    this.getProducts();
    this.getCart();
    this.offcanvas = new Offcanvas(this.$refs.cartOffcanvas, {
      toggle: false,
    });
  },
};
</script>

<style lang="scss">
</style>
