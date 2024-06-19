<template>
  <form @submit.prevent="submitForm">
    <label for="name">Nome</label>
    <input type="text" id="name" v-model="name" />
    <button type="submit">Enviar</button>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    submitForm() {
      alert(`Formulário enviado com nome: ${this.name}`);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
label {
  font-weight: bold;
}
</style>
