<template>
    <div>
        <Header/>
        <div class="quem-somos-flex-col">
            <div class="quem-somos-img"></div>        
            <div class="quem-somos-texto-a">
                <h1>Quem Somos</h1>
                <p>A Gonzaga Sampaio iniciou suas atividades em 2011, com a proposta de desenvolver projetos diferenciados, independentemente do padrão de cada empreendimento, focando sempre no conforto dos clientes e no potencial de valorização dos imóveis entregues.</p>
            </div>
            <div class="quem-somos-texto-b-wrapper">
                <div class="quem-somos-texto-b">
                    <p>Para isso, damos atenção especial quanto à escolha do terreno, posição solar do empreendimento, acesso às vias de trânsito civil de Santa Catarina, tendo em sua origem o pioneirismo na incorporação de apartamentos em condomínios verticais em Florianópolis.</p>
                </div>
            </div>
        </div>
        
        <div class="quem-somos-missao-visao">
            <div class="quem-somos-missao">
                <div class="quem-somos-icone"><img src="@/assets/svg/mission.svg" alt=""></div>
                <div class="quem-somos-icone-texto">
                    <h2>Missão</h2>
                    <p>Fornecer unidades habitacionais com alta qualidade, projetos sustentáveis e de alta valorização, objetivando conforto e satisfação dos clientes.</p>
                </div>
            </div>
            <div class="quem-somos-visao">
                <div class="quem-somos-icone"><img src="@/assets/svg/anatomy.svg" alt=""></div>
                <div class="quem-somos-icone-texto">
                    <h2>Visão</h2>
                    <p>Posicionar a marca no mercado em que atua e contribuir para o desenvolvimento social.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/HeaderColor.vue'

export default {
  name: 'QuemSomos',    
  components: {
    Header
  }
}
</script>

<style>
.quem-somos-texto-a {
    margin-top: 6em;
    width: 35%;
    margin-left: 10%;
}

.quem-somos-texto-b-wrapper {
    background: var(--box-light-color);
}

.quem-somos-texto-b {
    padding: 2em 0;
    margin-top: 2em;
    margin-left: 10%;
    width: 35%;
    display: flex;
}


.quem-somos-img {
    position: absolute;
    right: 0;
    top: 10em;
    width: 50%;
    height: 35%;
    background-image: url('~@/assets/images/quem-somos.jpg');
    background-size: cover;
    background-position: center;
}

.quem-somos-missao-visao {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 3em auto;
}

.quem-somos-icone img {
    background-color: var(--box-light-color);
    border-radius: 50%;
    width: 100px;
    margin-bottom: 1em;
}

.quem-somos-missao, .quem-somos-visao {
    display: flex;
    width: 45%;
    margin-top: 2em;
}

.quem-somos-icone-texto {
    padding: 0 2em;
}

@media only screen and (max-width: 1000px) {
    .quem-somos-missao-visao {
        flex-direction: column;
        align-items: center;
    }
    .quem-somos-missao, .quem-somos-visao {
        width: 100%;
    }
}

@media only screen and (max-width: 800px) {

    .quem-somos-flex-col {
        display: flex;
        flex-direction: column;
    }
    .quem-somos-img {
        order: 0;
        position: relative;
        width: 100%;
        height: 250px;
        top: 0;
        margin-top: 2em;
    }

    .quem-somos-texto-a {
        margin-top: 3em;
        order: -1;
        position: relative;
        width: 80%;
    }

    .quem-somos-texto-b {
        order: 1;
        width: 80%;
        margin-top: 0;
    }
}


@media only screen and (max-width: 550px) {
    .quem-somos-missao, .quem-somos-visao {
        flex-direction: column;
        text-align: center;
    }
}

</style>