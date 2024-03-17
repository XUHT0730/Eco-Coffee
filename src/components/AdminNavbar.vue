<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top py-2">
            <div class="container-fluid">
                <!--LOGO-->
                <RouterLink to="/admin/products" class="fs-4 navbar-brand align-items-center me-2">
                    <i class="bi bi-cup-hot ff-minor"></i>
                    <span class="ms-2 fw-bold ff-minor">Eco-Coffee</span>
                </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent" ref="collapseA" class="collapse navbar-collapse">
                    <div class="navbar-nav me-auto mb-2 mb-lg-0">
                            <RouterLink to="/admin/products"
                             class="nav-item nav-link">產品</RouterLink>
                            <RouterLink to="/admin/orders"
                             class="nav-item nav-link">訂單</RouterLink>
                            <RouterLink to="/admin/coupons"
                             class="nav-item nav-link">優惠券</RouterLink>
                            <RouterLink to="/admin/article"
                             class="nav-item nav-link">貼文</RouterLink>
                             <router-link to="/"
                             class="nav-item nav-link">前台頁面</router-link>
                             <a href="#" @click.prevent="logOut" class="nav-item nav-link">登出</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
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
  }
  .navbar-nav .nav-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px; /* 底線高度 */
    background-color: rgb(255, 255, 255); /* 底線顏色 */
    transition: width 0.3s; /* 添加過渡效果 */
  }
  .navbar-nav .nav-item:hover::after {
    width: 100%; /* 滑鼠接觸時，底線寬度為項目寬度 */
  }
  </style>
<script>
import { mapActions } from 'pinia';
import Collapse from 'bootstrap/js/dist/collapse';
// C:\Users\XUTING\Desktop\week07\vue-project\node_modules\bootstrap\js\dist\collapse.js
import toastMessage from '../stores/toastMessage';

const { VITE_URL } = import.meta.env;
export default {
  methods: {
    ...mapActions(toastMessage, ['pushMessage']),
    logOut() {
      const url = `${VITE_URL}/logout`;
      this.axios.post(url)
        .then((res) => {
          this.pushMessage({
            style: 'success',
            title: '已登出',
            content: res.data.message,
          });
          document.cookie = 'myToken=;expires=;path=/';
          this.$router.push('/');
        })
        .catch((err) => {
          this.pushMessage({
            style: 'danger',
            title: '登出狀態',
            content: err.response.data.message,
          });
        });
    },
    openCollapse() {
      this.collapseA.show();
    },
  },
  mounted() {
    this.collapseA = new Collapse(this.$refs.collapseA, {
      toggle: false,
    });
  },
};
</script>
