<template>
  <div>
    <div class="heading">
      <h1 class="text text-large">Sign In</h1>
      <p class="text text-normal">
        New user?
        <span><a href="#" class="text text-links">Create an account</a></span>
      </p>
    </div>
    <vee-form
      :validation-schema="loginSchema"
      @submit="login"
      class="form"
    >
      <div class="input-control">
        <label for="email" class="input-label" hidden>Email Address</label>
        <vee-field
          v-model="email"
          type="email"
          name="email"
          id="email"
          class="input-field"
          placeholder="Email Address"
        />
        <ErrorMessage class="input-error" name="email" />
      </div>
      <div class="input-control">
        <label for="password" class="input-label" hidden>Password</label>
        <vee-field
          v-model="password"
          type="password"
          name="password"
          id="password"
          class="input-field"
          placeholder="Password"
        />
        <ErrorMessage class="input-error" name="password" />
      </div>
      <div class="form__submit">
        <!--        @todo in future -->
<!--          <router-link to="/start/forget"> class="text text-links">Forgot Password</router-link>-->
        <input
          type="submit"
          name="submit"
          class="input-submit"
          value="Sign In"
        />
      </div>
    </vee-form>
  </div>
</template>

<script>
// import axios from "axios";
import { useAuthStore } from "@/stores/auth.store";

export default {
  name: "AppAuth",
  data() {
    return {
      email: "",
      password: "",
      loginSchema: {
        email: "required|email",
        password: "required|min:3|max:20",
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: "bg-blue-500",
      login_alert_msg: "Username or password is incorrect.",
    };
  },
  methods: {
    async login(values) {
      const authStore = useAuthStore();
      const { email, password } = values;
      await authStore.login(email, password);
    },
  },
};
</script>
