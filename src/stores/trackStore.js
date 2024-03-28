import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

export default defineStore('trackStore', {
  state: () => ({
    trackList: [],
  }),
  actions: {
    getTrack() {
      const trackListStr = localStorage.getItem('homeTrack');
      if (trackListStr) {
        this.trackList = JSON.parse(trackListStr);
      }
    },
    setTrack(id) {
      if (this.trackList.includes(id)) {
        const index = this.trackList.findIndex((item) => item === id);
        this.trackList.splice(index, 1);
        Swal.fire({
          icon: 'success',
          title: '移除收藏',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: '己加入收藏',
          showConfirmButton: false,
          timer: 1500,
        });
        this.trackList.push(id);
      }
      localStorage.setItem('homeTrack', JSON.stringify(this.trackList));
      this.getTrack();
    },
  },
});
