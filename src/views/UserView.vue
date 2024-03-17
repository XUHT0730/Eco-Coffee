<template>
        <NavbarLayout></NavbarLayout>
        <ToastModal></ToastModal>
        <RouterView></RouterView>
        <FooterLayout></FooterLayout>
</template>

<script>
import { mapActions } from 'pinia';
import NavbarLayout from '../components/NavbarLayout.vue';
import FooterLayout from '../components/FooterLayout.vue';
import toastMessage from '../stores/toastMessage';
import ToastModal from '../components/ToastModal.vue';

export default {
  data() {
    return { };
  },
  methods: {
    ...mapActions(toastMessage, ['pushMessage']),
  },
  components: {
    NavbarLayout,
    FooterLayout,
    ToastModal,
  },
};
</script>
