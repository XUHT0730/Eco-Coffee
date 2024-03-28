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
    class="mySwiper"
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
// import {
//   Autoplay, Pagination, Navigation, Thumbs,
// } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import SwiperCore from 'swiper/core';
// import 'swiper/css';

// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

// SwiperCore.use([Navigation, Thumbs]);

// export default {
//   props: {
//     product: Object,
//   },
//   data() {
//     return {
//       thumbsSwiper: null,
//     };
//   },
//   components: {
//     Swiper,
//     SwiperSlide,
//   },
//   methods: {
//     setThumbsSwiper(swiper) {
//       this.thumbsSwiper = swiper;
//     },
//   },
// setup() {
//   return {
//     modules: [Autoplay, Pagination, Navigation, Thumbs],
//   };
// },
// };
</script>
<style lang="scss" scoped>
.swiper-slide {
  text-align: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.swiper-container {
  width: 100%;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
}
.sale-container {
  display: flex;
  flex-direction: column-reverse;
  height: auto;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
}
.sale-wrapper {
  padding: 15px 0;
}
.mySwiper2 {
  width: 100%;
  margin-bottom: 24px;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}
// .mySwiper2 {
//   height: 300px !important;
//   @include media-breakpoint-up(sm) {
//     height: 360px !important;
//   }
//   @include media-breakpoint-up(md) {
//     height: 500px !important;
//   }
// }
// .mySwiper .swiper-slide {
//   cursor: pointer;
//   width: 80px !important;
//   height: 80px !important;
//   opacity: 0.4;
//   border-radius: 5px;
//   transition: all 0.5s;
//   @include media-breakpoint-up(md) {
//     width: 100px !important;
//     height: 100px !important;
//   }
//   &:hover {
//     opacity: 1;
//   }
// }

// .mySwiper .swiper-slide-thumb-active {
//   opacity: 1;
// }

// .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// .swiper-button-prev,
// .swiper-button-next {
//   color: #fff !important;
//   border: 2px solid #fff;
//   border-radius: 50%;
//   width: 36px !important;
//   height: 36px !important;
//   &::after {
//     font-size: 16px !important;
//   }
//   @include media-breakpoint-up(md) {
//     width: 48px !important;
//     height: 48px !important;
//     &::after {
//       font-size: 20px !important;
//     }
//   }
// }
// .swiper-button-prev {
//   left: -200px !important;
// }
// .swiper-button-next {
//   right: -100px !important;
//   transition: all 0.5s;
//   display: none !important;
//   @include media-breakpoint-up(sm) {
//     display: flex !important;
//   }
//   @include media-breakpoint-up(md) {
//     right: -120px !important;
//   }
//   @include media-breakpoint-up(lg) {
//     right: -150px !important;
//   }
//   @include media-breakpoint-up(xl) {
//     right: -200px !important;
//   }

//   &:hover {
//     transform: scale(0.9);
//   }
// }

// .swiper-pagination {
//   position: relative !important;
//   bottom: 0 !important;
//   margin-top: 16px;
// }
// .swiper-pagination-bullet {
//   background-color: rgba(#fff, 0.8) !important;
//   margin: 0 8px;
// }
</style>
