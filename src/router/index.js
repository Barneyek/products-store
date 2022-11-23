import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import { useAuthStore } from "@/stores/auth.store";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/home", name: "home", component: HomeView },
    { path: "/login", component: LoginView, name: "login" },
    {
      path: "/:catchAll(.*)*",
      redirect: { name: "home" },
    },
  ],
});

router.beforeEach(async (to) => {
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.user?.access_token) {
    auth.returnUrl = to.fullPath;
    return "/login";
  }
});
