<template>
  <div>
    <CoolLightBox
      :items="items"
      :index="index"
      @close="index = null"
      :effect="'fade'"
    >
    </CoolLightBox>
    <Header isLogoWhite isTransparent />
    <div class="jardim-header">
      <div class="jardim-container container">
        <img class="jardim-logo" src="@/assets/images/jardim-europa/logo.png" />
        <p class="jardim-headline">
          Especialmente planejado para o
          <span>bem estar da sua família</span>
        </p>
      </div>
    </div>
    <div class="jardim-info container">
      <p><i class="fas fa-building"></i> Condomínio Fechado</p>
      <p><i class="fas fa-map-marker-alt"></i> Imbituba - SC</p>
    </div>
    <div class="jardim__intro">
      <div class="jardim__intro-text">
        <h1 data-aos="fade-right" data-aos-duration="1000">
          Condomínio fechado no centro de Tijucas
        </h1>
      </div>
      <div
        class="jardim__intro-image-container"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="50"
      >
        <img
          src="@/assets/images/jardim-europa/01.jpg"
          alt=""
          class="jardim__intro-image"
        />
      </div>
    </div>
    <div class="jardim-details">
      <div
        class="jardim-details__item"
        v-for="(detalhe, index) in detalhes"
        :key="index"
      >
        <div>
          <img :src="detalhe.icon" class="jardim-details__icon" />
        </div>
        <p>{{ detalhe.text }}</p>
      </div>
    </div>
    <div class="jardim-images">
      <div
        class="jardim-images__item"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          src="@/assets/images/jardim-europa/02.jpg"
          class="jardim-images__image"
        />
      </div>
      <div
        class="jardim-images__item"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          src="@/assets/images/jardim-europa/03.jpg"
          class="jardim-images__image"
        />
      </div>
    </div>

    <div class="jardim-floor-plans">
      <h2 class="jardim-floor-plans__headline">Plantas</h2>
      <div class="jardim-floor-plans__images">
        <div
          v-for="(image, imageIndex) in items"
          :key="imageIndex"
          @click="index = imageIndex"
          :data-aos="imageIndex % 2 ? 'fade-right' : 'fade-left'"
          data-aos-duration="1000"
          class="jardim-floor-plans__item"
        >
          <img :src="image.src" class="jardim-floor-plans__item-image" />
          <p>{{ image.text }}</p>
        </div>
      </div>
    </div>
    <div class="location">
      <h2>Localização</h2>
      <p class="location__address">Avenida Emília Ramos, Tijucas - SC</p>
      <iframe
        data-aos="fade-up"
        data-aos-duration="1000"
        class="location__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8436.671842063412!2d-48.654884834666255!3d-27.244772000976802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8abdc900dc505%3A0xd78baebf76030702!2sAv.%20Emilia%20Ramos%2C%20Tijucas%20-%20SC%2C%2088200-000%2C%20Brazil!5e0!3m2!1sen!2sde!4v1596807030201!5m2!1sen!2sde"
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
import TheFinancingSimulator from "@/components/TheFinancingSimulator.vue";
import TheForm from "@/components/TheForm.vue";

export default {
  name: "JardimEuropa",
  data() {
    return {
      selectedImage: "",
      url: "",
      items: [
        {
          src: require("@/assets/images/jardim-europa/planta-tipo-a.jpg"),
          text: "Planta Apto Tipo A"
        },
        {
          src: require("@/assets/images/jardim-europa/planta-tipo-b.jpg"),
          text: "Planta Apto Tipo B"
        }
      ],
      index: null,
      detalhes: [
        {
          icon: require("@/assets/svg/bed.svg"),
          text: "2 dormitórios"
        },
        {
          icon: require("@/assets/svg/bbq.svg"),
          text: "Sacada com churrasqueira"
        },
        {
          icon: require("@/assets/svg/car.svg"),
          text: "Garagem Coberta"
        },
        {
          icon: require("@/assets/svg/elevator.svg"),
          text: "Elevador"
        },
        {
          icon: require("@/assets/svg/playground.svg"),
          text: "Playground"
        },
        {
          icon: require("@/assets/svg/champagne-glass.svg"),
          text: "Salão de Festas"
        }
      ],
      images: [
        { src: require("@/assets/images/jardim-europa/planta-tipo-a.jpg") }
      ]
    };
  },
  components: {
    Header,
    TheFinancingSimulator,
    TheForm
  },
  metaInfo: {
    title: "Residencial Jardim Europa",
    meta: [
      {
        name: "description",
        content:
          "O Jardim Europa Residencial contempla o convívio familiar e também oferece espaços para para você e sua família aproveitarem mais a vida."
      }
    ]
  }
};
</script>

<style>
body {
  overflow-x: hidden;
}

.jardim-floor-plans__item img {
  width: 100%;
}

.jardim-header {
  background-image: url("~@/assets/images/jardim-europa/cover.jpg");
  background-size: cover;
  background-position-x: 35%;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.jardim-logo {
  max-width: 250px;
}

.jardim-headline {
  width: 35%;
  max-width: 400px;
  font-size: calc(24px + (38 - 24) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.2em;
}

.jardim-headline span {
  font-weight: bold;
}

.jardim-info {
  display: flex;
}

.jardim-info p {
  padding-right: 2em;
  padding-top: 1em;
  margin: 0;
}

.jardim__intro {
  margin: 2em 0 4em;
  position: relative;
}
.jardim__intro-text {
  padding: 3em 7.5%;
  background-color: var(--box-light-color);
  transform: translateY(200px);
}
.jardim__intro-text h1 {
  width: 35%;
}
.jardim__intro-image-container {
  position: absolute;
  right: 10%;
  top: 0;
  width: 45%;
}
.jardim__intro-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.jardim-details {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  max-width: 1000px;
  margin: 250px auto 0;
}

.jardim-details__item {
  width: 125px;
  padding: 1em;
  text-align: center;
}

.jardim-details__item > p {
  margin: 0.3em;
}

.jardim-details__icon {
  width: 100px;
  background-color: var(--box-light-color);
  border-radius: 50%;
}

.jardim-images {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 4em auto 0;
}

.jardim-images__image {
  width: 100%;
  object-fit: contain;
}

.jardim-floor-plans {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-color);
  color: #fff;
  padding: 4em 10%;
  margin-top: 6em;
}

.jardim-floor-plans__headline {
  margin: auto;
  width: 20%;
  min-width: 120px;
  color: #fff;
  text-align: center;
}

.jardim-floor-plans__images {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
}

.jardim-floor-plans__item {
  text-align: center;
  width: 40%;
  min-width: 300px;
  padding-top: 2em;
  text-transform: uppercase;
}

.jardim-floor-plans__item-image {
  width: 100%;
}

.jardim-floor-plans__item-image:hover {
  cursor: pointer;
}

.jardim-localizaçao {
  text-align: center;
}

.jardim-localizaçao-mapa {
  border-top: 5px solid #fff !important;
}

@media only screen and (max-width: 750px) {
  p {
    line-height: 22px;
  }
  .jardim-info,
  .jardim__intro {
    flex-direction: column;
    margin-bottom: 2em;
  }

  .jardim-info {
    margin-top: 1em;
  }

  .jardim__intro-text {
    padding: 3em 0;
    transform: translateY(0);
  }

  .jardim__intro-text h1 {
    width: 85%;
    margin: auto;
  }

  .jardim__intro-image-container {
    position: relative;
    width: 100%;
    right: 0;
  }

  .jardim__intro-image {
    width: 100%;
    height: auto;
  }

  .jardim-details {
    width: 100%;
    margin: 0 auto;
  }

  .jardim-floor-plans {
    margin-top: 4em;
  }

  .jardim-header {
    background-position-x: 65%;
    position: relative;
  }

  .jardim-container {
    position: absolute;
    bottom: 0;
    transform: translateY(0);
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0) 34.38%,
      rgba(255, 255, 255, 0.9) 63.54%
    );
    width: 100%;
    height: 100%;
  }

  .jardim-headline {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 3em;
    margin: auto;
    max-width: 80%;
    width: 80%;
  }

  .jardim-logo {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 12em;
    margin: auto;
  }

  .jardim-images {
    margin-top: 2em;
  }
  .jardim-floor-plans {
    margin-top: 0;
  }
}
</style>
