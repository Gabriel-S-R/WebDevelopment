<template>
  <ul class="header">
    <li><strong>Imagem</strong></li>
    <li><strong>Descrição</strong></li>
    <li><strong>Quantidade</strong></li>
    <li><strong>Preço</strong></li>
  </ul>
  <ul>
    <li v-for="item in cart" :key="item.id">
      <div class="content">
        <img class="photo" :src="getPhoto(item.photo)" alt="Foto" />
        <p class="name">{{ item.name }}</p>
        <input
          class="quantity"
          type="number"
          min="1"
          :value="item.quantity"
          @input="updateCart($event.target.value, item.id)"
        />
        <p class="price">R${{ item.price }}</p>
      </div>
    </li>
    <p class="total">
      <strong>Total: {{ totalPrice }}</strong>
    </p>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Carrinho",
  methods: {
    getPhoto(url: string) {
      return require(`../assets/${url}`);
    },
    updateCart(value: number, id: number) {
      if (value > 0) this.$store.commit("updateQuantity", { value, id });
    }
  },
  computed: {
    cart() {
      return this.$store.state.carrinho;
    },
    totalPrice() {
      return this.$store.getters.cartTotalSum;
    }
  }
});
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: center;
}

.header li {
  display: flex;
  flex-direction: row;
  margin: 50px 150px;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.content * {
  margin: 0 110px 50px;
}

.photo {
  width: 200px;
}

.name {
  width: 200px;
}

.quantity {
  width: 60px;
  height: 30px;
  font-size: 16px;
  padding-left: 5px;
  background-color: #ffffff;
}

.price {
  width: 150px;
}

.total {
  font-size: 30px;
  margin-bottom: 50px;
}
</style>
