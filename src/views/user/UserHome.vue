<template>
  <LoadingOverLay :active="isLoading" :z-index="1060"></LoadingOverLay>
  <header class="header"
   style="background-image:
    url(https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709543433230.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RKdXij%2BJKl7scyyCrzbEoL7DKU%2BhtTvd%2B19Qhee9AUDq%2FoXrgyD8lS%2BZCheCWRKgOfScfomYaSL3rgCwbQeThOe2rtiKYmypjiZnqy1hZF0ldnixATNZZaCldVhwKytNUTZHjWoP58IeUI9FLiRG6PMhzknkCEzSP4OdmF54GOEvdYBkQp3D1QhPENbhBB4bjd9WbxuGjJHRuDY5B4pItsX4ZbMPpLQQeOpGiO%2F2AjrnOIW2giK%2BDc4eD4SAZowcPBNK8YJCo79Z9KqZQ6lRS%2FInyi%2BNkpH3UnYfYzqFTN6PEHNva892jSwMMYMtKCu5cC7ReW%2FfkBTEY%2B9GR2KF7g%3D%3D);">
   <div class="container d-flex align-items-center h-100 position-relative" style="z-index: 1;">
    <div class="header-text">
      <h1 class="fw-bold mb-3">發現公平貿易咖啡的美味世界</h1>
        <RouterLink :to="`/about`" type="button"
           class="btn btn-primary btn-lg" style="border-radius: 0;">
           了解公平貿易
          </RouterLink>
    </div>
  </div>
  </header>
  <section class="container mt-6">
    <h2 class="text-center mb-5 fw-bold">支持公平貿易的店家</h2>
    <div class="row justify-content-center">
      <div class="col-lg-10 col-md-9 col-sm-12">
        <div class="row row-cols-lg-2 row-cols-md-2 g-4">
          <div class="col-sm-1 mb-4" v-for="item in categories" :key="item">
              <router-link :to="`/products?category=${item}`" class="d-block text-muted">
              <div class="image-container">
                <img :src="categoryImages[item]" class="card-img-top object-fit-cover title-image"/>
                <div class="overlay">{{item}}</div>
              </div>
              <h3 class="my-3 text-center d-md-none d-lg-none">{{item}}</h3>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-light py-6 mt-6">
    <div class="container">
      <div class="row justify-content-center mb-3">
            <div class="col-md-12 text-center">
                <h1 class="fw-bold mt-3">以永續經營的精神 發展咖啡文化</h1>
                <h2>打破咖啡產業中的不公平和不平等</h2>
            </div>
        </div>
        <div class="row justify-content-center mt-6">
            <div class="col-md-5">
                <img src="@/assets/images/fair-trand.png"
                class="w-100 h-70 object-fit-cover" alt="fair-trand">
            </div>
            <div class="col-md-5 d-flex align-items-center">
                <div class="text-center">
                    <h2 class="fw-bold mt-3">以永續經營的精神 發展咖啡文化</h2>
                    <p class="text-primary me-3 fw-bold">我們相信，每一杯咖啡都能成為改變世界的力量。</p>
                    <p>我們的使命是通過推動公平貿易和提供最優質的咖啡，促進社會正義和環境保護。我們相信，每一杯咖啡都能成為改變世界的力量。</p>
                </div>
            </div>
        </div>
      <div class="row justify-content-center mt-6 flex-row-reverse">
        <div class="col-md-5">
          <img class="w-100 object-fit-cover"
           src="@/assets/images/whatisfairtrand.png" alt="">
        </div>
        <div class="col-md-5 d-flex align-items-center">
          <div class="text-center">
            <h2 class="fw-bold mt-3">合作咖啡豆品牌</h2>
            <p class="text-primary fw-bold me-3">以公平貿易的角度，並創造利潤共享的平台</p>
            <p>
            我們與四家頂級咖啡豆品牌合作，包括 Mount Hagen、OKOGREEN、
            畢嘉士和微笑人咖啡。我們選擇這些品牌是因為它們與我們的價值觀和使命相契合，
            並致力於推動公平貿易的發展。
           </p>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section class="container mt-6">
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

<style lang="scss" scoped>
* {box-sizing: border-box;}
.image-container {
  position: relative;
  width: 100%;
  max-width: 500px;
}
.title-image {
  display: block;
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}
.image-container:hover .overlay {
  opacity: 1;
}
.header-img {
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
    overflow: hidden;
    transition: transform 0.6s ease;
  }
  .header:hover {
  transform: scale(1.03);
}
  .header::after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709543433230.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RKdXij%2BJKl7scyyCrzbEoL7DKU%2BhtTvd%2B19Qhee9AUDq%2FoXrgyD8lS%2BZCheCWRKgOfScfomYaSL3rgCwbQeThOe2rtiKYmypjiZnqy1hZF0ldnixATNZZaCldVhwKytNUTZHjWoP58IeUI9FLiRG6PMhzknkCEzSP4OdmF54GOEvdYBkQp3D1QhPENbhBB4bjd9WbxuGjJHRuDY5B4pItsX4ZbMPpLQQeOpGiO%2F2AjrnOIW2giK%2BDc4eD4SAZowcPBNK8YJCo79Z9KqZQ6lRS%2FInyi%2BNkpH3UnYfYzqFTN6PEHNva892jSwMMYMtKCu5cC7ReW%2FfkBTEY%2B9GR2KF7g%3D%3D);
    background-color: black;
    opacity: 0.3;
    background-size: cover;
    background-position: center;
    z-index: 0;
  }
.header-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 1;
}
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

<script>
import { mapActions } from 'pinia';
import Swal from 'sweetalert2';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
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
      isLoading: false,
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
