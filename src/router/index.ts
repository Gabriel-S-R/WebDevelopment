import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import axios from "axios";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home Page",
    component: () => import("../views/HomePage.vue"),
    meta: { fetchData: true }
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
    component: () => import("../views/LoginPage.vue"),
    meta: { alreadyLoggedIn: true }
  },
  {
    path: "/signup",
    name: "Criar Conta",
    component: () => import("../views/CreateAccount.vue"),
    meta: { alreadyLoggedIn: true }
  },
  {
    path: "/profile",
    name: "Perfil",
    component: () => import("../views/Profile.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/cart",
    name: "Carrinho",
    component: () => import("../views/Cart.vue")
  },
  {
    path: "/createProduct",
    name: "Adicionar Produto",
    component: () => import("../views/CreateProduct.vue")
  },
  {
    path: "/payment",
    name: "Pagamento",
    component: () => import("../views/Payment.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/checkout",
    name: "Finalizar Compra",
    component: () => import("../views/Checkout.vue"),
    meta: { requiresAuth: true }
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

//Usa dos Vue Router Guards para impedir o usuário de acessar rotas que não deveria,
//como a página de perfil caso o usuário não esteja autenticado.

router.beforeEach((to, from, next) => {
  if (to.meta.alreadyLoggedIn) {
    if (store.state.user.name) {
      next({ name: "Perfil" });
    }
    else {
      next();
    }
  }
  else if (to.meta.requiresAuth) {
    if (!store.state.user.name) {
      next({ name: "Login", query: { redirect: to.fullPath } });
    }
    else {
      next();
    }
  }
  else if(to.meta.fetchData) {
    store.commit("clearProdutos")
    axios
      .get("http://localhost:3000/produtos")
      .then(response => store.commit("pushProdutos", response.data))
      .catch(e => console.log(e));
    next();
  }
  else {
    next();
  }
})

export default router;
