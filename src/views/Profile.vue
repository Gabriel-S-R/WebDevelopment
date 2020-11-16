<template>
  <div>
    <h1>Olá, {{ name }}</h1>
    <router-link to="/createProduct" v-if="isAdmin"
      >Adicionar novo produto</router-link
    >
    <button @click="logoff" type="button">Sair</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Perfil",
  methods: {
    logoff() {
      this.$store.commit("signout");
      this.$router.push("/login");
    }
  },
  computed: {
    name(): string {
      return this.$store.state.user.name;
    },
    isAdmin(): boolean {
      return this.$store.state.user.is_admin;
    }
  }
});
</script>

<style scoped>
h1 {
  margin: 15px;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button,
a {
  border: none;
  background-color: #ffcccb;
  width: 200px;
  height: 30px;
  border-radius: 10px;
  margin-bottom: 10px;
  outline: none;
  text-decoration: none;
  color: black;
  font-size: 15px;
}

button:hover,
a:hover {
  background-color: #ffb9b7;
}

button:active,
a:active {
  background-color: #ffa6a4;
}
</style>
