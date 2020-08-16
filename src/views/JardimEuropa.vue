<template>
  <div>
    <Header/>
    <div class="jardim-header">
        <div class="jardim-container container">
            <img class="jardim-logo" src="@/assets/images/jardim-europa/logo.png">
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
    <div class="jardim-intro">
        <div class="jardim-intro-left">
            <h1>Condomínio fechado no centro de Tijucas</h1>
        </div>
        <div class="jardim-intro-right">
            <img src="@/assets/images/jardim-europa/01.jpg" alt="">
        </div>
    </div>
    <div class="jardim-detalhes">
        <div class="jardim-detalhes-item"
             v-for="(detalhe, index) in detalhes"
             :key="index"
        >
            <div class="jardim-detalhes-item-icon">
                <img :src="detalhe.icon">
            </div>
            <p>{{ detalhe.text }}</p>
        </div>
    </div>
    <div class="jardim-imagens">
        <div class="jardim-imagens-item">
            <img src="@/assets/images/jardim-europa/02.jpg">
        </div>
        <div class="jardim-imagens-item">
            <img src="@/assets/images/jardim-europa/03.jpg">
        </div>
    </div>
    <div class="jardim-plantas">
        <h2>Plantas</h2>
        <div class="plantas-imagens">
            <div class="planta-detalhe">
                <img src="@/assets/images/jardim-europa/planta-tipo-a.jpg">
                <p>Planta Apto Tipo A</p>
            </div>
            <div class="planta-detalhe">
                <img src="@/assets/images/jardim-europa/planta-tipo-b.jpg">
                <p>Planta Apto Tipo B</p>
            </div>
        </div>

    </div>
    <div class="jardim-localizaçao">
        <h2>Localização</h2>
        <p>Avenida Emília Ramos, Tijucas - SC</p>
        <iframe
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
    <TheFinancingSimulator/>
    <div class="jardim-formulario">
        <h2>Fale Conosco</h2>
        <TheForm/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/HeaderWhite.vue'
import TheFinancingSimulator from '@/components/TheFinancingSimulator.vue'
import TheForm from '@/components/TheForm.vue'

export default {
  name: 'JardimEuropa',    
  data() {
    return {
      detalhes: [
        {
          icon: require('@/assets/svg/bed.svg'),
          text: '2 dormitórios'
        },
        {
          icon: require('@/assets/svg/bbq.svg'),
          text: 'Sacada com churrasqueira'
        },
        {
          icon: require('@/assets/svg/car.svg'),
          text: 'Garagem Coberta'
        },
        {
          icon: require('@/assets/svg/elevator.svg'),
          text: 'Elevador'
        },
        {
          icon: require('@/assets/svg/playground.svg'),
          text: 'Playground'
        },
        {
          icon: require('@/assets/svg/champagne-glass.svg'),
          text: 'Salão de Festas'
        }
      ]
    }
  },
  components: {
    Header,
    TheFinancingSimulator,
    TheForm
  }
}
</script>

<style>
.jardim-header {
    background-image: url('~@/assets/images/jardim-europa/cover.jpg');
    background-size: cover;
    background-position-x: 25%;
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.jardim-container {
    transform: translateY(4em);
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

.jardim-intro {
    margin: 2em 0 4em;
    position: relative;
}

.jardim-intro-left {
    padding: 3em 10%;
    background-color: var(--box-light-color);
    transform: translateY(200px);
}

.jardim-intro-left h1 {
    width: 35%;
}

.jardim-intro-right {
    position: absolute;
    right: 10%;
    top: 0;
    width: 45%;
}

.jardim-intro-right img {
    width: 100%;
    height: 450px;
    object-fit: cover;
}

.jardim-detalhes {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 80%;
    max-width: 1000px;
    margin: 250px auto 0;
}

.jardim-detalhes-item {
    width: 125px;
    text-align: center;
    padding: 1em 0;
}

.jardim-detalhes-item-icon img {
    background-color: var(--box-light-color);
    border-radius: 50%;
    width: 100px;
}

.jardim-imagens {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 4em auto 0;
}

.jardim-imagens-item img {
    width: 100%;
    object-fit: contain;
}

.jardim-plantas {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: var(--main-color);
    color: #FFF;
    padding: 4em 10%;
    margin: 6em 0 4em;
}

.jardim-plantas h2 {
    color: #FFF;
    width: 20%;
    margin: auto;
}

.plantas-imagens {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    min-width: 350px;
    width: 80%;
}

.planta-detalhe {
    text-align: center;
    width: 48%;
    min-width: 300px;
    padding-top: 2em;
    text-transform: uppercase;
}

.planta-detalhe img {
    min-width: 300px;
    max-width: 100%;
}

.jardim-localizaçao {
    text-align: center;
}

.jardim-localizaçao-mapa {
    border-top: 5px solid #FFF !important;
}

.jardim-formulario {
    text-align: center;
    margin: 4em 0 5em;
}

@media only screen and (max-width: 700px) {
    .jardim-info, .jardim-intro {
        flex-direction: column;
        margin: 0;
    }

    .jardim-intro-left {
        transform: translateY(0);
    }
    
    .jardim-intro-left h1 {
        width: auto;
    }

    .jardim-intro-right {
        position: relative;
        width: 100%;
        right: 0;
    }

    .jardim-intro-right img {
        width: 100%;
        height: auto;
    }
    
    .jardim-detalhes {
        justify-content: space-evenly;
        width: 80%;
        margin-top: 2em;
    }
}

</style>