<template>
  <Swiper
    :loop="false"
    :spaceBetween="10"
    :navigation="false"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2"
  >
    <SwiperSlide
      ><img :src="product.imageUrl" :alt="product.title"
    /></SwiperSlide>
    <SwiperSlide v-for="(img, index) in product.imagesUrl" :key="index">
      <img :src="product.imagesUrl[index]" :alt="product.title" />
    </SwiperSlide>
  </Swiper>
  <Swiper
    @swiper="setThumbsSwiper"
    :loop="false"
    :spaceBetween="10"
    :slidesPerView="6"
    :freeMode="true"
    :watchSlidesVisibility="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper01"
  >
    <SwiperSlide
      ><img :src="product.imageUrl" :alt="product.title"
    /></SwiperSlide>
    <SwiperSlide v-for="(img, index) in product.imagesUrl" :key="index">
      <img
        :src="product.imagesUrl[index]"
        :alt="product.title"
        class="object-fit-cover"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default {
  props: {
    product: Object,
  },
  data() {
    return {
      thumbsSwiper: null,
      modules: [Navigation, Thumbs, FreeMode],
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style lang="scss">
</style>
