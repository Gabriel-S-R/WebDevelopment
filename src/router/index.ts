import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/teste",
    name: "Teste",
    component: () => import("../views/Teste.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginPage.vue")
  },
  {
    path: "/signup",
    name: "Criar Conta",
    component: () => import("../views/CreateAccount.vue")
  },
  {
    path: "/profile",
    name: "Perfil",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Not found",
    component: () => import("../views/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
