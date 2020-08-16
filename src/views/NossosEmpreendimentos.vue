<template>
  <div>
    <Header/>
    <div class="empreendimentos-header">
        <h1 class="container-sm"><span>Conheça nossos</span>Empreendimentos</h1>
    </div>
    <div class="empreendimentos-lista container-sm">
        <div class="empreendimento-item"
             v-for="(empreendimento, index) in empreendimentos"
             :key="index"
        >
            <div class="empreendimento-item-img">
                <img :src="empreendimento.image">
            </div>
            <div class="empreendimento-item-info">
                <h2>{{ empreendimento.title }}</h2>
                <span>{{ empreendimento.location }}</span>
                <p>{{ empreendimento.text }}</p>
                <router-link :to="empreendimento.link">
                    <button class="button">Saiba mais <i class="fas fa-long-arrow-alt-right"></i></button>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/HeaderWhite.vue'

export default {
  name: 'NossosEmpreendimentos',    
  data() {
    return {
      empreendimentos: [
      {
        title: 'Terroir Villaggio',
        location: 'São Joaquim, SC',
        text: 'Um empreendimento único, que reserva espaço, conforto e segurança, agregando em seu moderno projeto, diferenciais até então inexistentes na região.',
        image: require('@/assets/images/empr-terroir.jpg'),
        link: '#'
      },
      {
        title: 'Residencial Parque da Lagoa',
        location: 'Imbituba, SC',
        text: 'O Residencial Parque da Lagoa oferece a perfeita integração com a natureza e a qualidade de vida.',
        image: require('@/assets/images/empr-lagoa.jpg'),
        link: '/empreendimentos/parque-da-lagoa'
      },
      {
        title: 'Residencial Jardim Europa',
        location: 'Tijucas, SC',
        text: 'O Jardim Europa Residencial contempla o convívio familiar e também oferece espaços para para você e sua família aproveitarem mais a vida.',
        image: require('@/assets/images/empr-jardim.jpg'),
        link: '/empreendimentos/jardim-europa'
      }
      ]
    }
  },
components: {
    Header
}
}
</script>

<style>
.empreendimentos-header {
    position: relative;
    width: 100%;
    height: 300px;
    background-image: url('~@/assets/images/nossos-empreendimentos-bg.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    
}
.empreendimentos-header h1 {
    color: #FFF;
    z-index: 2;
}

.empreendimentos-header > h1 > span {
    font-size: 0.3em;
    font-weight: 300;
    display: block;
    text-transform: uppercase;
    letter-spacing: .2em;
}

.empreendimento-item {
    display: flex;
    padding: 3em 0;
    border-bottom: 1px solid var(--box-medium-color);    
}

.empreendimento-item-img {
    width: 50%;
}

.empreendimento-item-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.empreendimento-item-info {
    width: 50%;
    padding-left: 2em;
    align-self: flex-end;
}

.empreendimento-item-info > p, .empreendimento-item-info > span {
    font-size: .8em;
    line-height: 1.5em;
    padding: 1em 0 2em;
}

@media only screen and (max-width: 550px) {
.empreendimento-item {
    flex-direction: column;    
}

.empreendimento-item-img, .empreendimento-item-info {
    width: 100%;
}

.empreendimento-item-info {
    margin-top: 2em;
    padding: 0;
}

}
</style>