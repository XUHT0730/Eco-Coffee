<template>
  <div class="container my-5">
    <LoadingOverLay :active="isLoading" :z-index="1060"></LoadingOverLay>
    <div class="row d-flex justify-content-center">
      <div class="col-md-6" v-if="order.is_paid === true">
        <h2 class="text-primary fw-bold">訂單完成</h2>
        <div class="mt-4">
          <h5>感謝訂購</h5>
          <p class="ml-2">訂單完成預計 1 ~ 2 天出貨</p>
          <div
            style="
              height: 300px;
              background-size: cover;
              background-position: center;
              background-image: url('/src/assets/images/checkout.jpg');
            "
          ></div>
        </div>
        <router-link to="/" class="btn btn-outline-dark mr-2 rounded-0 mt-4">
          回到首頁
        </router-link>
      </div>
      <div class="col-md-6" v-else>
        <h2 class="mb-5 text-primary fw-bold">付款</h2>
        <p>差一步完成訂單，點選確認付款完成訂單</p>
        <p>因對於咖啡豆品質要求，收到訂單開始製作，大約 1 ~ 2天出貨</p>
      </div>
      <div class="col-md-5 mt-3">
        <div class="my-5 row d-flex justify-content-center">
          <form class="border p-4 mb-4 border-dark" @submit.prevent="payOrder">
            <p class="h4 text-primary fw-bold">訂單明細</p>
            <table
              class="table align-middle mt-4 border-bottom text-muted border-dark"
            >
              <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <img
                    :src="item.product.imageUrl"
                    class="me-2"
                    style="width: 100px; height: 100px; object-fit: cover"
                  />
                  <td class="fw-bold">{{ item.product.title }}</td>
                  <td class="text-end">
                    NT${{ $filters.currency(item.final_total) }}
                  </td>
                  <td
                    class="text-secondary text-end"
                    style="white-space: nowrap"
                  >
                    X{{ item.qty }}{{ item.product.unit }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="text-end h4 fw-bold">總計</td>
                  <td colspan="2" class="text-end h4 fw-bold">
                    {{ $filters.currency(order.total) }}
                  </td>
                </tr>
              </tfoot>
            </table>
            <table class="table">
              <p class="h4 text-primary fw-bold py-2">顧客資料</p>
              <tbody>
                <tr>
                  <th width="100">Email</th>
                  <td class="text-end">{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th>姓名</th>
                  <td class="text-end">{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th>收件人電話</th>
                  <td class="text-end">{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th>收件人地址</th>
                  <td class="text-end">{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td class="text-end">
                    <span v-if="!order.is_paid">尚未付款</span>
                    <span v-else class="text-success fw-bold">付款完成</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-end" v-if="order.is_paid === false">
              <button type="submit" class="btn btn-danger">確認付款去</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import Swal from 'sweetalert2';
import toastMessage from '@/stores/toastMessage';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
    };
  },
  methods: {
    ...mapActions(toastMessage, ['pushMessage']),
    getOrder() {
      const url = `${VITE_URL}/api/${VITE_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.axios
        .get(url)
        .then((res) => {
          this.order = res.data.order;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.pushMessage({
            style: 'danger',
            title: '取得訂單失敗',
            content: err.response.data.message,
          });
        });
    },
    payOrder() {
      const url = `${VITE_URL}/api/${VITE_PATH}/pay/${this.orderId}`;
      this.isLoading = true;
      this.axios
        .post(url)
        .then(() => {
          this.getOrder();
          Swal.fire({
            title: '付款完成',
            icon: 'success',
          });
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          Swal.fire({
            title: '付款失敗',
            icon: 'warning',
          });
        });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId; // 從路由取得訂單 id
    this.getOrder();
  },
};
</script>
