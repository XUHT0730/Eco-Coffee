<template>
  <LoadingOverLay :active="isLoading" :z-index="1060" />
  <section class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mt-3">
        <li class="breadcrumb-item">
          <RouterLink to="/home">首頁</RouterLink>
        </li>
        <li class="breadcrumb-item">
          <RouterLink to="/products">全部商品</RouterLink>
        </li>
        <li class="breadcrumb-item active fw-bold" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <div class="col-md-6 align-items-center">
        <img
          v-if="!product.imagesUrl"
          :src="product.imageUrl"
          class="img-fluid mb-3 object-fit-cover"
          width="525"
          :alt="product.title"
        />
        <SwiperComponent v-else :product="product" />
      </div>
      <article class="col-md-5">
        <h2 class="fw-bold mb-3">{{ product.title }}</h2>
        <h5>
          <span class="badge bg-primary mb-2">{{ product.category }}</span>
        </h5>
        <div class="row d-flex flex-column">
          <div class="col">
            <p class="fs-6">{{ product.description }}</p>
          </div>
          <div class="col">
            <p class="fs-5 text-dark mt-2 mb-1">【 規格 】</p>
            <p class="text-muted">{{ product.content }}</p>
          </div>
        </div>
        <div class="h5" v-if="!product.price">
          {{ product.origin_price }} 元
        </div>
        <del class="h6" v-if="product.price"
          >原價 {{ product.origin_price }} 元</del
        >
        <div class="h4 text-primary fw-bold" v-if="product.price">
          現在只要 NT$ {{ product.price }} 元<span class="ms-3"
            >/ {{ product.unit }}</span
          >
        </div>
        <hr />
        <div class="row my-4">
          <div class="col-6">
            <!-- <select name="unit" class="form-select mr-3" v-model="product.num">
                  <option :value="num" v-for="num in 5" :key="num">
                    {{ num }} {{ product.unit }}
                  </option>
                </select> -->
            <button
              class="btn btn-outline-primary w-100"
              type="button"
              @click.prevent="setTrack(product.id)"
            >
              <span v-if="trackList.includes(product.id)">
                <i class="bi bi-heart-fill text-danger"></i>
              </span>
              <span v-else><i class="bi bi-heart"></i></span>
              加入收藏
            </button>
          </div>
          <div class="col-6">
            <button
              class="btn btn-primary w-100"
              type="button"
              @click.prevent="addToCart(product.id)"
            >
              <i class="bi bi-cart-check"></i>
              加入購物車
            </button>
          </div>
        </div>
      </article>
    </div>
  </section>
  <section class="container mt-6">
    <hr />
    <h2 class="text-center fw-bold my-5">熱銷商品</h2>
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
                  <img :src="product.imageUrl" class="swiper-card-img" />
                </router-link>
                <div class="card-body">
                  <span class="badge rounded-pill bg-primary mb-2">{{
                    product.category
                  }}</span>
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
import Swal from 'sweetalert2';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import cartStore from '@/stores/cartStore';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperComponent from '@/components/SwiperComponent.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      isLoading: false,
      thumbsSwiper: null,
      product: {},
      products: [],
      id: '',
      trackList: [],
    };
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
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
    getProduct() {
      const url = `${VITE_URL}/api/${VITE_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.axios
        .get(url)
        .then((res) => {
          this.product = res.data.product;
          // 此段用於 form-select 但目前無法將選擇的數字帶入購物車中
          // this.product = {
          //   ...res.data.product,
          //   num: 1,
          // };
          this.isLoading = false;
        })
        .catch(() => {
          // console.log(err);
          this.isLoading = false;
        });
    },
    getTrack() {
      const trackListStr = localStorage.getItem('homeTrack');
      if (trackListStr) {
        this.trackList = JSON.parse(trackListStr);
      }
    },
    setTrack(id) {
      if (this.trackList.includes(id)) {
        const index = this.trackList.findIndex((item) => item === id);
        this.trackList.splice(index, 1);
        Swal.fire({
          icon: 'success',
          title: '己移除收藏清單',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: '己加入收藏清單',
          showConfirmButton: false,
          timer: 1500,
        });
        this.trackList.push(id);
      }
      localStorage.setItem('homeTrack', JSON.stringify(this.trackList));
      this.getTrack();
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    SwiperComponent,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  created() {
    this.id = this.$route.params.productId; // 從路由取得產品 id
    this.getProducts();
    this.getProduct();
    this.getTrack();
  },
};
</script>
<style>
.swiper {
  width: 100%;
  height: 100%;
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
