<template>
  <div class="main-login-container display-flex">
    <div class="login-content display-flex">
      <img
        alt="img"
        class="login-photo"
        src="/src/assets/images/create-account.png"
      />
      <div class="login-form">
        <h1 class="title">{{ $t("message.createAccount") }}</h1>
        <form @submit.prevent="login">
          <fieldset class="form-content margin-auto">
            <div class="display-flex">
              <input
                :placeholder="$t('message.firstName')"
                class="input-create-account margin-left-0 input-common"
                type="text"
                v-model="loginData.firstName"
              />
              <input
                :placeholder="$t('message.lastName')"
                class="input-create-account margin-right-0 input-common"
                type="text"
                v-model="loginData.lastName"
              />
            </div>
            <input
              :placeholder="$t('message.email')"
              class="input-login-page input-common"
              id="email-login"
              required
              type="email"
              v-model="loginData.email"
            />
            <div class="display-flex">
              <input
                :placeholder="$t('message.password')"
                class="input-create-account margin-left-0 input-common"
                id="password-login"
                pattern="[a-z0-5]{8,}"
                required
                type="password"
                v-model="loginData.password"
              />
              <input
                :placeholder="$t('message.confirmPassword')"
                class="input-create-account margin-right-0 input-common"
                id="confirm-password"
                pattern="[a-z0-5]{8,}"
                required
                type="password"
                v-model="loginData.confirmPassword"
              />
            </div>
            <input
              :value="$t('message.registerAccount')"
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
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const login = () => {
  console.log(loginData.value);
  router.push("/");
};
</script>