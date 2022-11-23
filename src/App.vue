<template>
  <main class="main">
    <div class="container">
      <section class="wrapper">
        <Alert />
        <router-view />
      </section>
    </div>
  </main>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth.store";
import Alert from '@/components/Alert.vue';

export default {
  components: {
    Alert,
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    onMounted(() => {
      if (authStore.user) {
        router.push('/home');
      }
    });

    return { authStore };
  },
};
</script>

<style lang="scss">
@import "./assets/style.scss";
</style>
