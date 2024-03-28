<template>
  <div class="container">
    <LoadingOverLay :active="isLoading" :z-index="1060" />
    <div class="text-end mt-3">
      <button type="button" class="btn btn-primary" @click="openModal('new')">
        建立新的產品
      </button>
    </div>
    <div class="table-responsive">
      <table class="table table-striped mt-4">
        <thead>
          <tr>
            <th>購買時間</th>
            <th>Email</th>
            <th>購買款項</th>
            <th>應付金額</th>
            <th>是否付款</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in orders"
            :key="item.id"
            :class="{ 'text-secondary': !item.is_paid }"
          >
            <td>{{ $filters.date(item.create_at) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="product in item.products" :key="product.id">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-end">{{ $filters.currency(item.total) }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="`paidSwitch${item.id}`"
                  v-model="item.is_paid"
                  @change="updatePaid(item)"
                />
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="openModal(item)"
                >
                  檢視
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                  @click="openDelOrderModal(item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <OrderModal ref="orderModal" :order="tempOrder" @update-paid="updatePaid" />
    <DeleteModal ref="deleteModal" :item="tempOrder" @del-item="delOrder" />
    <div class="d-flex justify-content-center">
      <PaginationComponent :pagination="pagination" @emitPages="getOrders" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import toastMessage from '@/stores/toastMessage';

import OrderModal from '@/components/OrderModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      isLoading: false,
      orders: {},
      tempOrder: {},
      pagination: {},
      currentPage: 1,
      isNew: false,
    };
  },
  components: {
    OrderModal,
    DeleteModal,
    PaginationComponent,
  },
  methods: {
    ...mapActions(toastMessage, ['pushMessage']),
    getOrders(currentPage = 1) {
      this.currentPage = currentPage;
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/orders?page=${currentPage}`;
      this.isLoading = true;
      this.axios
        .get(url, this.tempProduct)
        .then((res) => {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.pushMessage({
            style: 'danger',
            title: '錯誤訊息',
            content: err.response.data.message,
          });
        });
    },
    // 當點擊檢視按鈕觸發 openModal 函式後，將當前訂單資訊重新賦值給 tempOrder
    // 然後宣告一個 orderComponent 變數用於抓取子元件 orderModal
    // 並調用 openModal 函式開啟 modal
    openModal(item) {
      this.tempOrder = { ...item };
      this.isNew = false;
      const orderComponent = this.$refs.orderModal;
      orderComponent.openModal();
    },
    // updatePaid 函式在串接編輯 API 成功後
    // 同樣會宣告一個 orderComponent 變數並調用 hideModal 函式關閉 modal
    // 最後再執行一次 getOrders 函式重新取得訂單資料並更新畫面
    updatePaid(item) {
      this.isLoading = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.axios
        .put(url, { data: paid })
        .then((res) => {
          this.isLoading = false;
          const orderComponent = this.$refs.orderModal;
          orderComponent.hideModal();
          this.pushMessage({
            style: 'success',
            title: '更新付款狀態',
            content: res.data.message,
          });
          this.getOrders(this.currentPage); // 重新取得訂單資料更新畫面
        })
        .catch((err) => {
          this.isLoading = false;
          this.pushMessage({
            style: 'danger',
            title: '錯誤訊息',
            content: err.response.data.message,
          });
        });
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item };
      const delComponent = this.$refs.deleteModal;
      delComponent.openModal();
    },
    delOrder() {
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`;
      this.isLoading = true;
      this.axios
        .delete(url)
        .then(() => {
          this.isLoading = false;
          const delComponent = this.$refs.deleteModal;
          delComponent.hideModal();
          this.getOrders(this.currentPage);
        })
        .catch((err) => {
          this.isLoading = false;
          this.pushMessage({
            style: 'danger',
            title: '錯誤訊息',
            content: err.response.data.message,
          });
        });
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
