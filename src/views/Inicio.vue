<template>
  <div>
    <h2>Bem-vindo à página inicial</h2>
    <ItemList />
  </div>
</template>

<script>
import ItemList from "../components/List.vue";

export default {
  name: "HomePage",
  components: {
    ItemList,
  },
};
</script>
