import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

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
