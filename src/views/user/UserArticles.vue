<template>
  <div class="container ec-container mt-6">
    <LoadingOverLay :active="isLoading" :z-index="1060" />
    <div class="row row-cols-1 row-cols-md-3 g-4 d-flex">
      <template v-for="article in articles" :key="article.id">
        <div class="col d-flex justify-content-center" v-if="article.isPublic">
          <div class="card article-card">
            <img
              :src="article.imageUrl"
              :alt="article.title"
              class="card-img-top article-card-img"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ article.title }}</h5>
              <!-- 顯示標籤 -->
              <div v-if="article.tag && article.tag.length > 0">
                <span
                  class="badge bg-primary me-2 my-2"
                  v-for="(tag, index) in article.tag"
                  :key="index"
                  >{{ tag }}</span
                >
              </div>
              <div v-html="article.description"></div>
            </div>
            <div class="card-footer">
              <div class="row justify-content-center">
                <RouterLink
                  :to="`/article/${article.id}`"
                  v-if="article.isPublic"
                  class="btn btn-outline-primary w-50"
                >
                查看文章
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </template>
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
      articles: [],
      isLoading: false,
      isNew: false,
      tempArticle: {},
    };
  },
  methods: {
    ...mapActions(ToastMessage, ['pushMessage']),
    getArticles(page = 1) {
      const api = `${VITE_URL}/api/${VITE_PATH}/articles?page=${page}`;
      this.isLoading = true;
      this.axios
        .get(api)
        .then((response) => {
          this.articles = response.data.articles;
          this.pagination = response.data.pagination;
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
    this.getArticles();
  },
};
</script>

<style>
.ec-container {
  min-height: calc(100vh - 56px - 76px);
}
</style>
