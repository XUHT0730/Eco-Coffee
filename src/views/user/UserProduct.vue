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
          width="525px"
          :alt="product.title"
        />
        <SwiperComponent v-else :product="product"/>
      </div>
      <article class="col-12 col-md-5 col-lg-5">
        <h2 class="fw-bold mb-3">{{ product.title }}</h2>
        <h5>
          <span class="badge bg-primary mb-2">{{ product.category }}</span>
        </h5>
        <div class="row d-flex flex-column">
          <div class="col">
            <p class="fs-5 text-dark mt-2 mb-1">【 商品說明 】</p>
            <p class="text-muted">{{ product.description }}</p>
          </div>
          <div class="col">
            <p class="fs-5 text-dark mt-2 mb-1">【 商品規格 】</p>
            <p class="text-muted">{{ product.content }}</p>
          </div>
        </div>
        <!-- 如果原價等於現價，就只顯示現價 -->
        <div
          class="h4 text-primary fw-bold"
          v-if="product.origin_price === product.price"
        >
          {{ product.price }}元<span class="ms-3">/ {{ product.unit }}</span>
        </div>
        <div v-else>
          <del class="h6">原價 {{ product.origin_price }} 元</del>
          <div class="h4 text-primary fw-bold" v-if="product.price">
            現在只要 NT$ {{ product.price }} 元<span class="ms-3"
              >/ {{ product.unit }}</span
            >
          </div>
        </div>
        <hr />
        <div class="row my-4">
          <div class="col-12">
            <select name="unit" class="form-select mr-3" v-model="product.qty">
              <option selected disabled>選擇購買數量</option>
              <option :value="qty" v-for="qty in 5" :key="qty">
                {{ qty }} {{ product.unit }}
              </option>
            </select>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-6">
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
              @click.prevent="addToCart(product.id, product.qty)"
            >
              <i class="bi bi-cart-check"></i>
              加入購物車
            </button>
          </div>
        </div>
      </article>
    </div>
  </section>
  <SwiperComponent2 @click="handleClick"/>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cartStore';
import trackStore from '@/stores/trackStore';
import SwiperComponent2 from '@/components/SwiperComponent2.vue';
import SwiperComponent from '@/components/SwiperComponent.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      isLoading: false,
      thumbsSwiper: null,
      product: {
        qty: 1,
      },
      products: [],
      id: '',
    };
  },
  computed: {
    ...mapState(trackStore, ['trackList']),
    ...mapState(cartStore, ['cart']),
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'addToCart']),
    ...mapActions(trackStore, ['getTrack', 'setTrack']),
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
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    handleClick() {
      window.location.reload(); // 點擊時刷新網頁
    },
  },
  components: {
    SwiperComponent,
    SwiperComponent2,
  },
  created() {
    this.id = this.$route.params.productId; // 從路由取得產品 id
    this.getProducts();
    this.getProduct();
    this.getTrack();
    this.getCart();
  },
};
</script>
