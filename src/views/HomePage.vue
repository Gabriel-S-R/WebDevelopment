<template>
  <div class="container">
    <div class="modal" :class="{ visible: isNotVisible }">
      <form @submit.prevent="finishEditItem">
        <button class="close-modal" type="button" @click="isNotVisible = true">
          X
        </button>
        <label for="name">Nome do produto:</label>
        <input
          v-model="edit.name"
          type="text"
          name="name"
          id="name"
          placeholder="Nome"
        />
        <label for="description">Descrição do produto:</label>
        <input
          v-model="edit.description"
          type="text"
          name="description"
          id="description"
          placeholder="Descrição"
        />
        <label for="price">Preço do produto:</label>
        <input
          v-model="edit.price"
          type="number"
          min="0"
          step="any"
          name="price"
          id="price"
          placeholder="Preço"
        />
        <label for="stock">Quantidade em estoque:</label>
        <input
          v-model="edit.stock"
          type="number"
          min="0"
          name="stock"
          id="stock"
          placeholder="Estoque"
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <div class="item">
          <button
            v-if="isAdmin"
            @click="editItem(item)"
            class="edit"
            type="button"
          >
            <img class="edit-image" src="@/assets/edit-pen.svg" alt="Edit" />
          </button>
          <img :src="getPhoto(item.photo)" alt="Foto" />
          <p>{{ item.name }}</p>
          <p>R${{ item.price }}</p>
          <button @click="addToCart(item)">Adicionar ao carrinho</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

interface EditItem {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: string;
}

export default defineComponent({
  name: "Home Page",
  data() {
    return {
      edit: {
        id: 0,
        name: "",
        description: "",
        price: "",
        stock: ""
      },
      isNotVisible: true
    };
  },
  methods: {
    getPhoto(url: string) {
      return require(`../assets/${url}`);
    },
    addToCart(item: object) {
      this.$store.commit("addToCart", item);
    },
    editItem(item: EditItem) {
      this.edit = item;
      this.isNotVisible = false;
    },
    finishEditItem() {
      axios
        .patch(`http://localhost:3000/produto/${this.edit.id}`, {
          name: this.edit.name,
          description: this.edit.description,
          price: parseFloat(this.edit.price),
          stock: parseInt(this.edit.stock)
        })
        .then(response => console.log(response))
        .catch(e => console.log(e));
      this.isNotVisible = true;
    }
  },
  computed: {
    items() {
      return this.$store.state.produtos;
    },
    isAdmin() {
      return this.$store.state.user.is_admin;
    }
  }
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  display: flex;
  width: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
}

.item {
  position: relative;
  width: 250px;
  height: 250px;
  background-color: #ffffff;
  margin: 10px;
}

img {
  height: 60%;
  width: auto;
  margin-bottom: 10px;
}

p {
  background-color: #ffffff;
}

button {
  width: 90%;
  height: 10%;
  color: #ffffff;
  background-color: #fe2a2a;
  border: none;
  outline: none;
}

button:hover {
  background-color: #e42525;
}

button:active {
  background-color: #cb2121;
}

.edit {
  position: absolute;
  right: 2px;
  z-index: 2;
  width: 30px;
  height: 30px;
}

.modal {
  position: absolute;
  z-index: 5;
}

.visible {
  display: none;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(60, 94, 206);
  width: 500px;
  height: 400px;
  justify-content: center;
}

label {
  display: inline-block;
  width: 50%;
  text-align: left;
  background-color: inherit;
  color: white;
}

label:first-of-type {
  margin-top: 10px;
}

input {
  height: 37px;
  width: 75%;
  padding-left: 10px;
  margin-bottom: 15px;
  background-color: #ffffff;
}

.close-modal {
  position: relative;
  width: 30px;
  height: 30px;
  left: 200px;
}

.edit-image {
  width: 100%;
  height: auto;
}
</style>
