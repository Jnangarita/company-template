<template>
  <div class="main-login-container display-flex">
    <div class="login-content display-flex">
      <img alt="img" class="login-photo" src="/src/assets/images/login.png" />
      <div class="login-form">
        <h1 class="title">{{ $t("message.welcome") }}</h1>
        <form @submit.prevent="login">
          <fieldset class="form-content">
            <input
              :placeholder="$t('message.email')"
              class="display-flex input-login-page"
              id="email-login"
              required
              type="email"
              v-model="loginData.email"
            />
            <input
              :placeholder="$t('message.password')"
              class="display-flex input-login-page"
              id="password-login"
              pattern="[a-z0-5]{8,}"
              required
              type="password"
              v-model="loginData.password"
            />
            <label class="display-flex" for="remember-data">
              <input
                id="remember-data"
                name="remember-data"
                required
                type="checkbox"
                v-model="loginData.rememberData"
              />{{ $t("message.rememberMe") }}
            </label>
            <input
              :value="$t('message.restorePassword')"
              class="btn-login"
              type="submit"
            />
          </fieldset>
        </form>
        <div class="form-content">
          <button class="btn-login btn-google" @click="login">
            <i class="lab la-google la-lg"></i>
            {{ $t("message.signInWithGoogle") }}
          </button>
          <button class="btn-login btn-facebook" @click="login">
            <i class="lab la-facebook-f"></i>
            {{ $t("message.signInWithFacebook") }}
          </button>
        </div>
        <div>
          <p class="txt-suggestions">
            <a @click.prevent="goToAnotherScreen(router, 'forgotPassword')">
              {{ $t("message.forgetPassword") }}
            </a>
          </p>
          <p class="txt-suggestions">
            <a @click.prevent="goToAnotherScreen(router, 'forgotPassword')">
              {{ $t("message.createAccount") }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { goToAnotherScreen } from "@/util/functions";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const loginData = ref({
  email: "",
  password: "",
  rememberData: false,
});

const login = () => {
  console.log(loginData.value);
  router.push("/");
};
</script>
<style scoped>
.btn-google {
  background-color: var(--google-color);
}

.btn-facebook {
  background-color: var(--facebook-color);
}
</style>