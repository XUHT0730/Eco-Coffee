<template>
  <section class="container mt-6">
    <h2 class="text-center fw-bold mb-5">熱銷商品</h2>
    <div class="d-flex justify-content-center my-4">
      <swiper
        :autoplay="true"
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
        class="mySwiper"
      >
        <swiper-slide v-for="product in products" :key="product.id">
          <div class="row">
            <div class="col-md-4 col-sm">
              <div class="card swiper-card mb-sm-4 ms-md-4 m-sm-auto">
                <router-link
                  :to="`/product/${product.id}`"
                  class="swiper-card-link"
                >
                  <img :src="product.imageUrl" class="swiper-card-img" :alt="product.title" />
                </router-link>
                <div class="card-body">
                  <span class="badge bg-secondary text-white mb-2 px-2 py-2">
                    {{ product.category }}
                  </span>
                  <h5 class="card-title fs-6 fw-bold">{{ product.title }}</h5>
                  <p class="card-text">NT$ {{ product.price }}</p>
                  <a
                    class="btn btn-primary d-flex justify-content-center text-white"
                    @click.prevent="addToCart(product.id)"
                  >
                    <i class="bi bi-cart-check me-2"> </i>加入購物車</a
                  >
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import { mapActions } from 'pinia';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import cartStore from '@/stores/cartStore';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      trackList: [],
    };
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    getProducts() {
      // const { category = '' } = this.$route.query;
      const getProductsUrl = `${VITE_URL}/api/${VITE_PATH}/products/all`;
      this.isLoading = true;
      this.axios
        .get(getProductsUrl)
        .then((res) => {
          // 將資料存起來
          this.products = res.data.products;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.pushMessage({
            style: 'danger',
            title: '取得產品資訊失敗',
            content: err.response.data.message,
          });
        });
    },
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
  created() {
    this.getProducts();
  },
};
</script>
<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
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
