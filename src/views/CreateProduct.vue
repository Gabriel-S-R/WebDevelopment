<template>
  <div class="container">
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    <form @submit.prevent="">
      <label for="name">Nome do produto:</label>
      <input
        v-model="product.name"
        type="text"
        name="name"
        id="name"
        placeholder="Nome"
      />
      <label for="description">Descrição do produto:</label>
      <input
        v-model="product.description"
        type="text"
        name="description"
        id="description"
        placeholder="Descrição"
      />
      <label for="price">Preço do produto:</label>
      <input
        v-model="product.price"
        type="number"
        min="0"
        step="any"
        name="price"
        id="price"
        placeholder="Preço"
      />
      <label for="stock">Quantidade em estoque:</label>
      <input
        v-model="product.stock"
        type="number"
        min="0"
        name="stock"
        id="stock"
        placeholder="Estoque"
      />
      <label for="sold">Quantidade já vendida:</label>
      <input
        v-model="product.sold"
        type="number"
        min="0"
        name="sold"
        id="sold"
        placeholder="Vendido"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Data {
  product: {
    name: string;
    description: string;
    price: number;
    stock: number;
    sold: number;
  };
  errors: string[];
}

export default defineComponent({
  name: "Criar Produto",
  data(): Data {
    return {
      product: {
        name: "",
        description: "",
        price: 0,
        stock: 0,
        sold: 0
      },
      errors: []
    };
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
