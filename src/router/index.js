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
        },
        {
          path: "chat",
          name: "chat",
          component: () => import("@/views/pages/mydate-chat.vue"),
        },
      ],
    },
    {
      path: "/auth",
      component: () => import("@/layouts/layout-login.vue"),
      children: [
        {
          path: "sign-in",
          component: () => import("@/views/auth/sign-in.vue"),
        },
      ],
    },
  ],
});

export default router;
