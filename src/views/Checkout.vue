<template>
  <p><strong>Sua Compra</strong></p>
  <ul>
    <li v-for="item in cart" :key="item.id">
      <div class="content">
        <img :src="getPhoto(item.photo)" alt="Foto" />
        <p>{{ item.name }}</p>
        <p>{{ item.quantity }}</p>
        <p>{{ item.price }}</p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Checkout",
  methods: {
    getPhoto(url: string) {
      return require(`../assets/${url}`);
    }
  },
  computed: {
    cart() {
      return this.$store.state.carrinho;
    }
  }
});
</script>

<style scoped>
ul {
  justify-content: center;
  width: 80%;
  list-style-type: none;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  border: 1px solid red;
}

img {
  height: inherit;
  width: auto;
}
</style>
