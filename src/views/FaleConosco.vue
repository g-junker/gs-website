<template>
  <div>
    <Header/>
    <div class="contato-header">
        <h1 class="container-sm">Fale Conosco</h1>
    </div>
    <div class="contato-wrapper">
        <div class="contato-form">
            <TheForm/>
        </div>
        <div class="contato-info">
            <span>(48) 3333-7468 | (48) 99194-5415</span>
            <p>contato@gonzagasampaio.com.br</p>
        </div>
    </div>
    <div class="contato-localizaçao">
    <h2>Onde Estamos</h2>
    <div class="contato-address">
        <p>Rua Emílio Blum, 131 - Ed. Hantei Office Building<br>
        Bloco B, 7º andar, Sala 701, Centro<br>
        CEP 88020-010   |  Florianópolis, SC</p>
    </div>
    <iframe
        class="contato-localizaçao-mapa"
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
    
  </div>
</template>

<script>
import Header from '@/components/HeaderWhite.vue'
import TheForm from '@/components/TheForm.vue'

export default {
  name: 'FaleConosco',
  components: {
    Header,
    TheForm
  }
}
</script>

<style>
.contato-header {
    position: relative;
    width: 100%;
    height: 300px;
    background-image: url('~@/assets/images/contato-header.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    
}
.contato-header h1 {
    color: #FFF;
    z-index: 2;
}

.contato-wrapper {
    transform: translateY(-4em);
}

.contato-form {
    position: relative;
    background-color: #FFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    padding: 4em 0;
    z-index: 3;
    width: 85%;
    max-width: 850px;
    margin: auto;
}

.contato-info {
    background-color: var(--main-color);
    color: #FFF;
    text-align: center;
    padding: 8em 10% 3em;
    font-weight: 300;
    transform: translateY(-4em);
    margin-bottom: -8em;
}

.contato-info span {
    font-size: 1.5em;
}

.contato-localizaçao {
    background-color: var(--box-light-color);
    text-align: center;
    padding-top: 4em
}

.contato-address {
    width: 90%;
    margin: auto;
    padding: 2em 0 1em;
}

.contato-localizaçao-mapa {
    border-top: 5px solid #FFF !important;
}

@media only screen and (max-width: 500px) {
  .contato-form {
    width: 100%;
  }
}
</style>