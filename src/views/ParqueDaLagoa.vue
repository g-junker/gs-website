<template>
  <div>
    <Header />
    <div class="lagoa-header">
      <div class="lagoa-container container">
        <div class="lagoa-logo">
          <img src="@/assets/images/logo-lagoa.png" alt="" />
        </div>
        <h1>Parque da Lagoa</h1>
      </div>
    </div>
    <div class="lagoa-info container">
      <p><i class="fas fa-building"></i> Condomínio Fechado</p>
      <p><i class="fas fa-map-marker-alt"></i> Imbituba - SC</p>
    </div>
    <div class="lagoa-intro">
      <div class="lagoa-intro-left">
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
      <div class="lagoa-intro-right">
        <img src="@/assets/images/lagoa/01.jpg" alt="" />
      </div>
    </div>
    <div class="lagoa-banner">
      <img src="@/assets/images/lagoa/02.jpg" alt="" />
    </div>
    <div class="lagoa-características">
      <div class="lagoa-características-left">
        <img src="@/assets/images/lagoa/03.jpg" alt="" />
      </div>
      <div class="lagoa-características-right">
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
    <div class="lagoa-infraestrutura">
      <div class="lagoa-infraestrutura-left">
        <h2 class="lagoa-h2">Infraestrutura</h2>
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
      <div class="lagoa-infraestrutura-right">
        <img src="@/assets/images/lagoa/04.jpg" alt="" />
      </div>
    </div>
    <div class="lagoa-galeria">
      <h2 class="lagoa-h2">Galeria de Imagens</h2>
      <PhotoGallery />
    </div>
    <div class="lagoa-localizaçao">
      <h2>Localização</h2>
      <p>Porto da Vila, Imbituba - SC</p>
      <iframe
        class="lagoa-localizaçao-mapa"
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
    <div class="lagoa-formulario">
      <h2>Fale Conosco</h2>
      <TheForm />
    </div>
  </div>
</template>

<script>
import Header from "@/components/HeaderWhite.vue";
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

.lagoa-header {
  background-image: url("~@/assets/images/home-slide-1.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  align-items: center;
}

.lagoa-container {
  display: flex;
  align-items: center;
}

.lagoa-logo {
  width: 100px;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lagoa-logo img {
  width: 90%;
}

.lagoa-header h1 {
  margin: 0 0 0 0.7em;
  padding: 0;
  max-width: 250px;
  color: #fff;
  font-weight: bold;
  font-size: calc(32px + (64 - 32) * ((100vw - 450px) / (1920 - 450)));
}

.lagoa-info {
  display: flex;
}

.lagoa-info p {
  padding-right: 2em;
  padding-top: 1em;
  margin: 0;
}

.lagoa-intro {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4em;
}

.lagoa-intro-left {
  margin-left: 10%;
  width: 30%;
}

.lagoa-intro-right {
  width: 55%;
}

.lagoa-intro-right img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.lagoa-banner {
  width: 100%;
  margin-top: 4em;
}

.lagoa-banner img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.lagoa-características {
  display: flex;
  margin-top: 4em;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
}

.lagoa-características-left {
  width: 55%;
}

.lagoa-características-left img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.lagoa-características-right {
  width: 30%;
  margin-right: 10%;
}

.lagoa-infraestrutura {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-color);
  color: #fff;
  margin-top: 8em;
}

.lagoa-infraestrutura h2 {
  color: #fff;
}

.lagoa-infraestrutura-left {
  margin-left: 10%;
  width: 30%;
  padding: 2em 0;
}

.lagoa-infraestrutura-right {
  width: 55%;
  transform: translateY(-4em);
}

.lagoa-infraestrutura-right img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.lagoa-galeria,
.lagoa-localizaçao {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4em;
}

.lagoa-galeria img {
  width: 100%;
  object-fit: contain;
}

.lagoa-localizaçao {
  background-color: var(--box-light-color);
  padding-top: 4em;
}

.lagoa-localizaçao-mapa {
  border-top: 5px solid #fff !important;
}

.lagoa-formulario {
  text-align: center;
  margin: 4em 0 5em;
}

@media only screen and (max-width: 700px) {
  .lagoa-info,
  .lagoa-intro,
  .lagoa-características,
  .lagoa-infraestrutura {
    flex-direction: column;
    margin: 0;
  }

  .lagoa-intro-left,
  .lagoa-características-right,
  .lagoa-infraestrutura-left {
    width: 80%;
    margin: 0;
    padding: 3em 0;
  }

  .lagoa-intro-right,
  .lagoa-características-left,
  .lagoa-infraestrutura-right {
    width: 100%;
  }

  .lagoa-banner,
  .lagoa-infraestrutura {
    margin-top: 0.25em;
  }

  .lagoa-características-left {
    order: 1;
  }

  .lagoa-infraestrutura-left {
    margin-bottom: 4em;
  }

  .lagoa-infraestrutura-right img,
  .lagoa-características-left img,
  .lagoa-banner img,
  .lagoa-intro-right img {
    height: 350px;
  }
}
</style>
