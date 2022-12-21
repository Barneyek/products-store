<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-8">
          <h5 class="font-weight-normal margin-bottom-30">Sign in</h5>
          <vee-form
            :validation-schema="loginSchema"
            @submit="login"
          >
            <div class="input-control">
              <label for="email" class="required">Email Address</label>
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
              <label for="password" class="required">Password</label>
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
              <button
                type="submit"
                name="submit"
                class="button button-md button-dark margin-top-20t"
              >
                Sign in
              </button>
            </div>
          </vee-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
