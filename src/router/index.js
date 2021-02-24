import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage";

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

//All Route Guards - exec` before each route called
router.beforeEach((to, from, next) => {
  // console.log(to, from);
  next();
});



export default router;
