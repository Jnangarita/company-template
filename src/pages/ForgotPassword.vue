<template>
  <div class="main-container display-flex">
    <div class="container">
      <img
        alt="img"
        class="login-photo"
        src="/src/assets/images/forget-password.png"
      />
      <div class="form-data">
        <h1 class="title">{{ $t("message.forgetPassword") }}</h1>
        <p>{{ $t("message.forgetPasswordMsg") }}</p>
        <form @submit.prevent="login">
          <fieldset>
            <input
              :placeholder="$t('message.email')"
              class="display-flex input-login-page"
              id="email-login"
              required
              type="email"
            />
            <input
              :value="$t('message.restorePassword')"
              class="btn-login"
              type="submit"
            />
          </fieldset>
        </form>
        <div>
          <p>
            <a href="">{{ $t("message.createAccount") }}</a>
          </p>
          <p>
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
import { useRouter } from "vue-router";

const router = useRouter();

const login = () => {
  router.push("/");
};
</script>
<style scoped>
.main-container {
  align-items: center;
  background-color: var(--primary);
  height: 100vh;
  justify-content: center;
}

.container {
  background-color: white;
  border-radius: var(--main-radius);
  display: flex;
}

.form-data {
  width: 26.25rem;
}

p {
  margin: 1em auto;
  text-align: center;
  width: var(--btn-input-login);
}

fieldset {
  border-bottom: 1px solid var(--light-gray-blue);
  margin: auto;
  width: 21.5rem;
}

input[type="submit"] {
  background-color: var(--primary);
}
</style>