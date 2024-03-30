<template>
  <div class="container ec-container">
    <LoadingOverLay :active="isLoading" :z-index="1060" />
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mt-3">
        <li class="breadcrumb-item">
          <RouterLink to="/articles">部落格列表</RouterLink>
        </li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2 class="fw-bold">{{ article.title }}</h2>
        <p>
          <small class="text-muted">{{
            $filters.date(article.create_at)
          }}</small>
          -
          <small class="text-muted">作者：{{ article.author }}</small>
        </p>
        <img
          :src="article.imageUrl"
          :alt="article.title"
          class="img-fluid my-3"
        />
        <div v-html="article.content"></div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import ToastMessage from '@/stores/toastMessage';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      isLoading: false,
      article: {},
      id: '',
    };
  },
  methods: {
    ...mapActions(ToastMessage, ['pushMessage']),
    getArticle() {
      const api = `${VITE_URL}/api/${VITE_PATH}/article/${this.id}`;
      this.isLoading = true;
      this.axios
        .get(api)
        .then((response) => {
          this.article = response.data.article;
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.pushMessage({
            style: 'danger',
            title: '取得文章資訊失敗',
            content: error.response.data.message,
          });
        });
    },
  },
  created() {
    this.id = this.$route.params.articleId;
    this.getArticle();
  },
};
</script>

<style>
.ec-container {
  min-height: calc(100vh - 56px - 76px);
}
</style>
