<template>
  <div>
    <Header isLogoWhite isBlue />
    <div class="page-not-found">
      <h1 class="page-not-found__title">404</h1>
      <h2 class="page-not-found__subtitle">Página não encontrada</h2>
      <p>A página que você está procurando não está disponível.</p>
      <router-link to="/">
        <button class="button button--white page-not-found__button">
          <i class="fas fa-long-arrow-alt-left"></i> Voltar à página inicial
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from "@/components/TheHeader.vue";

export default {
  name: "PageNotFound",
  components: {
    Header
  },
  metaInfo: {
    title: "Página não encontrada"
  }
};
</script>

<style>
.page-not-found {
  margin: auto;
  text-align: center;
  background-color: var(--main-color);
  padding: 4em 2em;
  min-height: 80vh;
}

.page-not-found__title {
  font-size: 5em;
  font-weight: 900;
  margin: 0;
  padding: 0;
  color: #fff;
}

.page-not-found__subtitle {
  font-size: 1.8em;
  letter-spacing: 0;
  margin: 0;
  color: #fff;
}

.page-not-found > p {
  font-size: 1.3em;
  font-weight: 300;
  margin: 4em 0;
  color: #fff;
}

.page-not-found__button {
  margin: auto;
}
</style>
