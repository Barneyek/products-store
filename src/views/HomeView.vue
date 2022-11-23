<template>
  Halo?
  <h2>Welcome, {{ authStore.user }}</h2>
</template>
<script>
import { useAuthStore } from "@/stores/auth.store";
export default {
  setup() {
    const authStore = useAuthStore();

    return { authStore };
  },
};
</script>
