<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top py-2">
    <div class="container-fluid">
      <!--LOGO-->
      <RouterLink
        to="/"
        @click="closeCollapse"
        class="fs-4 navbar-brand align-items-center me-2"
      >
        <i class="bi bi-cup-hot ff-minor"></i>
        <span class="ms-2 fw-bold ff-minor">Eco-Coffee</span>
      </RouterLink>
      <!-- BUTTON -->
      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        @click="openCollapse"
        data-bs-target="#lokiNavbar"
      >
        <span class="navbar-toggler-icon ff-minor"></span>
      </button>
      <!--主角 MENU-->
      <div id="lokiNavbar" ref="collapse" class="collapse navbar-collapse">
        <div class="navbar-nav me-auto mb-2 mb-lg-0">
          <RouterLink
            to="/about"
            @click="closeCollapse"
            class="nav-item nav-link"
            >了解公平貿易</RouterLink
          >
          <RouterLink
            to="/products"
            @click="closeCollapse"
            class="nav-item nav-link"
            >產品列表</RouterLink
          >
          <RouterLink
            to="/articles"
            @click="closeCollapse"
            class="nav-item nav-link"
            >部落格</RouterLink
          >
          <router-link
            to="/fqa"
            @click="closeCollapse"
            class="nav-item nav-link"
          >
            常見問題</router-link
          >
        </div>
        <div class="nav navbar-nav d-flex me-2">
          <RouterLink
            to="/track"
            @click="closeCollapse"
            class="btn btn-primary d-flex align-items-center
             nav-item nav-link position-relative me-1"
          >
            <i class="bi bi-heart-fill icon"></i>
            <span
              v-if="trackList.length > 0"
              class="badge rounded-pill bg-danger"
              style="transform: translateX(-2px) translateY(-18px)"
            >
              {{ this.trackList?.length }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </RouterLink>
          <RouterLink
            to="/cart"
            @click="closeCollapse"
            class="btn btn-primary nav-item nav-link
             position-relative d-flex align-items-center me-1"
          >
            <i class="bi bi-cart icon"></i>
            <span
              v-if="carts.length > 0"
              class="badge rounded-pill bg-danger"
              style="transform: translateX(-2px) translateY(-18px)"
            >
              {{ this.carts?.length }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </RouterLink>
          <router-link to="/login" class="nav-item nav-link me-1">
            <i class="bi bi-person-circle icon"></i>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import Collapse from 'bootstrap/js/dist/collapse';
import toastMessage from '@/stores/toastMessage';
import cartStore from '@/stores/cartStore';
import trackStore from '@/stores/trackStore';

export default {
  computed: {
    ...mapState(trackStore, ['trackList']),
    ...mapState(cartStore, ['carts']),
  },
  methods: {
    ...mapActions(toastMessage, ['pushMessage']),
    ...mapActions(cartStore, ['getCart']),
    ...mapActions(trackStore, ['getTrack']),
    openCollapse() {
      this.collapse.show();
    },
    closeCollapse() {
      this.collapse.hide();
    },
  },
  mounted() {
    this.getCart();
    this.getTrack();
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });
  },
};
</script>
<style lang="scss">
@media (max-width: 768px) {
  .nav-link.active {
    background-color: rgb(114, 189, 133);
  }
}

@media screen and (min-width: 769px) {
  .nav-link.active {
    border-bottom: solid#FFFFFF 3px;
  }
}
.navbar-nav .nav-item {
  position: relative;
  color: #ffffff;
}
.navbar-nav .nav-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px; /* 底線高度 */
  background-color: rgb(255, 255, 255); /* 底線顏色 */
  transition: width 0.3s; /* 添加過渡效果 */
}
.navbar-nav .nav-item:hover::after {
  width: 90%; /* 滑鼠接觸時，底線寬度為項目寬度 */
}
.icon {
  font-size: 21px;
}
</style>
