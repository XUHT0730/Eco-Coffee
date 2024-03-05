<template>
  <header class="container header"
   style="height: 504px; background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709543433230.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RKdXij%2BJKl7scyyCrzbEoL7DKU%2BhtTvd%2B19Qhee9AUDq%2FoXrgyD8lS%2BZCheCWRKgOfScfomYaSL3rgCwbQeThOe2rtiKYmypjiZnqy1hZF0ldnixATNZZaCldVhwKytNUTZHjWoP58IeUI9FLiRG6PMhzknkCEzSP4OdmF54GOEvdYBkQp3D1QhPENbhBB4bjd9WbxuGjJHRuDY5B4pItsX4ZbMPpLQQeOpGiO%2F2AjrnOIW2giK%2BDc4eD4SAZowcPBNK8YJCo79Z9KqZQ6lRS%2FInyi%2BNkpH3UnYfYzqFTN6PEHNva892jSwMMYMtKCu5cC7ReW%2FfkBTEY%2B9GR2KF7g%3D%3D);">
   <div class="d-flex align-items-center h-100 position-relative" style="z-index: 1;">
    <div class="header-text">
      <h1>愛咖啡更支持咖啡</h1>
      <button class="btn btn-primary btn-lg" type="button">了解公平貿易</button>
    </div>
  </div>
  </header>
  <section class="container mt-6">
    <h2 class="text-center">選購公平貿易咖啡商品</h2>
    <div class="row justify-content-center">
      <div class="col-md-5">
      </div>
      <div class="col-md-5 d-flex align-items-center">
        <div>
        </div>
      </div>
    </div>
  </section>

  <section>

  </section>
</template>

<style lang="scss">
  .header {
    height: 504px;
    background-position: center center;
    background-size: cover;
    position: relative;
  }
  .header::after {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.3;
}
.header-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>

<script>
export default {
  data() {
    return { };
  },
};
</script>
