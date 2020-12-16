<template>
  <p>
    Valor da compra: <strong>R${{ total }}</strong>
  </p>
  <form @submit.prevent="">
    <label for="number">Número do cartão de crédito:</label>
    <input v-model="number" type="text" id="number" name="number" />
    <label for="name">Nome do titular:</label>
    <input v-model="name" type="text" name="name" id="name" />
    <label for="date">Data de validade:</label>
    <input v-model="date" type="text" name="date" id="date" />
    <label for="cvv">Código de segurança:</label>
    <input v-model="cvv" type="text" name="cvv" id="cvv" />
    <button type="submit" @click="checkout" :disabled="disabled">
      Confirmar compra
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Payment",
  data() {
    return {
      number: "",
      name: "",
      date: "",
      cvv: ""
    };
  },
  methods: {
    checkout() {
      for (const item of this.$store.state.carrinho) {
        axios
          .get(`http://localhost:3000/produto/${item.id}`)
          .then(response => {
            axios
              .patch(`http://localhost:3000/sellProduto/${item.id}`, {
                sold: response.data.sold + item.quantity,
                stock: response.data.stock - item.quantity
              })
              .then(response => console.log(response))
              .catch(e => console.log(e));
          })
          .catch(e => console.log(e));
      }
      this.$router.push("/");
    }
  },
  computed: {
    total() {
      return this.$store.getters.cartTotalSum;
    },
    disabled() {
      if (this.number && this.name && this.date && this.cvv) return false;
      return true;
    }
  }
});
</script>

<style scoped>
p {
  font-size: 20px;
  margin: 15px 0 10px 0;
}

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
  width: 200px;
  height: 50px;
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

button:disabled {
  background-color: grey;
}
</style>
