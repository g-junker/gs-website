<template>
  <div>
    <Header isLogoWhite isTransparent />
    <TheCarousel />
    <div class="home container">
      <div class="home__text">
        <h1 data-aos="fade-right" data-aos-duration="1000">
          Qualidade, inovação e sustentabilidade
        </h1>
        <div data-aos="fade-left" data-aos-duration="1000">
          <p>
            A Construtora Gonzaga Sampaio mantém um elevado padrão de qualidade,
            inovação e sustentabilidade. Afinal, um empreendimento de sucesso
            começa pela qualidade e diferenciais encontrados em seu projeto.
          </p>
          <router-link :to="{ name: 'OurProjects' }" class="text-link"
            >Conheça nossos empreendimentos
            <i class="fas fa-long-arrow-alt-right"></i
          ></router-link>
        </div>
      </div>
      <div
        class="home__image-container"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src="@/assets/images/home-terroir.jpg" class="home__image" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/TheHeader.vue";
import TheCarousel from "@/components/TheCarousel.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    TheCarousel
  },
  data() {
    return {
      isLogoWhite: true,
      isTransparent: true
    };
  }
};
</script>

<style>
.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4em 0;
}

.home__text {
  width: 40%;
}

.home__image-container {
  width: 50%;
}

.home__image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

@media only screen and (max-width: 800px) {
  .home {
    flex-direction: column;
    padding-top: 3em;
  }

  .home__text,
  .home__image-container {
    width: 100%;
  }

  .home__image-container {
    margin-top: 3em;
  }
}
</style>
