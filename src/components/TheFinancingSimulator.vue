<template>
  <div class="simulador">
    <h2>Simulador de Financiamento</h2>
    <a
      href="https://www42.bb.com.br/portalbb/imobiliario/creditoimobiliario/simular,802,2250,2250.bbx"
      target="_blank"
    >
      <img
        class="simulador-img"
        src="@/assets/images/simulador-bb.png"
        alt="banco do brasil"
      />
    </a>
    <a
      href="http://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso"
      target="_blank"
    >
      <img
        class="simulador-img"
        src="@/assets/images/simulador-cx.png"
        alt="caixa econômica"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "TheFinancingSimulator"
};
</script>

<style>
.simulador {
  text-align: center;
  padding: 4em 0;
  background-color: var(--main-color);
  color: #fff;
}

.simulador h2 {
  color: #fff;
  margin-bottom: 2em;
  padding: 0 2em;
}

.simulador-img {
  width: 200px;
  border-radius: 10px;
  margin: 1em;
}

.simulador-img:hover {
  filter: brightness(110%);
}
</style>
