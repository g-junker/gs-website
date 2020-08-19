<template>
  <div>
    <Header isLogoWhite isTransparent />
    <div class="project-hero lagoa-hero">
      <div class="lagoa-hero__headline container">
        <div class="lagoa-hero__logo-container">
          <img
            src="@/assets/images/logo-lagoa.png"
            alt=""
            class="lagoa-hero__logo"
          />
        </div>
        <h1 class="lagoa-hero__text">Parque da Lagoa</h1>
      </div>
    </div>
    <div class="lagoa-info container">
      <p><i class="fas fa-building"></i> Condomínio Fechado</p>
      <p><i class="fas fa-map-marker-alt"></i> Imbituba - SC</p>
    </div>
    <div class="lagoa-image-text-row">
      <div
        class="lagoa__text-left"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1>Imbituba:<br />uma cidade que transforma</h1>
        <p>
          É nesse contexto que nasce o Residencial Parque da Lagoa. Um
          empreendimento único, que reserva espaço, conforto e segurança,
          agregando em seu moderno projeto, diferenciais inexistentes nesta
          região.
        </p>
        <p>
          Sua localização privilegiada, em frente à lagoa, permite seu uso como
          residência urbana ou de veraneio.
        </p>
      </div>
      <div
        class="lagoa__image-container"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src="@/assets/images/lagoa/01.jpg" alt="" class="lagoa__image" />
      </div>
    </div>
    <div class="lagoa__banner">
      <img src="@/assets/images/lagoa/02.jpg" alt="" class="lagoa__image" />
    </div>
    <div class="lagoa-image-text-row">
      <div
        class="lagoa__image-container lagoa--flex-order"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img src="@/assets/images/lagoa/03.jpg" alt="" class="lagoa__image" />
      </div>
      <div
        class="lagoa__text-right"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 class="lagoa-h2">Características</h2>
        <p>
          Os momentos de lazer não foram esquecidos. O Residencial Parque da
          Lagoa contempla o convívio familiar e também oferece espaços para
          receber visitantes com muita elegância e distinção. Tudo para
          valorizar seu estilo de vida.
        </p>
        <ul class="lagoa-ul">
          <li>Praça com área de lazer</li>
          <li>Mirante para a lagoa</li>
          <li>Quadra poliesportiva</li>
          <li>Playground</li>
        </ul>
      </div>
    </div>
    <div class="lagoa-image-text-row lagoa-dark-background">
      <div
        class="lagoa__text-left"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 class="lagoa-h2 text-white">Infraestrutura</h2>
        <p>
          Área: 72.000 m²<br />
          Lotes: a partir de 200m²
        </p>
        <ul class="lagoa-ul">
          <li>Ligação elétrica subterrânea</li>
          <li>Ruas pavimentadas</li>
          <li>Rede coletora e Estação de Tratamento de Esgoto</li>
        </ul>
      </div>
      <div
        class="lagoa__image-container"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          src="@/assets/images/lagoa/04.jpg"
          alt=""
          class="lagoa__image lagoa-infraestrutura-image"
        />
      </div>
    </div>
    <div class="lagoa__gallery">
      <h2 class="lagoa-h2 text-centered">Galeria de Imagens</h2>
      <PhotoGallery />
    </div>
    <div class="location">
      <h2>Localização</h2>
      <p class="location__address">Porto da Vila, Imbituba - SC</p>
      <iframe
        data-aos="fade-up"
        data-aos-duration="1000"
        class="location__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4969.364454775437!2d-48.700724457368665!3d-28.271918925708125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9526b5d93d9980f7%3A0xb64b33dd6c1c3c2e!2sLoteamento%20Residencial%20Parque%20da%20Lagoa!5e0!3m2!1sen!2sde!4v1596739730384!5m2!1sen!2sde"
        width="100%"
        height="600"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
    <TheFinancingSimulator />
    <div class="project-form">
      <h2 class="text-centered">Fale Conosco</h2>
      <div data-aos="fade-up" data-aos-duration="1000">
        <TheForm />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/TheHeader.vue";
import PhotoGallery from "@/components/PhotoGallery.vue";
import TheFinancingSimulator from "@/components/TheFinancingSimulator.vue";
import TheForm from "@/components/TheForm.vue";

export default {
  name: "ParqueDaLagoa",
  data() {
    return {};
  },
  components: {
    Header,
    PhotoGallery,
    TheFinancingSimulator,
    TheForm
  }
};
</script>

<style>
.lagoa-h2 {
  margin-bottom: 2em;
}

.lagoa-hero {
  background-image: url("~@/assets/images/home-slide-1.jpg");
  background-position: center;
}

.lagoa-hero__headline {
  display: flex;
  align-items: center;
}

.lagoa-hero__logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #fff;
}

.lagoa-hero__logo {
  width: 90%;
}

.lagoa-hero__text {
  max-width: 400px;
  margin-left: 0.7em;
  padding: 0;
  color: #fff;
  font-weight: bold;
  font-size: calc(40px + (64 - 40) * ((100vw - 450px) / (1920 - 450)));
}

.lagoa-info {
  display: flex;
}

.lagoa-info p {
  padding-right: 2em;
  padding-top: 1em;
  margin: 0;
}

.lagoa-image-text-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4em;
}

.lagoa__text-left {
  margin-left: 7.5%;
  width: 30%;
}

.lagoa__text-right {
  margin-right: 7.5%;
  width: 30%;
}

.lagoa__image-container {
  width: 55%;
}

.lagoa__image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.lagoa__banner {
  width: 100%;
  margin-top: 4em;
}

.lagoa-dark-background {
  margin: 8em 0 4em;
  background-color: var(--main-color);
  color: #fff;
}

.lagoa-infraestrutura-image {
  transform: translateY(-4em);
}

@media only screen and (max-width: 750px) {
  h1 {
    margin: 0;
  }
  .lagoa-info {
    flex-direction: column;
    margin-top: 1em;
  }

  .lagoa-image-text-row {
    flex-direction: column;
    margin: 0;
  }

  .lagoa__text-left,
  .lagoa__text-right {
    width: 85%;
    margin: 0;
    padding: 3em 0;
  }

  .lagoa__image-container {
    width: 100%;
  }

  .lagoa__banner {
    margin-top: 0;
  }

  .lagoa--flex-order {
    order: 1;
  }

  .lagoa-infraestrutura-image {
    transform: none;
    margin-bottom: 4em;
  }

  .lagoa__image {
    height: 350px;
  }
  .lagoa-hero__logo-container {
    width: 75px;
    height: 75px;
    margin-bottom: 1em;
  }
  .lagoa-hero__text {
    margin-left: 0;
    max-width: 250px;
  }

  .lagoa__gallery {
    margin-top: 4em;
  }

  .lagoa-hero__headline {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
