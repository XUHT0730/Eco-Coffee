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
      axios
        .get(url)
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
    addToCart(id, qty = 1) {
      const order = {
        product_id: id,
        qty,
      };
      // 檢查購物車中是否已存在相同的產品
      const existProductIndex = this.carts.findIndex(
        (item) => item.product_id === id,
      );
      if (existProductIndex !== -1) {
        // 如果產品已存在於購物車中，就更新 qty
        const existProduct = this.carts[existProductIndex];
        const updatedQty = existProduct.qty + qty;
        const updatedProduct = { ...existProduct, qty: updatedQty };
        // 更新購物車中現有的產品
        this.carts.splice(existProductIndex, 1, updatedProduct);
        Swal.fire({
          icon: 'info',
          title: '已更新購物車數量',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        // 如果產品不存在於購物車中，則添加新的產品項目
        this.carts.push(order);
        Swal.fire({
          icon: 'success',
          title: '成功加入購物車',
          showConfirmButton: false,
          timer: 1500,
        });
      }
      const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
      axios
        .post(url, { data: order })
        .then(() => {
          this.getCart();
        });
    },
  },
});
