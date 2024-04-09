<template>
  <LoadingOverLay :active="isLoading" :z-index="1060" class="text-center" />
  <section class="position-relative mb-6 ec-container">
    <div v-if="filterProducts.length > 0">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div
            class="col-12 text-center text-dark mt-xl-7 mt-lg-7 mt-md-7"
            data-aos="fade-down"
          >
            <div class="h3 fw-bold mt-5 mb-2">追蹤商品</div>
          </div>
          <div class="row row-cols-4 g-4 col-lg-12 col-md-10 mb-5 d-flex">
            <template v-for="item in filterProducts" :key="item.id">
              <div
                class="col-12 col-xl-3 col-lg-3 d-flex justify-content-center"
              >
                <div
                  class="card product-card shadow bg-white mb-sm-4 ms-md-4 m-sm-auto"
                >
                  <router-link
                    :to="`/product/${item.id}`"
                    class="product-card-link"
                  >
                    <img
                      :src="item.imageUrl"
                      :alt="item.title"
                      class="product-card-img"
                    />
                  </router-link>
                  <div class="card-body position-relative">
                    <div class="row d-flex">
                      <div class="col">
                        <div class="w-100">
                          <div
                            class="bg-secondary position-absolute
                             fs-9 px-2 py-1 text-white category"
                          >
                            {{ item.category }}
                          </div>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="w-100 text-end">
                          <div @click="setTrack(item.id)">
                            <span v-if="trackList.includes(item.id)">
                              <i class="bi bi-heart-fill fs-4 text-danger"></i>
                            </span>
                            <span v-else
                              ><i class="bi bi-heart fs-4 text-danger"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 class="card-title pt-2 fw-bold">
                      <router-link :to="`/product/${item.id}`">
                        {{ item.title }}
                      </router-link>
                    </h5>
                    <td>
                      <div class="h5" v-if="!item.price">
                        {{ item.origin_price }} 元
                      </div>
                      <del class="h6 text-dark" v-if="item.price">
                        原價 {{ item.origin_price }} 元</del
                      >
                      <div class="h5 fw-bold" v-if="item.price">
                        現在只要 {{ item.price }} 元
                      </div>
                    </td>
                    <button
                      class="btn btn-primary w-100"
                      type="button"
                      @click.prevent="addToCart(item.id)"
                    >
                      <i class="bi bi-cart-check"></i>
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center mb-7 mb-md-9 pt-7 pt-md-9">
      <h2 class="text-dark mt-6">沒有追蹤商品，快去逛逛</h2>
      <p class="text-primary my-4 mb-md-5">前往商品列表</p>
      <RouterLink to="/products" class="fs-5 btn btn-primary py-3 px-5">
        查看商品
      </RouterLink>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cartStore';
import trackStore from '@/stores/trackStore';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      cart: {},
    };
  },
  computed: {
    ...mapState(trackStore, ['trackList']),
    // 取得過濾後的產品清單
    filterProducts() {
      return this.products.filter((item) => this.trackList.includes(item.id));
    },
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(trackStore, ['getTrack', 'setTrack']),
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
  },
  mounted() {
    this.getProducts();
    this.getTrack();
  },
};
</script>

<style>
.ec-container {
  min-height: calc(100vh - 56px - 76px);
}
</style>
