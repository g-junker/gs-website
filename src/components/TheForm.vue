<template>
  <div class="container">
    <form method="post" action="@/views/contact.php" class="form">
      <div class="form__row">
        <div class="form__col">
          <label for="name" class="form__label">Nome: *</label><br />
          <input type="text" id="name" class="form__input" required /><br />
        </div>
        <div class="form__col">
          <label for="phone" class="form__label">Telefone:</label><br />
          <input type="tel" id="phone" class="form__input" /><br />
        </div>
      </div>
      <div>
        <label for="email" class="form__label">Email: *</label><br />
        <input type="email" id="email" class="form__input" required /><br />
      </div>
      <div>
        <label for="subject" class="form__label">Assunto:</label><br />
        <input type="text" id="subject" class="form__input" /><br />
      </div>
      <div>
        <label for="message" class="form__label">Mensagem: *</label><br />
        <textarea
          name=""
          id="message"
          class="form__input form__textarea"
          height="300px"
        ></textarea>
      </div>
      <span class="form__footnote">* Campos obrigatórios</span>
      <button type="submit" class="form__button button-color">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TheForm"
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4em 0;
  margin: auto;
  max-width: 700px;
  text-align: left;
}

.form__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.form__col {
  width: 47%;
}

.form__label {
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: 600;
}

.form__input {
  width: 100%;
  height: 30px;
  margin-top: 0.3em;
  margin-bottom: 2em;
  border: none;
  border-bottom: 1px solid #aeaeae;
  color: #555555;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9em;
}

.form__input:focus {
  outline: none;
  border-bottom: 1px solid var(--main-color);
}

.form__textarea {
  height: 130px;
  margin-bottom: 0;
}

.form__footnote {
  font-size: 0.8em;
  margin: 1em 0;
}

.form__button {
  width: 170px;
  margin-left: auto;
}

@media only screen and (max-width: 750px) {
  .form__col {
    width: 100%;
  }

  .form__button {
    margin: 4em auto 0;
  }
}
</style>
