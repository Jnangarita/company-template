<template>
  <div class="main-login-container display-flex">
    <div class="login-content display-flex">
      <img alt="img" class="login-photo" src="/src/assets/images/login.png" />
      <div class="login-form">
        <h1 class="title">{{ $t("message.welcome") }}</h1>
        <form @submit.prevent="login">
          <fieldset class="form-content margin-auto">
            <input
              :placeholder="$t('message.email')"
              class="input-login-page input-common"
              id="email-login"
              required
              type="email"
              v-model="loginData.email"
            />
            <input
              :placeholder="$t('message.password')"
              class="input-login-page input-common"
              id="password-login"
              pattern="[a-z0-5]{8,}"
              required
              type="password"
              v-model="loginData.password"
            />
            <label class="display-flex" for="remember-data">
              <input
                class="margin-left-0"
                id="remember-data"
                name="remember-data"
                type="checkbox"
                v-model="loginData.rememberData"
              />{{ $t("message.rememberUser") }}
            </label>
            <input
              :value="$t('message.login')"
              class="btn-login"
              type="submit"
            />
          </fieldset>
        </form>
        <div>
          <p class="txt-suggestions">
            <a @click.prevent="goToAnotherScreen(router, 'forgotPassword')">
              {{ $t("message.forgetPassword") }}
            </a>
          </p>
          <p class="txt-suggestions">
            <a @click.prevent="goToAnotherScreen(router, 'createAccount')">
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