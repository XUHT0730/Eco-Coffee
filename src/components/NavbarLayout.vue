<template>
  <ToastMessages />
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container">
    <!--LOGO-->
    <a class="navbar-brand" href="#">LOGO</a>
    <!-- BUTTON -->
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#lokiNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!--主角 MENU-->
    <div id="lokiNavbar" class="collapse show navbar-collapse">
      <ul class="navbar-nav me-auto">
        <li class="nav-item active"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
      <!-- 因為在 navbar-collapse 內，所以一同響應隱藏 -->
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
     </nav>
        <!-- <nav class="navbar navbar-expand-lg bg-primary sticky-top">
            <div class="container-fluid">
                <RouterLink to="/" class="navbar-brand">
                  <i class="bi bi-cup-hot">Eco-Coffee</i>
                </RouterLink>
                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent" aria-expanded="true"
                 aria-label="Toggle navigation"
                  class="navbar-toggler"><span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav me-auto mb-2 mb-lg-0">
                        <RouterLink to="/products"
                         class="nav-item nav-link">產品列表</RouterLink>
                        <RouterLink to="/article"
                          class="nav-item nav-link">Blog</RouterLink>
                        <router-link to="/articles"
                          class="nav-item nav-link">所有推文頁面</router-link>
                    </div>
                    <div class="nav navbar-nav d-flex me-2">
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
        </nav> -->
    </div>
</template>

<style lang="scss">
</style>
<script>
import { mapActions, mapState } from 'pinia';
import toastMessage from '../stores/toastMessage';
import cartStore from '../stores/cartStore';

export default {
  computed: {
    ...mapState(cartStore, ['carts']),
  },
  methods: {
    ...mapActions(toastMessage, ['pushMessage']),
    ...mapActions(cartStore, ['getCart']),
  },
  mounted() {
    this.getCart();
  },
};
</script>
