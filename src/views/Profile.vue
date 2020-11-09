<template>
  <h1>Olá, {{ name }}</h1>
  <button @click="logoff">Sair</button>
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
    }
  }
});
</script>

<style scoped>
h1 {
  margin: 15px;
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
</style>
