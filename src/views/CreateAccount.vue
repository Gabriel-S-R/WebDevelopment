<template>
  <div class="container">
    <form action="">
      <label for="name">Nome:</label>
      <input type="text" name="name" id="name" placeholder="Nome" />
      <label for="email">E-mail:</label>
      <input type="email" name="email" id="email" placeholder="E-mail" />
      <label for="senha">Senha:</label>
      <input type="password" name="senha" id="senha" placeholder="Senha" />
      <label for="phone">Telefone:</label>
      <input type="tel" name="phone" id="phone" placeholder="Telefone" />
      <label for="city">Cidade:</label>
      <input type="text" name="city" id="city" placeholder="Cidade" />
      <label for="state">Estado:</label>
      <input type="text" name="state" id="state" placeholder="Estado" />
      <label for="cep">CEP:</label>
      <input type="text" name="cep" id="cep" placeholder="CEP" />
      <button type="submit">Criar conta</button>
    </form>
    <router-link to="/login">Já possui uma conta?</router-link>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  display: inline-block;
  width: 28.1%;
  text-align: left;
}

label:first-of-type {
  margin-top: 10px;
}

input {
  height: 37px;
  width: 29%;
  padding-left: 10px;
  margin-bottom: 15px;
  background-color: #ffffff;
}

button {
  border: none;
  background-color: #ffcccb;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  margin-bottom: 10px;
  outline: none;
}

button:hover {
  background-color: #ffb9b7;
}

button:active {
  background-color: #ffa6a4;
}

a {
  text-decoration: none;
  font-size: 18px;
  color: #0000ff;
}

a:hover {
  color: #0000c4;
}
</style>
