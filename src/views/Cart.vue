<template>
  <p class="empty-cart" v-if="!cart.length">
    <strong>Seu carrinho está vazio!</strong>
  </p>
  <ul v-if="cart.length" class="header">
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
        <div class="quantity-container">
          <p class="error">{{ item.error }}</p>
          <label for="quantity"></label>
          <input
            name="quantity"
            id="quantity"
            class="quantity"
            :class="{ errorColor: item.error }"
            type="number"
            min="1"
            step="1"
            pattern="\d*"
            :value="item.quantity"
            @input="updateCart($event.target.value, item.id)"
          />
          <button type="button" @click="removeItem(item.id)">Remover</button>
        </div>
        <p class="price">R${{ item.price }}</p>
      </div>
    </li>
    <p class="total">
      <strong>Total: R${{ totalPrice }}</strong>
    </p>
    <div class="buttons">
      <button
        @click="buy"
        v-if="cart.length"
        :disabled="hasError"
        class="finalizar-button"
      >
        Finalizar a compra
      </button>
      <button
        v-if="cart.length"
        type="button"
        @click="clearCart"
        class="finalizar-button"
      >
        Limpar o carrinho
      </button>
    </div>
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
      value = Math.floor(value);
      if (value > 0) this.$store.commit("updateQuantity", { value, id });
    },
    clearCart() {
      this.$store.commit("emptyCart");
    },
    removeItem(id: number) {
      this.$store.commit("removeItemFromCart", id);
    },
    buy() {
      this.$router.push("/payment");
    }
  },
  computed: {
    cart() {
      return this.$store.state.carrinho;
    },
    hasError() {
      return this.$store.getters.cartHasErrors;
    },
    totalPrice() {
      return this.$store.getters.cartTotalSum;
    }
  }
});
</script>

<style scoped>
.empty-cart {
  font-size: 30px;
  margin: 30px;
}

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

.content > * {
  margin: 0 110px 50px;
}

.photo {
  width: 200px;
}

.name {
  width: 200px;
}

.quantity-container {
  width: 100px;
}

label {
  display: none;
}

.quantity {
  width: 60px;
  height: 30px;
  font-size: 16px;
  padding-left: 5px;
  background-color: #ffffff;
}

.error {
  text-align: center;
  font-size: 12px;
  color: darkred;
  margin-bottom: 3px;
}

.errorColor {
  color: darkred;
}

.price {
  width: 150px;
}

.total {
  font-size: 30px;
  margin-bottom: 50px;
}

.buttons {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
}

.finalizar-button {
  width: 200px;
  height: 50px;
  color: #ffffff;
  background-color: #fe2a2a;
  border: none;
  outline: none;
}

.finalizar-button:hover {
  background-color: #e42525;
}

.finalizar-button:active {
  background-color: #cb2121;
}

.finalizar-button:disabled {
  background-color: grey;
}
</style>
