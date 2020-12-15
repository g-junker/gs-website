<template>
  <div>
    <Header isLogoWhite isTransparent />
    <div class="page-header contact-header">
      <h1 class="page-header__title container--sm">Fale Conosco</h1>
    </div>
    <div class="contact__form-container">
      <div class="contact__form">
        <TheForm />
      </div>
      <div class="contact__info">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          <span class="contact__info--lg"
            >(48) 3333-7468 | (48) 99194-5415</span
          >
          <a href="mailto:contato@gonzagasampaio.com.br">
            <p>contato@gonzagasampaio.com.br</p>
          </a>
        </div>
      </div>
    </div>
    <div class="location">
      <h2>Onde Estamos</h2>
      <p
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-bottom"
      >
        Rua Emílio Blum, 131 - Ed. Hantei Office Building<br />
        Bloco B, 7º andar, Sala 701, Centro<br />
        CEP 88020-010 | Florianópolis, SC
      </p>
      <iframe
        title="Localização - Construtora Gonzaga Sampaio"
        class="location__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.031164553302!2d-48.544518967446876!3d-27.59256339997561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527383c138b278d%3A0x63954ed61be0bcab!2sGonzaga%20Sampaio!5e0!3m2!1spt-PT!2sde!4v1603354348337!5m2!1spt-PT!2sde"
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
import Header from "@/components/TheHeader.vue";
import TheForm from "@/components/TheForm.vue";

export default {
  name: "FaleConosco",
  components: {
    Header,
    TheForm
  },
  metaInfo: {
    title: "Fale Conosco",
    meta: [
      {
        name: "description",
        content: "Entre em contato conosco!"
      }
    ]
  }
};
</script>

<style>
.contact-header {
  background-image: url("~@/assets/images/contato-header.jpg");
}

.contact__form-container {
  transform: translateY(-4em);
}

.contact__form {
  position: relative;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 3;
  width: 85%;
  max-width: 850px;
  margin: auto;
}

.contact__info {
  background-color: var(--main-color);
  color: #fff;
  text-align: center;
  padding: 8em 10% 3em;
  font-weight: 300;
  transform: translateY(-4em);
  margin-bottom: -8em;
}

.contact__info--lg {
  font-size: 1.5em;
}

@media only screen and (max-width: 500px) {
  .contact__form {
    width: 100%;
  }
  .contact__info--lg {
    font-size: 1.15em;
  }
}
</style>
