<template>
  <div class="simulator">
    <h2 class="simulator__title">Simulador de Financiamento</h2>
    <button
      @click="isHidden = !isHidden"
      class="simulator__button button-white"
      v-if="isHidden"
    >
      Acesse aqui
    </button>
    <transition name="fade-button">
      <div class="simulator__container" v-if="!isHidden">
        <div
          v-for="(bank, index) in banks"
          :key="index"
          :data-aos="index % 2 ? 'fade-right' : 'fade-left'"
          data-aos-duration="1000"
          data-aos-delay="100"
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
    </transition>
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
  transition: height 0.3s;
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

.fade-button-enter-active,
.fade-button-leave-active {
  transition: opacity 2s;
}
.fade-button-enter, .fade-button-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
