<template>
  <main class="main">
    <Alert />
    <router-view />
  </main>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth.store";
import Alert from "@/components/Alert.vue";

export default {
  components: {
    Alert,
  },
  setup() {
    const auth = useAuthStore();
    const router = useRouter();

    onMounted(() => {
      if (auth.user?.access_token) {
        router.push("/home");
      }
    });

    return { auth };
  },
};
</script>

<style lang="scss">
@import "./assets/style.scss";
</style>
