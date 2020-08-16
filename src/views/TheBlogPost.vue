<template>
  <div>
    <Header/>
    <div class="blog-post-header">
        <p>Blog</p>
    </div>
    <div class="blog-post-body">
      <h1 class="blog-post-headline">Casa conjugada é opção de investimento é opção de investimento</h1>
      <span>8 de março de 2017</span>
      <img src="@/assets/images/blog-post-sample.png" alt="">
      <p>Dois imóveis e uma parede em comum. Esta é a principal característica das casas conjugadas. Este tipo de empreendimento integra residências com mesmo tamanho e fachadas idênticas em um único terreno, lado a lado. Por serem projetadas para ocuparem de forma otimizada o lote, este estilo de construção é uma boa opção de aposta para pequenos empresários que pretendem ingressar no mundo dos negócios imobiliários.</p>
      <p>É o caso do gestor de pessoas Cláudio Marcelo Silva. Após ter passado mais de seis anos morando no Canadá trabalhando na construção civil, percebeu que, com o dinheiro juntado no exterior, poderia investir em algo com rápido retorno financeiro. Quando ainda estava em dúvida no que aplicar, um amigo, com uma experiência semelhante à sua, sugeriu uma sociedade e a proposta de construir duas casas, sendo elas conjugadas, em um terreno. “Com nossa vivência profissional em Toronto, verificamos que este tipo de obra, conhecidos como TownHouses, tem a capacidade de preencher bem um lote. Cientes que cada metro quadrado (m2) custa dinheiro, achamos esta a melhor alternativa para aproveitar ao máximo os recursos que temos”, diz.</p>
      <p>O pernambucano parece otimista com seu primeiro empreendimento imobiliário, que está sendo construído em Campina Grande, na Paraíba. “A obra teve início no mês passado e a previsão de conclusão é para setembro”, conta. Cláudio Marcelo mantém sigilo quanto ao capital que está investindo, mas diz que as habitações terão 58 m2 e custarão R$ 105 mil cada.</p>
      <p>De acordo com o vice-presidente do Sindicato da Indústria da Construção Civil (Sinduscon-PE), José Antônio de Lucas Simon, esse tipo de empreendimento não faz parte do foco de atuação das grandes construtoras. “Essa não é uma tendência de mercado, na verdade é uma solução inteligente e rentável de pequenos empresários”, afirma. Ele também diz que edifícios nada mais são que residências conjugadas verticalizadas. E acrescenta ser difícil mapear em quais bairros do Recife há um maior número de casas geminadas, justamente porque a maioria das pessoas que as construíram não tendem a frequentar associações.</p>
      <p>Quem concorda com Simon sobre o fato de casas conjugadas serem como os apartamentos, porém construídas em condomínios na horizontal, é a dona de casa Jandira Marinho de Lima. Desde 1981 morando em uma vila de residências com paredes em comum no bairro da Imbiribeira, ela diz adorar o formato de sua habitação. “Acho que o espaço é bem aproveitado e ainda conto com a sorte de ter quintal e terraço para cuidar de minhas plantas. Algo que não teria se vivesse em um edifício”, conta.</p>
    </div>
    <div class="back-blog-post-list">
        <a class="text-link" href="#"><i class="fas fa-long-arrow-alt-left"></i> Voltar</a>
    </div>
  </div>
</template>

<script>
import Header from '@/components/HeaderColor.vue'

export default {
  name: 'TheBlogPost',  
  components: {
    Header
  }
}
</script>

<style>
.blog-post-header {
  background-color: var(--box-light-color);
  position: relative;
  z-index: -1;
  padding: .1em 0;
}

.blog-post-header p {
  text-transform: uppercase;
  font-size: .85em;
  letter-spacing: .2em;
  width: 80%;
  max-width: 800px;
  padding: .8em 0;
  margin: auto;
}

.blog-post-body {
  margin: 4em auto 3em;
  width: 80%;
  max-width: 800px;
}

.blog-post-body span {
  text-transform: uppercase;
  font-size: .9em;
}

.blog-post-headline {
  font-size: 1.7em;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: .3em;
}

.blog-post-body img {
  width: 100%;
  margin: 2.5em 0;
}

.blog-post-body p {
  text-align: justify;
}

.back-blog-post-list {
  margin: auto;
  width: 80%;
  max-width: 800px;
  margin-bottom: 5em;
}

.back-blog-post-list i {
  padding-left: 0;
}

</style>