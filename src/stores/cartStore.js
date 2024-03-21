import { defineStore } from 'pinia';
import Swal from 'sweetalert2';
import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default defineStore('cartStore', {
  state: () => ({
    carts: [],
    cart: {},
    final_total: 0,
    total: 0,
  }),
  actions: {
    getCart() {
      const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
      axios.get(url)
        .then((res) => {
          this.cart = res.data.data;
          this.carts = res.data.data.carts;
          this.final_total = res.data.data.final_total;
          this.total = res.data.data.total;
        })
        .catch(() => {
          // console.log(err.response.data.message);
        });
    },
    addToCart(id) {
      const order = {
        product_id: id,
        qty: 1,
      };
      // 檢查購物車是否已經存在相同商品
      if (this.carts.some((item) => item.product_id === id)) {
      // 商品已存在於購物車中，顯示 SweetAlert 提示訊息
        Swal.fire({
          title: '商品已存在於購物車中',
          icon: 'warning',
        });
        return;
      }
      const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
      axios.post(url, { data: order })
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          // this.$router.push('/cart');
          this.getCart();
        })
        .catch(() => {
          // alert(err);
        });
    },
  },
});
