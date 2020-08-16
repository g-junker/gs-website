<template>
  <div>
    <Header/>
    <TheCarousel/>
    <div class="home-content container">
      <div class="home-content-text">
        <h1>Qualidade, inovação e sustentabilidade</h1>
        <p>A Construtora Gonzaga Sampaio mantém um elevado padrão de qualidade, inovação e sustentabilidade. Afinal, um empreendimento de sucesso começa pela qualidade e diferenciais encontrados em seu projeto.</p>
        <router-link to="/empreendimentos" class="text-link">Conheça nossos empreendimentos <i class="fas fa-long-arrow-alt-right"></i></router-link>
      </div>
      <div class="home-content-img">
        <img src="@/assets/images/home-terroir.jpg">
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/HeaderWhite.vue'
import TheCarousel from '@/components/TheCarousel.vue'

export default {
  name: 'HomePage',  
  components: {
    Header,
    TheCarousel
  }
}
</script>

<style>
.home-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4em 0;
}

.home-content-text {
  width: 40%;
}

.home-content-img {
  width: 50%;
}

.home-content-img img {
  width: 100%;
}

@media only screen and (max-width: 1024px) {
  .home-content {
    flex-direction: column;
  }
  .home-content-text, .home-content-img {
    width: 100%;
  }
}

</style>