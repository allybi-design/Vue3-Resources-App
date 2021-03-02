import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage";

import store from "../store";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutPage.vue"),
  },
  {
    path: "/products",
    name: "Products",
    meta: { requiresAuth: true },
    component: () => import("../views/ProductsPage.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    meta: { requiresAuth: true },
    component: () => import("../views/CartPage.vue"),
  },
  {
    path: "/:notFound(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { left: 0, top: 0 };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  const isUserAuth = store.getters.getIsUserAuth;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isUserAuth) {
      // console.log("user is logged in");
      return next();
    } else {
      // console.log("Access denied!");
      next("/");
    }
    next("/");
  } else {
    next();
  }
});

export default router;
