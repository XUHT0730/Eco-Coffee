<template>
  <LoadingOverLay :active="isLoading" :z-index="1060"></LoadingOverLay>
  <header
    class="header"
    style="
      background-image: url(https://images.unsplash.com/photo-1500353391678-d7b57979d6d2?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    "
  >
    <div
      class="container d-flex align-items-center h-100 position-relative"
      style="z-index: 1"
    >
      <div class="header-text">
        <h1 class="fw-bold mb-3 text-nowrap">發現公平貿易咖啡的美味世界</h1>
        <p class="h4 mb-3 no-wrap">
          帶您品嘗最新鮮、友善的咖啡豆
        </p>
        <RouterLink
          :to="`/about`"
          type="button"
          class="btn btn-primary btn-lg mt-2"
          style="border-radius: 0"
        >
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
            <router-link
              :to="`/products?category=${item}`"
              class="d-block text-muted clickable-link"
            >
              <div class="image-container">
                <img
                  :src="categoryImages[item]"
                  :alt="item.categories"
                  class="card-img-top object-fit-cover title-image"
                  @load="loadDone"
                />
                <div class="overlay">{{ item }}</div>
              </div>
              <h3 class="my-3 text-center d-md-none d-lg-none">
                <i class="bi bi-arrow-up fw-bold"></i>{{ item }}
              </h3>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container mt-6">
    <hr />
    <div class="row justify-content-center my-5">
      <div class="col-md-8 offset-md-2 text-center">
        <div class="row">
          <div class="col-md-4">
            <img
              src="/src/assets/images/homeimg.jpg"
              class="rounded-circle mr-5"
              style="width: 180px; height: 190px; object-fit: cover"
            />
          </div>
          <div class="col-md-6 text-start">
            <h2 class="ff-minor fw-bold text-primary">Eco-Coffee</h2>
            <p>
              我們致力於提供來自世界各地最優質的公平貿易咖啡豆，支持農民和生產者，同時倡導對環境的尊重和保護。<br />
              相信透過公平貿易，我們可以共同創造一個更美好的世界，並讓每一杯咖啡都充滿著正能量和美好的未來。
            </p>
            <router-link to="/products" class="btn btn-primary float-end">
              查看商品
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </section>
  <SwiperComponent2 />
</template>

<script>
import { mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import SwiperComponent2 from '@/components/SwiperComponent2.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      product: {},
      categories: [
        '赫根山 Mount Hagen',
        '生態綠 OKOGREEN',
        '畢嘉士',
        '微笑人咖啡 Laughing Man Coffee',
      ],
      categoryImages: {
        '赫根山 Mount Hagen':
          'https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715033061.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=n85X7ObXNieSwqZLOSrnYmhIL83qxdhcGsxGJzhLIUUageDPpp6hFX%2B8WBZ1x0x%2B5F%2FkYgtlj4cR9%2F5Fi5x3i9LzeB3Q6mzwQcbPhDQW8iIINJPhaJy8HUu1tHKFKXTQbWIqgwSEBv%2BN%2BEdaqQU%2FSmKpbBh2iAd8vLvEWtLe3fFI%2FfE1Dg%2Bw%2FWH4n5vOu0JwZa5yP0O%2BVgZVS1SpfZQP97VxS5U1hrOKtyMjXOoZz8QT46lpiHJFsFzL3XyoGfg0UqdY8MkhYWjfSktfuegFUhVNLvZuAN0%2FG2nlcH8tGYFrAw54or9hlu1xRpiYm8feAyYAqFZnOJ1S5rdEFpTRjw%3D%3D',
        '生態綠 OKOGREEN':
          'https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715556894.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Tk%2FEOX124uZ9R3QmgPD%2F6hemCuWb%2FIubWOqc4vLAXsR0BsRvNvKCttsBdA4rsmJdvbqBWGSN8ytXPC1yDcOzhOi2gQQTyb4XIYjCpBSLGDikOiNcDAGm%2F%2BjZHwx8izYUxOemNuYb8JYq9rxutE6%2FiMB8IM%2FhEashSovcwpGVMMcx0hRwujaUBRyexKfmJRBgxzduOdf%2FZsW0kA8Vp45IFJ95R3o7j2NOaT%2BV1vW6M%2BgzQb3OkS96FZ9hCw3n97ZLP5WdBJgkdCMVanbEsIbdbjemrnQDC8xWyV17xPemwVajES5wwLfbM9AvQgOfnNlMTGqRRHV81j%2BWbzDxsoGNQA%3D%3D',
        畢嘉士:
          'https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715836608.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=E4AK9zjU%2FYtRqaXPjzRupgauGSOBzBfGfIw6MzzPMarYin5jXuP44HGh%2FA2zxIbXQ8gekZMw0wdiIbfZAhc1NIm55RJDHor7nerOCmbXTdI0A1oFyIpmvWTdz3CmF%2BLDt1%2F1WzGUFsaX3P9G29FCSA7i%2B5qBDfRAwxxDzeBT08wefAlGGo1bpLWATFR74CQvIAuEkynQG1zOpsjwbx0RShgg9mEgh4rEgvwv5mz59vOT97ObCcjwuy85NjpVznoKnTrOyyCgTk4Nzu3ADJXjwTozoaK0k%2FYf12e6BH5K7kYS2sNL0%2FDyF1nFcjUJIIb74F88EVO0dqlE48Hd4X%2FzhA%3D%3D',
        '微笑人咖啡 Laughing Man Coffee':
          'https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709716136349.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Pu7xrGVSxcwMV5la8oQGW9F%2BDMRw7ZPbjWygBXtDl9I%2BXd4vORmgmvSFahlVoULqqHOsd%2FL6mPA5u%2B4ckyBPC3BfomiFLW8fECvfN26cnmCOtcED6ldIAUhAjp8rTfXoEZjZj02YT1nStQKHsWkuooFp6ZZ%2FaJsmqTRt4%2BgX%2F6gzB3DoAxXXSqHy5UjzbhLXK%2Fs2IXPbVq%2BwfzwR27W7tQ8SxvUMmdKWScYi5NxL%2BFJjZVS9LmiIAHY%2FagwtfOS%2B5ieXZ4ZMrpZ4m0bPSe2qbHjezy61RnddLf0FmIerEJa%2BmxLKK9dy3P1jYZOtsYi86awpKnxsjrw1qpOxrE27NA%3D%3D',
      },
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
    SwiperComponent2,
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
/* 在手機裝置上為點擊時添加樣式 */
.clickable-link:active {
  opacity: 0.7;
}
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
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}
.image-container:hover .overlay {
  opacity: 1;
}
.no-wrap {
    white-space: nowrap;
  }
</style>
