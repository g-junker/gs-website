<template>
  <div>
    <Header isLogoWhite isBlue />
    <div class="page-not-found">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A página que você está procurando não está disponível.</p>
      <button class="button-white">
        <i class="fas fa-long-arrow-alt-left"></i> Voltar à página inicial
      </button>
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

.page-not-found > h1 {
  font-size: 5em;
  font-weight: 900;
  margin: 0;
  padding: 0;
  color: #fff;
}

.page-not-found > h2 {
  font-size: 1.8em;
  margin: 0;
  color: #fff;
  letter-spacing: 0;
}

.page-not-found > p {
  font-size: 1.3em;
  font-weight: 300;
  margin: 4em 0;
  color: #fff;
}

.page-not-found > button {
  margin: auto;
}
</style>
