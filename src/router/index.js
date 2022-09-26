import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/layouts/layout-default.vue"),
      redirect: {
        name: "matches",
      },
      children: [
        {
          path: "matches",
          name: "matches",
          component: () => import("@/views/pages/mydate-matches.vue"),
          meta: {
            requiresLogin: true,
          },
        },
        {
          path: "chat",
          name: "chat",
          component: () => import("@/views/pages/mydate-chat.vue"),
          meta: {
            requiresLogin: true,
          },
        },
      ],
    },
    {
      path: "/auth",
      component: () => import("@/layouts/layout-login.vue"),
      children: [
        {
          path: "sign-in",
          name: "auth.sign-in",
          component: () => import("@/views/auth/sign-in.vue"),
        },
        {
          path: "sign-up",
          name: "auth.sign-up",
          component: () => import("@/views/auth/sign-up.vue"),
        },
      ],
    },
  ],
});

router.beforeResolve((to, from, next) => {
  if (to.meta.requiresLogin && !localStorage.getItem("token_authentication")) {
    next({
      name: "auth.sign-in",
    });

    return;
  }

  next();
});

export default router;
