<template>
  <!-- <LoadingOverLay :active="isLoading" :z-index="1060" /> -->
  <!-- 搜尋欄位 -->
  <section class="bg-light py-4">
    <div class="container">
      <div class="row d-flex justify-content-end">
        <div class="col-md-3">
          <div class="input-group w-100 mt-md-0 mt-3">
            <input
              type="text"
              v-model.trim="search"
              class="form-control border-primary py-2"
              placeholder="快速搜尋 ex : 低咖啡因、濾掛"
            />
            <div class="input-group-append">
              <button class="btn btn-primary py-2" type="button" id="search">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container ec-container">
    <div class="row mt-5 mt-md-5 mt-3">
      <!-- 左側分類 list group -->
      <div class="col-lg-2 col-md-3 mb-5">
        <ul class="list-group">
          <li
            :class="{ active: !$route.query.category }"
            class="list-group-item"
          >
            <router-link class="py-2 d-block" to="/products"
              >全部商品</router-link
            >
          </li>
          <li
            v-for="item in categories"
            :key="item"
            class="list-group-item"
            :class="{ active: $route.query.category === item }"
          >
            <router-link
              class="py-2 d-block"
              :to="`/products?category=${item}`"
              >{{ item }}</router-link
            >
          </li>
        </ul>
      </div>
      <!-- 右側所有產品列表 -->
      <div class="col-lg-10 col-lg-10 col-md-9 mb-5">
        <div class="vl-parent">
          <LoadingOverLay :active="isLoading" :is-full-page="fullPage" />
          <div class="row row-cols-3 g-4">
            <!-- 如果搜索結果為空，顯示查無此商品的消息-->
            <div v-if="products.length === 0" class="col">
              <p class="h4 text-danger">Sorry ~ 查無此商品</p>
            </div>
            <!-- 如果搜索結果不為空，則顯示搜索結果 -->
            <div
              v-else
              class="col-12 col-xl-4 col-lg-5 d-flex justify-content-center"
              v-for="product in products"
              :key="product.id"
            >
              <div
                class="card product-card shadow bg-white mb-sm-4 ms-md-4 m-sm-auto"
              >
                <router-link
                  :to="`/product/${product.id}`"
                  class="product-card-link"
                >
                  <img
                    :src="product.imageUrl"
                    :alt="product.title"
                    class="product-card-img"
                  />
                </router-link>
                <div class="card-body position-relative">
                  <div class="row d-flex align-items-center">
                    <div class="col">
                      <div class="w-auto">
                        <div
                          class="bg-secondary fs-8 px-2 py-1 text-white category"
                          style="width: fit-content"
                        >
                          {{ product.category }}
                        </div>
                      </div>
                    </div>
                    <div class="col-2 track">
                      <div class="w-100 text-end">
                        <div @click="setTrack(product.id)">
                          <span v-if="trackList.includes(product.id)">
                            <i class="bi bi-heart-fill fs-3 text-danger"></i>
                          </span>
                          <span v-else
                            ><i class="bi bi-heart fs-3 text-danger"></i
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <router-link :to="`/product/${product.id}`">
                    <h5 class="card-title pt-2 fw-bold">
                      {{ product.title }}
                    </h5>
                  </router-link>
                  <td>
                    <!-- 如果原價等於現價，就只顯示現價 -->
                    <div
                      class="h5 fw-bold"
                      v-if="product.origin_price === product.price"
                    >
                      NT$ {{ product.price }} 元
                    </div>
                    <div v-else>
                      <del class="h6 text-dark"
                        >原價 {{ product.origin_price }} 元</del
                      >
                      <div class="h5 fw-bold" v-if="product.price">
                        現在只要 NT$ {{ product.price }} 元
                      </div>
                    </div>
                  </td>
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
            </div>
          </div>
        </div>
      </div>
      <PaginationComponent
        v-if="products.length > 6"
        class="d-flex justify-content-center"
        :pagination="pagination"
        @emitPages="getProducts"
      >
      </PaginationComponent>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cartStore';
import trackStore from '@/stores/trackStore';
import toastMessage from '@/stores/toastMessage';
import PaginationComponent from '@/components/PaginationComponent.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      // 處理 loading 載入效果
      status: {
        loadingItem: '',
      },
      isLoading: false,
      fullPage: false,
      products: [],
      categories: [
        '赫根山 Mount Hagen',
        '生態綠 OKOGREEN',
        '畢嘉士',
        '微笑人咖啡 Laughing Man Coffee',
      ],
      product: {},
      search: '',
      cart: {},
      pagination: {},
    };
  },
  computed: {
    ...mapState(trackStore, ['trackList']),
  },
  methods: {
    ...mapActions(toastMessage, ['pushMessage']),
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(trackStore, ['getTrack', 'setTrack']),
    getProducts(page = 1) {
      const { category = '' } = this.$route.query;
      const getProductsUrl = `${VITE_URL}/api/${VITE_PATH}/products?category=${category}&page=${page}`;
      this.isLoading = true;
      this.axios
        .get(getProductsUrl)
        .then((res) => {
          const { pagination } = res.data;
          this.pagination = pagination;
          // 將資料存起來
          this.products = res.data.products;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    getProduct(id) {
      this.$router.push(`product/${id}`);
    },
    getSearch() {
      const getSearchUrl = `${VITE_URL}/api/${VITE_PATH}/products/all`;
      this.isLoading = true;
      this.axios
        .get(getSearchUrl)
        .then((res) => {
          // 將資料存起來
          this.products = res.data.products;
          this.isLoading = false;
          // 關鍵字搜尋
          this.products = this.products.filter(
            (item) => item.title.trim().toLowerCase().includes(this.search.toLowerCase()),
          );
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
  components: {
    PaginationComponent,
  },
  watch: {
    search(newVal) {
      // 在這裡執行即時搜尋，例如 getSearch 方法
      this.getSearch(1, newVal);
    },
    // 當路由發生變化，會重新取得一次值
    '$route.query': {
      handler() {
        this.getProducts();
      },
      deep: true,
    },
  },
  created() {
    this.getProducts();
    this.getTrack();
    this.getSearch();
  },
};
</script>

<style lang="scss">
.ec-container {
  min-height: calc(100vh - 56px - 76px);
}
.list-group-item a {
  color: black;
}
.list-group-item.active a {
  color: white;
}
.track:hover {
  transform: scale(1.2);
}
</style>
