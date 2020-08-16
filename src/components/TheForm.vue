<template>
  <div class="container">
    <form class="form">
      <div class="form-row">
        <div class="form-col">
          <label for="nome">Nome: *</label><br />
          <input type="text" id="nome" required /><br />
        </div>
        <div class="form-col">
          <label for="telefone">Telefone:</label><br />
          <input type="tel" id="telefone" /><br />
        </div>
      </div>
      <div>
        <label for="email">Email: *</label><br />
        <input type="email" id="email" required /><br />
      </div>
      <div>
        <label for="assunto">Assunto:</label><br />
        <input type="text" id="assunto" /><br />
      </div>
      <div>
        <label for="mensagem">Mensagem: *</label><br />
        <textarea name="" id="mensagem" height="300px"></textarea>
      </div>
      <span>* Campos obrigatórios</span>
      <button type="submit" class="button-color">Enviar</button>
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
  max-width: 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.form label {
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: 600;
}

.form input,
textarea {
  width: 100%;
  border: none;
  border-bottom: 1px solid #aeaeae;
  margin-top: 0.3em;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9em;
  color: #555555;
}

.form input:focus,
textarea:focus {
  outline: none;
  border-bottom: 1px solid var(--main-color);
}

.form input {
  height: 30px;
  margin-bottom: 2em;
}

.form textarea {
  height: 150px;
}

.form-row {
  display: flex;
  justify-content: space-between;
}

.form-col {
  width: 47%;
}

.form span {
  font-size: 0.8em;
  margin: 1em 0;
}

.form button {
  width: 170px;
  margin-left: auto;
}

@media only screen and (max-width: 750px) {
  .form-row {
    flex-direction: column;
  }

  .form-col {
    width: 100%;
  }

  .form button {
    margin: 4em auto 0;
  }
}
</style>
