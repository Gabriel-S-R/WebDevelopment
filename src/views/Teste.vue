<template>
  <div class="container">
    <div class="header">
      <img class="logo" src="../assets/logo.png" alt="Logo placeholder" />
      <div class="search-bar-container">
        <label for="search-bar">Pesquisa</label>
        <input
          type="text"
          id="search-bar"
          name="search-bar"
          placeholder="Algum item interessante"
        />
        <button type="button" name="button">
          <img class="lupa" src="../assets/lupa.png" alt="Lupa" />
        </button>
      </div>
      <div>
        <a href="LoginPage.html" class="change-page">Entrar/Cadastrar</a>
        <a href="Cart.html" class="change-page">Carrinho</a>
      </div>
    </div>
    <div class="content">
      <div class="placeholder-item">
        <img src="../assets/tv.png" alt="tv" />
        <p>Smart TV Android LED 32"</p>
        <p>R$1900,00</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img src="../assets/samsungA01.png" alt="Sansung A01" />
        <p>Smartphone Samsung Galaxy A01 - Azul</p>
        <p>R$998,90</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img src="../assets/samsungA.png" alt="Sansung A" />
        <p>Tablet Samsung Galaxy A 32GB Tela 8"</p>
        <p>R$849,90</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img src="../assets/tv_philco.png" alt="TV Philco" />
        <p>Smart TV LED 32" Philco</p>
        <p>R1149,90</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img src="../assets/note_lenovo.png" alt="Notebook Lenovo" />
        <p>Notebook Lenovo Ideapad</p>
        <p>R3149,00</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img src="../assets/note_dell.png" alt="Notebook Dell" />
        <p>Notebook Dell Inspiron</p>
        <p>R3000,00</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img src="../assets/note_acer.png" alt="Notebook Acer" />
        <p>Notebook Acer Aspire</p>
        <p>R4500,00</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img src="../assets/ar_split_lg.png" alt="Ar condicionado LG" />
        <p>Ar condicionado split LG</p>
        <p>R2200,00</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img src="../assets/ar_split_consul.png" alt="Ar condicionado consul" />
        <p>Ar condicionado split Consul</p>
        <p>R2000,00</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img src="../assets/ar_split_philco.png" alt="Ar condicionado philco" />
        <p>Ar condicionado split Philco</p>
        <p>R1900,00</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img src="../assets/microondas_consul.png" alt="micro-ondas consul" />
        <p>Micro-Ondas Consul</p>
        <p>R$469,90</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img
          src="../assets/microondas_brastemp.png"
          alt="micro-ondas brastemp"
        />
        <p>Micro-Ondas Brastemp</p>
        <p>R$649,90</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img src="../assets/lavadora_brastemp.png" alt="lavadora brastemp" />
        <p>Lavadora de Roupas Brastemp</p>
        <p>R$1549,90</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img src="../assets/lavadora.png" alt="lavadora consul" />
        <p>Lavadora de Roupas Consul</p>
        <p>R$1349,90</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="placeholder-item">
        <img src="../assets/lavadora_electro.png" alt="lavadora electrolux" />
        <p>Lavadora de Roupas Electrolux</p>
        <p>R$1649,90</p>
        <button type="button" name="button" class="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
    <div class="footer">
      <img class="logo" src="./../assets/logo.png" alt="Logo placeholder" />
      <a href="#" class="change-page">Mais informações</a>
      <a href="#" class="change-page">Sobre nós</a>
      <a href="#" class="change-page">Redes sociais</a>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dcdcdc;
}

.header {
  display: flex;
  flex-direction: row;
  height: 170px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: #fe2a2a;
  margin: 0 auto;
}

.logo {
  height: 100px;
  width: auto;
}

.search-bar-container {
  display: flex;
  flex-direction: row;
}

.header label {
  display: none;
}

.header input {
  height: 37px;
  width: 500px;
  padding-left: 10px;
}

.header button {
  background-color: inherit;
  border: none;
}

.lupa {
  height: 30px;
  width: auto;
}

.login-logo {
  position: relative;
  right: 650px;
}

.change-page {
  text-align: center;
  color: white;
  margin-top: 10px;
  font-size: 18px;
  color: #0000ff;
  text-decoration: none;
  margin: 0 20px;
}

.change-page:hover {
  text-decoration: none;
  background-color: #e42525;
}

.change-page:visited {
  color: white;
}

.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
}

.placeholder-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  width: 250px;
  background-color: #ffffff;
  margin: 10px;
}

.placeholder-item img {
  height: 60%;
  width: auto;
  margin-bottom: 10px;
}

.footer {
  display: flex;
  flex-direction: row;
  height: 130px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: #fe2a2a;
  margin: 0 auto;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-form:first-child {
  margin-top: 15px;
}

.login-form input {
  height: 37px;
  width: 500px;
  padding-left: 10px;
  margin-bottom: 15px;
}

.login-form button {
  border: none;
  background-color: #ffcccb;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  margin: 0 auto;
  outline: none;
}

.login-form button:hover {
  background-color: #ffb9b7;
}

.login-form button:active {
  background-color: #ffa6a4;
}

.login-form a {
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
  color: #0000ff;
  text-decoration: none;
}

.login-form a:hover {
  color: #0000c4;
}

.cart {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.cart-button {
  width: 90%;
  height: 10%;
  color: #ffffff;
  background-color: #fe2a2a;
  border: none;
  outline: none;
}

.cart-button:hover {
  background-color: #e42525;
}

.cart-button:active {
  background-color: #cb2121;
}

.cart-item-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.cart-item-container ul {
  display: flex;
  width: 100%;
  list-style-type: none;
  justify-content: space-around;
  margin: 20px;
  align-items: center;
}

.cart-item-container label {
  display: none;
}

.cart-item-container input {
  width: 50px;
}

.finalizar-button {
  width: 200px;
  height: 50px;
  color: #ffffff;
  background-color: #fe2a2a;
  border: none;
  outline: none;
  position: relative;
  left: 1100px;
}

.finalizar-button:hover {
  background-color: #e42525;
}

.finalizar-button:active {
  background-color: #cb2121;
}
</style>
