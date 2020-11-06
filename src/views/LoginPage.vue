<template>
  <div class="container">
    <form action="">
      <label for="email">E-mail:</label>
      <input type="email" name="email" id="email" placeholder="E-mail" />
      <label for="senha">Senha:</label>
      <input type="password" name="senha" id="senha" placeholder="Senha" />
      <button type="submit">Entrar</button>
    </form>
    <router-link to="/signup">Não possui uma conta?</router-link>
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
