<template>
    <section class="position-relative box-bg05 mb-7">
    <LoadingOverLay :active="isLoading" :z-index="1060" class="text-center" />
    <div class="OBJECTS05" v-if="filterProducts.length > 0">
      <div class="container">
        <div class="row">
          <div class="col-12 text-dark mt-xl-7 mt-lg-7 mt-md-7" data-aos="fade-down">
            <div class="fw-bold title mt-5 mb-2 d-none d-md-block d-lg-block d-xl-block">
              追蹤商品
            </div>
            <div class="fw-bold title mt-7 mb-2 d-block d-md-none d-xl-none d-lg-none">
              商品收藏
              <div class="text-info fw-normal fs-5 d-md-none">
                保存自己感興趣商品
              </div>
            </div>
            <span class="text-info fs-4">Course Collection</span>
          </div>
          <LoadingOverLay :active="isLoading" :z-index="1060" class="text-center" />
          <div
            class="row g-5 pb-5 pb-md-4 pb-lg-4 pb-xl-7 mx-auto justify-content-center"
            data-aos="fade-up"
          >
            <template v-for="item in filterProducts" :key="item.id">
              <div
                class="col-12 col-xl-4 col-lg-5 mx-2 mx-xl-0 mx-lg-0 mx-md-0"
              >
                <div class="card02 shadow bg-white">
                  <img :src="item.imageUrl" class="w-70 object-fit-cover" height="325"/>
                  <div class="card-body position-relative">
                    <div class="bg-secondary fs-6 px-4 py-1 text-white position-absolute category">
                      {{ item.category }}
                    </div>
                    <h5 class="card-title pt-5 px-5">{{ item.title }}</h5>
                    <!-- Track icon -->
                    <div class="card_Favorite position-absolute" @click="setTrack(item.id)">
                      <span v-if="trackList.includes(item.id)">
                        <i class="bi bi-heart-fill fs-4 text-danger"></i>
                      </span>
                      <span v-else>
                        <i class="bi bi-heart fs-4 text-danger"></i>
                      </span>
                    </div>
                    <div class="fs-5 card-text text-info px-5 pt-2"
                     v-if="item.price === item.origin_price">
                      {{ $filters.currency(item.price) }} 元
                    </div>
                    <div v-else class="mt-3 d-flex c_font">
                      <del class="ms-5 card-text text-info pt-2">
                        原價 ${{ $filters.currency(item.origin_price) }} 元</del
                      >
                      <p
                        class="card-text text-dark ms-3 ms-xl-5 ms-lg-5 ms-md-9 pt-2"
                      >
                        特價 ${{ $filters.currency(item.price) }} 元
                      </p>
                    </div>
                    <div class="pb-7 pb-md-5 pb-lg-5 pb-xl-5 pt-2 pt-md-6 d-flex">
                      <div class="classBtn04 position-absolute">
                        <RouterLink :to="`/product/${item.id}`" type="button"
                          class="btn btn-primary pe-4 py-2 w-100">
                          商品介紹
                          <!-- <i class="bi bi-heart-fill ps-3 pb-1"></i> -->
                          <i class="bi bi-arrow-right"></i>
                          <!-- <img
                            src="/img/arrow-right-long.svg"
                            class="ps-3 pb-1"
                            alt="arrow-right"
                          /> -->
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center mb-7 mb-md-9 pt-7 pt-md-9">
      <h2 class="text-info">沒有追蹤商品，快去逛逛</h2>
      <p class="display-3 text-info my-4 mb-md-6">前往商品列表</p>
      <RouterLink
        to="/products"
        class="fs-5 btn btn-primary py-3 px-5"
      >
        查看商品
      </RouterLink>
    </div>
  </section>
</template>
<script>
// import { ref, computed, onMounted } from 'vue';
import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      trackList: [],
    };
  },
  computed: {
    // 取得過濾後的產品清單
    filterProducts() {
      return this.products.filter((item) => this.trackList.includes(item.id));
    },
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/products/all`;
      this.axios.get(url)
        .then((res) => {
          this.products = res.data.products;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          alert(err.response.data.message);
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
      } else {
        this.trackList.push(id);
      }
      Swal.fire({
        icon: 'success',
        title: '己移除收藏清單',
        showConfirmButton: false,
        timer: 1500,
      });
      localStorage.setItem('homeTrack', JSON.stringify(this.trackList));
      this.getTrack();
    },
  },
  mounted() {
    this.getProducts();
    this.getTrack();
  },
};

</script>
