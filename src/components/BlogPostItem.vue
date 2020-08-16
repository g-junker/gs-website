<template>
  <div class="blog-post-item">
      <h2>Casa conjugada é opção de investimento</h2>
      <span>8 de março de 2017</span>
      <p>Dois imóveis e uma parede em comum. Esta é a principal característica das casas conjugadas. Este tipo de empreendimento integra residências com mesmo tamanho e fachadas idênticas em um único terreno, lado a lado. Por serem projetadas para ocuparem...</p>
      <a href="" class="text-link">LEIA MAIS <i class="fas fa-long-arrow-alt-right"></i></a>
  </div>
</template>

<script>
export default {
  name: 'BlogPostItem'
}
</script>

<style>
.blog-post-item {
  border-bottom: 1px solid var(--box-medium-color);
  padding: 3em 0 2em;
  margin: auto;
  width: 85%;
  max-width: 850px;
}

.blog-post-item span {
  display: block;
  font-size: .85em;
  margin: 1em 0 2em;
}

.blog-post-item p {
  font-size: .95em;
  line-height: 1.5em;
  margin: 0;
}
</style>