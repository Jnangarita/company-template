<template>
  <div class="display-flex justify-content-center login-container">
    <section class="login-photo">
      <img
        alt="img"
        class="login-photo"
        src="https://dummyimage.com/440x570/dee2e6/6c757d.png"
      />
    </section>
    <section class="login-data">
      <h1 class="title">{{ $t("message.welcome") }}</h1>
      <form @submit.prevent="login">
        <fieldset>
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
          <input class="btn-login" type="submit" :value="$t('message.login')" />
        </fieldset>
        <hr />
      </form>
      <div>
        <button class="btn-login btn-google" @click="login">
          {{ $t("message.signInWithGoogle") }}
        </button>
        <button class="btn-login btn-facebook" @click="login">
          {{ $t("message.signInWithFacebook") }}
        </button>
        <hr />
      </div>
      <div>
        <p>
          <a @click.prevent="goHome">{{ $t("message.forgetPassword") }}</a>
        </p>
        <p>
          <a @click.prevent="goHome">{{ $t("message.createAccount") }}</a>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
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

const goHome = () => {
  router.push("/");
};
</script>
<style scoped>
.login-container {
  background-color: var(--primary);
  padding: 2.1em;
}

section {
  background-color: white;
  height: 35.625rem;
  width: 27.5rem;
}

.login-photo {
  border-bottom-left-radius: var(--main-radius);
  border-top-left-radius: var(--main-radius);
}

.login-data {
  border-bottom-right-radius: var(--main-radius);
  border-top-right-radius: var(--main-radius);
}

input[type="checkbox"] {
  margin-left: 3rem;
  margin-top: 0.1em;
}

input[type="submit"] {
  background-color: var(--primary);
}

.btn-google {
  background-color: var(--google-color);
}

.btn-facebook {
  background-color: var(--facebook-color);
}

p {
  margin: 1em auto;
  text-align: center;
}
</style>