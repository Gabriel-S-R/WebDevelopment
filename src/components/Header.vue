<template>
  <div class="header">
    <router-link to="/"
      ><img src="../assets/logo.png" alt="Logo" class="logo"
    /></router-link>
    <form action="">
      <label for="search-bar">Pesquisa</label>
      <input
        type="search"
        id="search-bar"
        name="search-bar"
        placeholder="Algum item interessante"
      />
      <button type="submit">
        <img src="../assets/lupa.png" alt="Lupa" class="lupa" />
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header"
});
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fe2a2a;
  height: 170px;
  align-items: center;
}

form {
  display: flex;
  flex-direction: row;
}

.logo {
  height: 100px;
  width: auto;
}

input {
  height: 37px;
  width: 500px;
  padding-left: 10px;
  background-color: #ffffff;
}

.lupa {
  height: 30px;
  width: auto;
}

label {
  display: none;
}
</style>
