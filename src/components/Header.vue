<template>
  <header>
    <h1>Ativ. Avaliativa 4</h1>
    <nav>
      <router-link to="/">Início</router-link>
      <router-link to="/about">Sobre</router-link>
      <router-link to="/contact">Contato</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
}
nav a {
  margin: 0 0.5rem;
  color: #fff;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>
