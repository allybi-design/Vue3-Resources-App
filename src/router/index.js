import { createRouter, createWebHistory } from "vue-router";
import TeamsPage from "../views/TeamsPage.vue";

// const isAuthenticated = true; //can set if path if is Authenticated in next()

const routes = [
  {
    path: "/",
    redirect: "/teams",
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsPage,
  },
  {
    path: "/teams/:deptId",
    name: "TeamsMembers",
    meta: { needsAuth: true },
    beforeEnter(to, from, next) {
      if (to.meta.needsAuth) {
        console.log("this path need Auth");
        next();
      }
    },
    component: () => import("../views/TeamMembersPage.vue"),
  },
  {
    path: "/users",
    name: "Users",
    beforeEnter(to, from, next) {
      //individual route guard
      console.log("Users Guard"); //call only when exec to
      console.log(to, from); //this ("/users") path
      next();
    },
    component: () => import("../views/UsersPage.vue"),
  },
  {
    path: "/:notFound(.*)",
    redirect: "/teams",
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
  console.log(to, from);
  next();
});

export default router;
