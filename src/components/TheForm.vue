<template>
  <div class="container">
    <form @submit.prevent="submit" class="form" id="contactForm">
      <div class="form__row">
        <div class="form__col">
          <label for="nome" class="form__label">Nome: *</label><br />
          <input
            type="text"
            name="nome"
            id="nome"
            class="form__input"
            required
          /><br />
        </div>
        <div class="form__col">
          <label for="telefone" class="form__label">Telefone:</label><br />
          <input
            type="tel"
            name="telefone"
            id="telefone"
            class="form__input"
          /><br />
        </div>
      </div>
      <div>
        <label for="email" class="form__label">Email: *</label><br />
        <input
          type="email"
          name="email"
          id="email"
          class="form__input"
          required
        /><br />
      </div>
      <div>
        <label for="assunto" class="form__label">Assunto:</label><br />
        <input
          type="text"
          name="assunto"
          id="assunto"
          class="form__input"
        /><br />
      </div>
      <div>
        <label for="mensagem" class="form__label">Mensagem: *</label><br />
        <textarea
          name="mensagem"
          id="mensagem"
          class="form__input form__textarea"
          height="300px"
          required
        ></textarea>
      </div>
      <span class="form__footnote">* Campos obrigatórios</span>
      <button
        type="submit"
        class="form__button button button--color"
        :disabled="isLoading"
      >
        {{ isLoading ? "Enviando..." : "Enviar" }}
      </button>
    </form>
  </div>
</template>

<script>
import env from "@/env";
export default {
  name: "TheForm",
  data: () => ({
    isLoading: false
  }),
  methods: {
    submit() {
      this.isLoading = true;
      const form = document.getElementById("contactForm");
      const formData = new FormData(form);
      const myData = {};
      formData.forEach((value, key) => {
        myData[key] = value;
      });
      fetch(env.FORMCAKE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(myData)
      })
        .then(
          () => alert("Sua mensagem foi enviada com sucesso!"),
          () => alert("Desculpe, ocorreu um erro.")
        )
        .finally(() => ((this.isLoading = false), form.reset()));
    }
  }
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
