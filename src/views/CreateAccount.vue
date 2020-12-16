<template>
  <div class="container">
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    <form @submit.prevent="handleSubmit">
      <label for="name">Nome:</label>
      <input
        v-model="user.name"
        type="text"
        name="name"
        id="name"
        placeholder="Nome"
      />
      <label for="email">E-mail:</label>
      <input
        v-model="user.email"
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
      />
      <label for="senha">Senha:</label>
      <input
        v-model="user.password"
        type="password"
        name="senha"
        id="senha"
        placeholder="Senha"
      />
      <label for="phone">Telefone:</label>
      <input
        v-model="user.phone"
        type="tel"
        name="phone"
        id="phone"
        placeholder="Telefone"
      />
      <label for="city">Cidade:</label>
      <input
        v-model="user.city"
        type="text"
        name="city"
        id="city"
        placeholder="Cidade"
      />
      <label for="state">Estado:</label>
      <select v-model="user.state" name="state" id="state">
        <option value="AC">AC</option>
        <option value="AL">AL</option>
        <option value="AP">AP</option>
        <option value="AM">AM</option>
        <option value="BA">BA</option>
        <option value="CE">CE</option>
        <option value="DF">DF</option>
        <option value="ES">ES</option>
        <option value="GO">GO</option>
        <option value="MA">MA</option>
        <option value="MT">MT</option>
        <option value="MS">MS</option>
        <option value="MG">MG</option>
        <option value="PA">PA</option>
        <option value="PB">PB</option>
        <option value="PR">PR</option>
        <option value="PE">PE</option>
        <option value="PI">PI</option>
        <option value="RR">RR</option>
        <option value="RO">RO</option>
        <option value="RJ">RJ</option>
        <option value="RN">RN</option>
        <option value="RS">RS</option>
        <option value="SC">SC</option>
        <option value="SP">SP</option>
        <option value="SE">SE</option>
        <option value="TO">TO</option>
      </select>
      <label for="cep">CEP:</label>
      <input
        v-model="user.cep"
        type="text"
        name="cep"
        id="cep"
        placeholder="CEP"
      />
      <button type="submit">Criar conta</button>
    </form>
    <router-link to="/login">Já possui uma conta?</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

interface Data {
  user: {
    name: string;
    email: string;
    password: string;
    phone: string;
    city: string;
    state: string;
    cep: string;
  };
  errors: string[];
}

export default defineComponent({
  name: "Criar Conta",
  data(): Data {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        phone: "",
        city: "",
        state: "",
        cep: ""
      },
      errors: []
    };
  },
  methods: {
    handleSubmit(e: HTMLFormElement) {
      e.preventDefault();

      this.errors = [];

      if (!this.user.name) {
        this.errors.push("O nome deve ser preenchido.");
      }
      if (!this.user.email) {
        this.errors.push("O e-mail deve ser preenchido.");
      }
      if (!this.user.password) {
        this.errors.push("A senha deve ser preenchida.");
      }
      if (!this.user.phone) {
        this.errors.push("O telefone deve ser preenchido.");
      }
      if (!this.user.city) {
        this.errors.push("A cidade deve ser preenchida.");
      }
      if (!this.user.state) {
        this.errors.push("O estado deve ser preenchido.");
      }
      if (!this.user.cep) {
        this.errors.push("O CEP deve ser preenchido.");
      }

      if (this.errors.length) {
        return;
      }

      axios
        .post("http://localhost:3000/signUp", { user: this.user })
        .then(() => this.$router.push("/login"))
        .catch(e => this.errors.push(e.message));
    }
  }
});
</script>

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

select {
  height: 37px;
  width: 29%;
  padding-left: 10px;
  margin-bottom: 15px;
  background-color: #ffffff;
}

option {
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

li {
  margin-top: 10px;
  font-size: 20px;
  color: darkred;
}
</style>
