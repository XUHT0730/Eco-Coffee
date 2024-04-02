import { defineStore } from 'pinia';

export default defineStore('loadingStore', {
  id: 'loading',
  state: () => ({
    isLoading: false,
  }),
  actions: {
    startLoading() {
      this.isLoading = true;
    },
    stopLoading() {
      this.isLoading = false;
    },
  },
});
