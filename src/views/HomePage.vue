<template>
  <div class="container">
    <ul>
      <li v-for="item in items" :key="item.id">
        <div class="item">
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

export default defineComponent({
  name: "Home Page",
  methods: {
    getPhoto(url: string) {
      return require(`../assets/${url}`);
    },
    addToCart(item: object) {
      this.$store.commit("addToCart", item);
    }
  },
  computed: {
    items() {
      return this.$store.state.produtos;
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
</style>
