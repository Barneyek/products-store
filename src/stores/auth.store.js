import { defineStore } from "pinia";
import { router } from "@/router";
import { useAlertStore } from "@/stores/alert.store";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null,
    errorMessage: null,
  }),
  actions: {
    async login(email, password) {
      await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then(async (response) => {
          const data = await response.json();
          this.user = data;
          localStorage.setItem("user", JSON.stringify(data));
          router.push("/home");
          if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            if (data.statusCode === 401) {
              this.errorMessage = "Incorrect login or password";
            }
            return Promise.reject(error);
          }
        })
        .catch((error) => {
          const alertStore = useAlertStore();
          alertStore.error(this.errorMessage);
          if (typeof error !== "undefined" && error) {
            this.logout();
          }
        });
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/login");
    },
  },
});
