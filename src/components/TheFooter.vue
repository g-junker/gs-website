<template>
  <footer class="footer">
    <div class="footer-container container">
      <div class="footer-address">
        <img class="footer-logo" src="@/assets/logo/logo-white.svg" alt="logo Gonzaga Sampaio">
        Rua Emílio Blum, 131 - Ed. Hantei Office Building<br>
        Bloco B, 7º andar, Sala 701<br>
        Centro - Florianópolis, SC<br>
        CEP 88020-010
      </div>
      <div class="footer-contact">
        <span>(48) 3333-7468 <span class="separator">|</span>(48) 99194-5415</span>
        contato@gonzagasampaio.com.br
      </div>
      <div class="footer-social">
        <a href="https://www.facebook.com/construtoragonzagasampaio/" target="_blank">
          <i class="fab fa-facebook-f fa-lg"></i>
        </a>
        <a href="http://instagram.com" target="_blank">
          <i class="fab fa-twitter fa-lg"></i>
        </a>
        <a href="http://linkedin.com" target="_blank">
          <i class="fab fa-linkedin-in fa-lg"></i>
        </a>
        <a href="http://instagram.com" target="_blank">
          <i class="fab fa-instagram fa-lg"></i>
        </a>
      </div>      
    </div>
    <div class="copyright">
      © 2020 Construtora Gonzaga Sampaio
    </div>  
  </footer>
</template>

<script>

export default {
  name: 'TheFooter'
}
</script>

<style>
.footer {
  background-color: var(--main-color);
  color: #FFF;
  font-size: .8em;
  font-weight: 300;
  line-height: 1.5em;
  padding-top: 4em;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-address {
  display: flex;
  padding-bottom: 2em;
  padding-right: 2em;
}

.footer-logo {
  width: 60px;
  height: 60px;
  padding-right: 4em;
}

.footer-contact {
  padding-bottom: 3em;
}

.footer-contact > span {
  display: block;
  font-size: 1.3em;
  font-weight: 600;
  padding-bottom: 0.3em;
}

.separator {
  padding: 0 1em;
}

.footer-social {
  display: flex;
  width: 150px;
  justify-content: space-between;
}

.copyright {
  background-color: #0b151f;
  font-size: 0.9em;
  text-align: center;
  width: 100%;
  padding: 1.2em 0;
  margin-top: 4em;
}

@media only screen and (max-width: 700px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .footer-logo {
    padding: 0 0 2em;
  }
  .footer-address {
    flex-direction: column;
    align-items: center;
    padding: 0 0 3em;
  }
}

</style>