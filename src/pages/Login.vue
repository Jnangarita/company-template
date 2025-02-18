<template>
  <div class="main-login-container display-flex">
    <div class="login-content display-flex">
      <img alt="img" class="login-photo" src="/src/assets/images/login.png" />
      <div class="login-form">
        <h1 class="title">{{ $t("message.welcome") }}</h1>
        <form>
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
            <label class="display-flex" for="remember-user">
              <input
                class="margin-left-0"
                id="remember-user"
                name="remember-user"
                type="checkbox"
                v-model="loginData.rememberData"
              />{{ $t("message.rememberUser") }}
            </label>
            <ButtonComponent
              :btnClass="'primary'"
              :isLoading="isLoading"
              :txt="$t('message.login')"
              @click="login"
            >
              {{ $t("message.login") }}
            </ButtonComponent>
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
import ButtonComponent from "@/components/common/ButtonComponent.vue";

const router = useRouter();
let isLoading = ref(false);
const loginData = ref({
  email: "",
  password: "",
  rememberData: false,
});

const login = () => {
  try {
    if (!validateLoginField(loginData.value.email, loginData.value.password)) {
      return;
    }
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
      console.log(loginData.value);
      router.push("/");
    }, 5000);
  } catch (error) {
    console.error("Error al iniciar sesión");
  }
};

const validateLoginField = (email, password) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailPattern.test(email);
  const isPasswordValid = password.length >= 8;
  return isEmailValid && isPasswordValid;
};
</script>