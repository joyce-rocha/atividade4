import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";
import Sobre from "../views/Sobre.vue";
import Contato from "../views/Contato.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Inicio,
  },
  {
    path: "/about",
    name: "About",
    component: Sobre,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contato,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
