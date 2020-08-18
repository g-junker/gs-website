<template>
  <div>
    <Header isLogoWhite isTransparent />
    <div class="page-header projects-header">
      <h1 class="container-sm page-header__title">
        <span class="page-header__title--sm">Conheça nossos</span
        >Empreendimentos
      </h1>
    </div>
    <div class="container-sm">
      <div
        class="project"
        :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        :data-aos-duration="1500"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="project__image-container">
          <img :src="project.image" class="project__image" />
        </div>
        <div class="project__content">
          <h2>{{ project.title }}</h2>
          <span class="project__content-text">{{ project.location }}</span>
          <p class="project__content-text">{{ project.text }}</p>
          <router-link :to="project.link">
            <button class="button">
              Saiba mais <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/TheHeader.vue";

export default {
  name: "NossosEmpreendimentos",
  data() {
    return {
      projects: [
        {
          title: "Terroir Villaggio",
          location: "São Joaquim, SC",
          text:
            "Um empreendimento único, que reserva espaço, conforto e segurança, agregando em seu moderno projeto, diferenciais até então inexistentes na região.",
          image: require("@/assets/images/empr-terroir.jpg"),
          link: "#"
        },
        {
          title: "Residencial Parque da Lagoa",
          location: "Imbituba, SC",
          text:
            "O Residencial Parque da Lagoa oferece a perfeita integração com a natureza e a qualidade de vida.",
          image: require("@/assets/images/empr-lagoa.jpg"),
          link: "/empreendimentos/parque-da-lagoa"
        },
        {
          title: "Residencial Jardim Europa",
          location: "Tijucas, SC",
          text:
            "O Jardim Europa Residencial contempla o convívio familiar e também oferece espaços para para você e sua família aproveitarem mais a vida.",
          image: require("@/assets/images/empr-jardim.jpg"),
          link: "/empreendimentos/jardim-europa"
        }
      ]
    };
  },
  components: {
    Header
  }
};
</script>

<style>
.projects-header {
  background-image: url("~@/assets/images/nossos-empreendimentos-bg.jpg");
}

.project {
  display: flex;
  padding: 3em 0;
  border-bottom: 1px solid var(--box-medium-color);
}

.project__image-container {
  width: 50%;
}

.project__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project__content {
  width: 50%;
  padding-left: 2em;
  align-self: flex-end;
}

.project__content-text {
  padding: 1em 0 2em;
  font-size: 0.8em;
  line-height: 1.5em;
}

@media only screen and (max-width: 550px) {
  .project {
    flex-direction: column;
  }

  .project__image-container,
  .project__content {
    width: 100%;
  }

  .project__content {
    margin-top: 2em;
    padding: 0;
  }
}
</style>
