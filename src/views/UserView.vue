<template>
  <NavbarLayout />
  <ToastModal />
  <RouterView />
  <TopComponent class="top ps-2" />
  <FooterLayout />
</template>

<script>
import { mapActions } from 'pinia';
import toastMessage from '@/stores/toastMessage';
import NavbarLayout from '@/components/NavbarLayout.vue';
import FooterLayout from '@/components/FooterLayout.vue';
import ToastModal from '@/components/ToastModal.vue';
import TopComponent from '@/components/TopComponent.vue';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(toastMessage, ['pushMessage']),
  },
  components: {
    NavbarLayout,
    FooterLayout,
    ToastModal,
    TopComponent,
  },
};
</script>
<style lang="scss">
.top {
  position: fixed;
  right: 1%;
  bottom: 10%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #396b46af;
  cursor: pointer;
  -webkit-transition: 0.4s linear;
  -moz-transition: 0.4s linear;
  -ms-transition: 0.4s linear;
  -o-transition: 0.4s linear;
  transition: 0.4s linear;
  z-index: 3;
}
</style>
