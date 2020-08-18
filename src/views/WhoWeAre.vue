<template>
  <div>
    <Header />
    <div class="about">
      <div
        class="about__image-container"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <img src="@/assets/images/quem-somos.jpg" alt="" class="about__image" />
      </div>
      <div class="about__text-top">
        <h1>Quem Somos</h1>
        <p>
          A Gonzaga Sampaio iniciou suas atividades em 2011, com a proposta de
          desenvolver projetos diferenciados, independentemente do padrão de
          cada empreendimento, focando sempre no conforto dos clientes e no
          potencial de valorização dos imóveis entregues.
        </p>
      </div>
      <div class="about__text-bottom-container">
        <div class="about__text-bottom">
          <p>
            Para isso, damos atenção especial quanto à escolha do terreno,
            posição solar do empreendimento, acesso às vias de trânsito civil de
            Santa Catarina, tendo em sua origem o pioneirismo na incorporação de
            apartamentos em condomínios verticais em Florianópolis.
          </p>
        </div>
      </div>
    </div>

    <div class="mission-vision">
      <div
        class="mission-vision__item"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <div>
          <img
            src="@/assets/svg/mission.svg"
            alt=""
            class="mission-vision__icon"
          />
        </div>
        <div class="mission-vision__text">
          <h2>Missão</h2>
          <p>
            Fornecer unidades habitacionais com alta qualidade, projetos
            sustentáveis e de alta valorização, objetivando conforto e
            satisfação dos clientes.
          </p>
        </div>
      </div>
      <div
        class="mission-vision__item"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1300"
      >
        <div>
          <img
            src="@/assets/svg/anatomy.svg"
            alt=""
            class="mission-vision__icon"
          />
        </div>
        <div class="mission-vision__text">
          <h2>Visão</h2>
          <p>
            Posicionar a marca no mercado em que atua e contribuir para o
            desenvolvimento social.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/TheHeader.vue";

export default {
  name: "QuemSomos",
  components: {
    Header
  }
};
</script>

<style>
.about {
  position: relative;
  margin-top: 4em;
}

.about__image-container {
  position: absolute;
  right: 0;
  width: 50%;
  height: 90%;
}

.about__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about__text-top,
.about__text-bottom {
  width: 35%;
  margin-left: 10%;
}

.about__text-bottom-container {
  background: var(--box-light-color);
  padding: 1em 0;
  margin-top: 1.5em;
}

.mission-vision {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 3em auto;
}

.mission-vision__icon {
  background-color: var(--box-light-color);
  border-radius: 50%;
  width: 100px;
  margin-bottom: 1em;
}

.mission-vision__item {
  display: flex;
  width: 45%;
  margin-top: 2em;
}

.mission-vision__text {
  padding: 0 2em;
}

@media only screen and (max-width: 1000px) {
  .mission-vision {
    flex-direction: column;
    align-items: center;
  }
  .mission-vision__item {
    width: 100%;
  }
}

@media only screen and (max-width: 800px) {
  .about {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
  }

  .about__image-container {
    order: 0;
    position: relative;
    width: 100%;
    height: 250px;
    margin-top: 1em;
  }

  .about__text-top {
    order: -1;
    position: relative;
    width: 80%;
  }

  .about__text-bottom {
    order: 1;
    width: 80%;
  }

  .about__text-bottom-container {
    margin-top: 0;
  }
}

@media only screen and (max-width: 550px) {
  .mission-vision__item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
