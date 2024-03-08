<template>
  <ToastMessages />
      <nav class="navbar container navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div class="container-fluid">
          <!--LOGO-->
          <RouterLink to="/" class="navbar-brand align-items-center">
              <i class="bi bi-cup-hot"></i>
              <span class="ms-2">Eco-Coffee</span>
          </RouterLink>
          <!-- BUTTON -->
          <button class="navbar-toggler"  data-bs-toggle="collapse"
            @click="openCollapse" data-bs-target="#lokiNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!--主角 MENU-->
          <div id="lokiNavbar" ref="collapse" class="collapse navbar-collapse">
            <div class="navbar-nav me-auto mb-2 mb-lg-0">
                <RouterLink to="/products"
                class="nav-item nav-link">產品列表</RouterLink>
                <RouterLink to="/articles"
                class="nav-item nav-link">Blog</RouterLink>
            </div>
            <div class="nav navbar-nav d-flex me-2">
              <RouterLink to="/track" class="nav-link nav-item
                me-2 position-relative">
                <i class="bi bi-heart-fill"></i>
              </RouterLink>
              <RouterLink to="/cart" class="btn btn-outline-primary
              nav-item nav-link position-relative">
                  <i class="bi bi-cart"></i>
                  <span class="position-absolute top-0 start-100
                  translate-middle badge rounded-pill bg-danger">
                  {{ this.carts?.length }}
                  <span class="visually-hidden">unread messages</span>
                  </span>
              </RouterLink>
              <router-link to="/login" class="nav-item nav-link">
                 <i class="bi bi-person-circle"></i>
              </router-link>
            </div>
          </div>
        </div>
     </nav>
</template>

<style lang="scss">
  .navbar-nav .nav-item {
    position: relative;
  }
  .navbar-nav .nav-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px; /* 底線高度 */
    background-color: rgb(0, 0, 0); /* 底線顏色 */
    transition: width 0.3s; /* 添加過渡效果 */
  }
  .navbar-nav .nav-item:hover::after {
    width: 100%; /* 滑鼠接觸時，底線寬度為項目寬度 */
  }
</style>
<script>
import { mapActions, mapState } from 'pinia';
import Collapse from 'bootstrap/js/dist/collapse';
import toastMessage from '../stores/toastMessage';
import cartStore from '../stores/cartStore';

export default {
  computed: {
    ...mapState(cartStore, ['carts']),
  },
  methods: {
    ...mapActions(toastMessage, ['pushMessage']),
    ...mapActions(cartStore, ['getCart']),
    openCollapse() {
      this.collapse.show();
    },
  },
  mounted() {
    this.getCart();
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });
  },
};
</script>
