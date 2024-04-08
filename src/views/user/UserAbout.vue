<template>
  <LoadingOverLay :active="isLoading" :z-index="1060" />
  <section class="container position-relative">
    <video
      src="https://storage.coverr.co/videos/IIHifY02t9LqcHkbEs2DTK8NElI2JKm4H?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjEzNjM3NDE5fQ.UUz6vmTAmUCQzbhRYZNL3WuFntsfFNQn_sPhJit3Hnk"
      autoplay
      muted
      loop
      class="w-100"
    ></video>
    <div class="layout-wrapper">
      <i class="h2 bi bi-cup-hot me-2 ff-minor"></i>
      <span class="h2 ff-minor">Eco-Coffee</span>
      <h3 class="mt-3">連結咖啡愛好者與咖啡農民</h3>
    </div>
  </section>
  <section class="container mt-6">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <img
          src="@/assets/images/aboutus00.png"
          class="w-100 h-70 object-fit-cover"
          alt="fair-trand"
        />
      </div>
      <div class="col-md-5 d-flex align-items-center">
        <div>
          <h2 class="fw-bold my-4">什麼是公平貿易咖啡？</h2>
          <p>
            國際公平貿易組織的成立，主要目的是為了協助咖啡市場能夠秉持著公平貿易的原則做買賣交易，
            經濟學之父亞當史密斯曾於國富論中提及「自由市場中的價格機制應為供需平衡」，
            然而現實是發展中國家的貿易常態性被剝削，許多較貧困的咖啡農民即使生產出品質出眾的咖啡，
            所獲取的利潤依然屈指可數，1980年代，更因咖啡供過於求的問題，導致出現咖啡過剩的危機，
            進而影響到咖啡農民們的咖啡賣價被極其嚴重壓縮，公平貿易的觀念也就是由此興起，
            少數已開發的歐美國家協同發起穩定咖啡市場的機制，試圖透過人為的介入將利潤回饋給咖啡農民們，
            同時也盡可能讓咖啡的貿易可以趨於公平。
          </p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-6 flex-row-reverse">
      <div class="col-md-5">
        <img
          class="w-100 object-fit-cover"
          src="@/assets/images/aboutus01.png"
          alt="公平貿易的定義原則"
        />
      </div>
      <div class="col-md-5 d-flex align-items-center">
        <div>
          <h2 class="fw-bold my-4">公平貿易的定義原則</h2>
          <p>
            「以公開公平的國際交易為原則、強調保護勞動生產農民們權益的重要性、並致力於改革和國際貿易的永續發展，
            建立一個對話、透明、尊重的貿易夥伴關係」，乃為最被廣為接受的公平貿易宗旨，也是由國際公平貿易標籤組織FLO、
            國際公平貿易協會IFAT、歐洲世界商店連線NEW、歐洲公平貿易協會EFTA等四個公平貿易組織共同創立的準則。
          </p>
          <p>
            所謂公平貿易，為的就是拉近發展中國家和已開發國家的差距，為咖啡農民們爭取更多的利潤空間，
            促使農民們可以回饋購買者更多品質優良的咖啡，長遠目標更是期許國際之間的貿易，
            能夠以公平的合作方式互補成長，謀取彼此最大的利益。
          </p>
        </div>
      </div>
    </div>
  </section>
  <section
    class="py-5 mt-6"
    style="
      background-image: url(https://www.toptal.com/designers/subtlepatterns/uploads/spikes.png);
    "
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center">
          <img
            style="height: 312px; width: 309px"
            src="@/assets/images/undraw_barista_qd50.svg"
          />
        </div>
        <div class="col-md-4 d-flex align-items-center">
          <div>
            <p>
              隨著對社會責任和可持續發展的關注日益增加，
              公平貿易成為了一個炙手可熱的話題。作為消費者，
              我們的購買行為對世界的影響力不容小覷。透過支持公平貿易，
              我們可以為全球的咖啡種植者和農民帶來實質的幫助，
              同時也在推動社會公平和環境保護方面發揮積極作用。
            </p>
            <RouterLink
              :to="`/articles`"
              type="button"
              class="btn btn-primary w-100 py-2 text-bold"
              style="border-radius: 0"
            >
              查看更多文章
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container me-6">
    <p class="h2 text-center my-6 fw-bold">選購公平貿易咖啡商品</p>
    <div class="d-flex justify-content-center align-items-center">
      <div
        class="row row-cols-3 mb-4 g-4 col-lg-12 col-md-10 mb-5 d-flex justify-content-center"
      >
        <template v-for="(product, index) in products" :key="product.id">
          <!-- 只顯示每個 category 的前兩個產品 -->
          <template
            v-if="
              index < 2 || products[index - 1].category !== product.category
            "
          >
            <div
              class="col col-12 col-xl-4 col-lg-5 d-flex justify-content-center"
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
                  <div class="row d-flex">
                    <div class="col">
                      <div class="left w-100">
                        <div
                          class="bg-secondary position-absolute fs-6 px-2 py-1 text-white category"
                        >
                          {{ product.category }}
                        </div>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="right w-100 text-end">
                        <div @click="setTrack(product.id)">
                          <span v-if="trackList.includes(product.id)">
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
                    <router-link :to="`/product/${product.id}`">
                      {{ product.title }}
                    </router-link>
                  </h5>
                  <td>
                    <div class="h5" v-if="!product.price">
                      {{ item.origin_price }} 元
                    </div>
                    <del class="h6 text-dark" v-if="product.price">
                      原價 {{ product.origin_price }} 元</del
                    >
                    <div class="h5 fw-bold" v-if="product.price">
                      現在只要 {{ product.price }} 元
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
          </template>
        </template>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <RouterLink
        :to="`/products`"
        type="button"
        class="btn btn-outline-primary fs-5 py-3 w-50 text-nowrap"
      >
        查看更多商品
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
      products: [],
      product: {},
      isLoading: false,
    };
  },
  computed: {
    ...mapState(trackStore, ['trackList']),
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(trackStore, ['getTrack', 'setTrack']),
    getProducts() {
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
  created() {
    this.getProducts();
    this.getTrack();
  },
};
</script>

<style>
.container video {
  height: 70vh;
  top: 0;
  left: 0;
  object-fit: cover;
}
.layout-wrapper {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
