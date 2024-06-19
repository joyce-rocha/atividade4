<template>
  <div>
    <h2>Entre em contato!</h2>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "../components/Form.vue";

export default {
  name: "ContactPage",
  components: {
    ContactForm,
  },
};
</script>
