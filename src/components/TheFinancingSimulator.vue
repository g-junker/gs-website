<template>
  <div class="simulator" :class="{ 'simulator--expanded': !isHidden }">
    <h2 class="simulator__title">Simulador de Financiamento</h2>
    <button
      @click="isHidden = !isHidden"
      class="simulator__button button button--white"
      v-if="isHidden"
    >
      Acesse aqui
    </button>

    <div class="simulator__container" v-if="!isHidden">
      <div
        v-for="(bank, index) in banks"
        :key="index"
        :data-aos="index % 2 ? 'fade-right' : 'fade-left'"
        data-aos-duration="1000"
        data-aos-delay="250"
      >
        <a :href="bank.link" target="_blank">
          <img
            :src="bank.img"
            alt="bank.name"
            class="simulator__image-button"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFinancingSimulator",
  data() {
    return {
      isHidden: true,
      banks: [
        {
          name: "caixa econômica",
          img: require("@/assets/images/simulador-cx.png"),
          link:
            "http://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso"
        },
        {
          name: "banco do brasil",
          img: require("@/assets/images/simulador-bb.png"),
          link:
            "https://www42.bb.com.br/portalbb/imobiliario/creditoimobiliario/simular,802,2250,2250.bbx"
        }
      ]
    };
  }
};
</script>

<style>
.simulator {
  padding: 4em 0;
  background-color: var(--main-color);
  text-align: center;
  max-height: 100px;
}

.simulator--expanded {
  transition: max-height 1.5s ease-in-out;
  max-height: 500px;
}

.simulator__title {
  margin-bottom: 2em;
  padding: 0 2em;
  color: #fff;
}

.simulator__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.simulator__image-button {
  width: 200px;
  margin: 1em;
  border-radius: 10px;
}

.simulator__image-button:hover {
  filter: brightness(110%);
}

.simulator__button {
  margin: auto;
  transition: all 0.3s ease;
}
</style>
