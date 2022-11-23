<template>
  <div class="about">
    <h1>This is an about page</h1>
    <app-auth />
  </div>
</template>
<script>
import appAuth from "@/components/AppAuth.vue";

export default {
  components: {
    appAuth,
  },
  setup() {},
};
</script>
