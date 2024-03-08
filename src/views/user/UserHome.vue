<template>
  <header class="container header"
   style="background-image:
    url(https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709543433230.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RKdXij%2BJKl7scyyCrzbEoL7DKU%2BhtTvd%2B19Qhee9AUDq%2FoXrgyD8lS%2BZCheCWRKgOfScfomYaSL3rgCwbQeThOe2rtiKYmypjiZnqy1hZF0ldnixATNZZaCldVhwKytNUTZHjWoP58IeUI9FLiRG6PMhzknkCEzSP4OdmF54GOEvdYBkQp3D1QhPENbhBB4bjd9WbxuGjJHRuDY5B4pItsX4ZbMPpLQQeOpGiO%2F2AjrnOIW2giK%2BDc4eD4SAZowcPBNK8YJCo79Z9KqZQ6lRS%2FInyi%2BNkpH3UnYfYzqFTN6PEHNva892jSwMMYMtKCu5cC7ReW%2FfkBTEY%2B9GR2KF7g%3D%3D);">
   <div class="d-flex align-items-center h-100 position-relative" style="z-index: 1;">
    <div class="header-text">
      <h1>愛咖啡更支持咖啡</h1>
        <RouterLink :to="`/article/`" type="button"
           class="btn btn-primary btn-lg">
           了解公平貿易
          </RouterLink>
    </div>
  </div>
  </header>
  <section class="container mt-6">
    <h2 class="text-center my-6">選購公平貿易咖啡商品</h2>
    <div class="d-flex justify-content-center align-items-center">
      <div class="row row-cols-3 mb-4 g-4 col-lg-10 col-md-9">
          <div class="col" v-for="(product,index) in products" :key="product.id">
            <!-- 只顯示每個 category 的前三個產品 -->
            <template v-if="index < 3 ||products[index - 1].category !== product.category">
              <div class="card position-relative" >
                <img class="card-img-top object-fit-cover w-70"
                :src="product.imageUrl" alt="" height="325">
                <div class="card-body position-relative">
                  <div class="bg-secondary fs-6 px-3 py-1 text-white position-absolute category">
                      {{ product.category }}
                  </div>
                  <h5 class="card-title pt-5 px-1">
                    <router-link :to="`/product/${product.id}`">
                      {{ product.title }}
                    </router-link>
                  </h5>
                    <!-- Track icon -->
                    <div class="card_Favorite position-absolute" @click="setTrack(product.id)">
                      <span v-if="trackList.includes(product.id)">
                        <i class="bi bi-heart-fill fs-4 text-danger"></i>
                      </span>
                      <span v-else>
                        <i class="bi bi-heart fs-4 text-danger"></i>
                      </span>
                    </div>
                    <td>
                      <div class="h5" v-if="!product.price">
                        {{ item.origin_price }} 元
                      </div>
                      <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
                      <div class="h5" v-if="product.price">
                        現在只要 {{ product.price }} 元
                      </div>
                  </td>
                  <button class="btn btn-primary w-100" type="button"
                  @click.prevent="addToCart(product.id)">
                  <i class="bi bi-cart-check"></i>
                  加入購物車</button>
                </div>
              </div>
            </template>
            </div>
      </div>
       </div>
       <div class="row justify-content-center">
          <RouterLink :to="`/products`" type="button"
           class="btn btn-outline-primary fs-5 py-3 w-25">
                查看更多商品
          </RouterLink>
        </div>
  </section>
  <section class="container mt-6">
    <h2 class="me-2">用分類搜尋</h2>
    <div class="container">
      <div class="row row-cols-2 card-img my-4 g-4 col-lg-10 col-md-9">
        <div class="col" v-for="item in categories" :key="item">
          <img class="card-img-top object-fit-cover"
           :src="categoryImages[item]" height="500" width="250">
          <router-link class="py-2 d-block text-muted"
          :to="`/products?category=${item}`">{{ item }}</router-link>
        </div>
      </div>
     </div>
  </section>

  <section class="container mt-6">
      <div class="d-flex justify-content-center">
        <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }"
        :modules="modules"
        class="mySwiper">
        <swiper-slide v-for="product in products" :key="product.id">
          <div class="row row-cols-md-4 row-cols-sm-2 g-3">
            <div class="col-xs-2 col-sm col-md-4 col-lg">
                <div class="card" style="width: 14rem">
                  <div
                  style="height: 200px; background-size: cover; background-position: center;"
                  :style="{backgroundImage:`url(${product.imageUrl})`}"
                  class="card-img-top"
                  alt=""></div>
                  <div class="card-body">
                    <h5 class="card-title fs-6 fw-bold">{{ product.title }}</h5>
                    <p class="card-text">NT$ {{ product.price }}</p>
                    <a type="button" class="btn btn-primary d-flex justify-content-center"
                      @click.prevent="addToCart(product.id)">立即購買</a>
                  </div>
                </div>
              </div>
          </div>
          </swiper-slide>
      </swiper>
    </div>
  </section>

  <section class="container mt-6">
    <h2 class="me-2">什麼是公平貿易咖啡豆 ?

    </h2>
  </section>

  <FooterLayout></FooterLayout>
</template>

<style lang="scss" scoped>
.card-img {
    overflow: hidden;
    border-radius: 10px;
    img {
      transition: all 0.6s ease;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  .header {
    height: 504px;
    background-position: center center;
    background-size: cover;
    position: relative;
  }
  .header::after {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.3;
}
.header-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>

<script>
import { mapActions } from 'pinia';
import Swal from 'sweetalert2';
import { Swiper, SwiperSlide } from 'swiper/vue';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import FooterLayout from '../../components/FooterLayout.vue';
import cartStore from '../../stores/cartStore';
// Import Swiper Vue.js components

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
      categories: ['赫根山 Mount Hagen', '生態綠 OKOGREEN', '畢嘉士', '微笑人咖啡 Laughing Man Coffee'],
      categoryImages: {
        '赫根山 Mount Hagen': 'https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715033061.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=n85X7ObXNieSwqZLOSrnYmhIL83qxdhcGsxGJzhLIUUageDPpp6hFX%2B8WBZ1x0x%2B5F%2FkYgtlj4cR9%2F5Fi5x3i9LzeB3Q6mzwQcbPhDQW8iIINJPhaJy8HUu1tHKFKXTQbWIqgwSEBv%2BN%2BEdaqQU%2FSmKpbBh2iAd8vLvEWtLe3fFI%2FfE1Dg%2Bw%2FWH4n5vOu0JwZa5yP0O%2BVgZVS1SpfZQP97VxS5U1hrOKtyMjXOoZz8QT46lpiHJFsFzL3XyoGfg0UqdY8MkhYWjfSktfuegFUhVNLvZuAN0%2FG2nlcH8tGYFrAw54or9hlu1xRpiYm8feAyYAqFZnOJ1S5rdEFpTRjw%3D%3D',
        '生態綠 OKOGREEN': 'https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715556894.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Tk%2FEOX124uZ9R3QmgPD%2F6hemCuWb%2FIubWOqc4vLAXsR0BsRvNvKCttsBdA4rsmJdvbqBWGSN8ytXPC1yDcOzhOi2gQQTyb4XIYjCpBSLGDikOiNcDAGm%2F%2BjZHwx8izYUxOemNuYb8JYq9rxutE6%2FiMB8IM%2FhEashSovcwpGVMMcx0hRwujaUBRyexKfmJRBgxzduOdf%2FZsW0kA8Vp45IFJ95R3o7j2NOaT%2BV1vW6M%2BgzQb3OkS96FZ9hCw3n97ZLP5WdBJgkdCMVanbEsIbdbjemrnQDC8xWyV17xPemwVajES5wwLfbM9AvQgOfnNlMTGqRRHV81j%2BWbzDxsoGNQA%3D%3D',
        畢嘉士: 'https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715836608.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=E4AK9zjU%2FYtRqaXPjzRupgauGSOBzBfGfIw6MzzPMarYin5jXuP44HGh%2FA2zxIbXQ8gekZMw0wdiIbfZAhc1NIm55RJDHor7nerOCmbXTdI0A1oFyIpmvWTdz3CmF%2BLDt1%2F1WzGUFsaX3P9G29FCSA7i%2B5qBDfRAwxxDzeBT08wefAlGGo1bpLWATFR74CQvIAuEkynQG1zOpsjwbx0RShgg9mEgh4rEgvwv5mz59vOT97ObCcjwuy85NjpVznoKnTrOyyCgTk4Nzu3ADJXjwTozoaK0k%2FYf12e6BH5K7kYS2sNL0%2FDyF1nFcjUJIIb74F88EVO0dqlE48Hd4X%2FzhA%3D%3D',
        '微笑人咖啡 Laughing Man Coffee': 'https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709716136349.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Pu7xrGVSxcwMV5la8oQGW9F%2BDMRw7ZPbjWygBXtDl9I%2BXd4vORmgmvSFahlVoULqqHOsd%2FL6mPA5u%2B4ckyBPC3BfomiFLW8fECvfN26cnmCOtcED6ldIAUhAjp8rTfXoEZjZj02YT1nStQKHsWkuooFp6ZZ%2FaJsmqTRt4%2BgX%2F6gzB3DoAxXXSqHy5UjzbhLXK%2Fs2IXPbVq%2BwfzwR27W7tQ8SxvUMmdKWScYi5NxL%2BFJjZVS9LmiIAHY%2FagwtfOS%2B5ieXZ4ZMrpZ4m0bPSe2qbHjezy61RnddLf0FmIerEJa%2BmxLKK9dy3P1jYZOtsYi86awpKnxsjrw1qpOxrE27NA%3D%3D',
      },
      trackList: [],
    };
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    getProducts() {
      // const { category = '' } = this.$route.query;
      const getProductsUrl = `${VITE_URL}/api/${VITE_PATH}/products/all`;
      this.isLoading = true;
      this.axios.get(getProductsUrl)
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
    FooterLayout,
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
    this.getTrack();
  },
};
</script>
