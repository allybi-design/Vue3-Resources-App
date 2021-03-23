import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage";

import store from "../store";

const routes = [
  {
    path: "/",
    name: "HomePage",
    beforeEnter: () => store.dispatch("loadCoachesData"),
    component: HomePage,
  },
  {
    path: "/coaches",
    name: "CoachesPage",
    meta: { requiresAuth: true },
    component: () => import("../views/CoachesPage.vue"),
  },
  {
    path: "/coaches/:id",
    name: "CoachDetailsPage",
    props: true,
    meta: { requiresAuth: true },
    component: () => import("../views/CoachDetailsPage.vue"),
    children: [
      {
        path: "contact",
        name: "CoachContactPage",
        meta: { requiresAuth: true },
        component: () => import("../views/CoachContactPage.vue"),
      },
    ],
  },
  {
    path: "/register",
    name: "CoachRegisterPage.",
    meta: { requiresAuth: true },
    component: () => import("../views/CoachRegisterPage.vue"),
  },
  {
    path: "/requests",
    name: "Requests",
    meta: { requiresAuth: true },
    component: () => import("../views/RequestsPage.vue"),
  },
  {
    path: "/contact-us",
    name: "ContactUsPage",
    component: () => import("../views/ContactUsPage.vue"),
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
