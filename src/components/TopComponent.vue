<template>
  <div v-if="showTopIcon" @click="scrollToTop">
    <i
      class="bi bi-arrow-up text-light"
      style="font-size: 2rem"
      aria-hidden="true"
    ></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTopIcon: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const halfWindowHeight = window.innerHeight / 2;
      if (window.scrollY > halfWindowHeight) {
        this.showTopIcon = true;
      } else {
        this.showTopIcon = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
