<template>
  <div class="main-login-container display-flex">
    <div class="login-content display-flex">
      <img
        alt="img"
        class="login-photo"
        src="/src/assets/images/forget-password.png"
      />
      <div class="login-form">
        <h1 class="title">{{ $t("message.forgetPassword") }}</h1>
        <p class="txt-suggestions">{{ $t("message.forgetPasswordMsg") }}</p>
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
              :value="$t('message.restorePassword')"
              class="btn"
              type="submit"
            />
          </fieldset>
        </form>
        <div>
          <p class="txt-suggestions">
            <a @click.prevent="goToAnotherScreen(router, 'createAccount')">
              {{ $t("message.createAccount") }}
            </a>
          </p>
          <p class="txt-suggestions">
            <a @click.prevent="goToAnotherScreen(router, 'login')">
              {{
                $t("message.alreadyHaveAccount").concat(
                  " ",
                  $t("message.login")
                )
              }}
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
});

const login = () => {
  console.log(loginData.value);
  router.push("/");
};
</script>