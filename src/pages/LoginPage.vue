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
      <form action="">
        <fieldset>
          <input
            :placeholder="$t('message.email')"
            class="display-flex input-login-page"
            type="text"
          />
          <input
            :placeholder="$t('message.password')"
            class="display-flex input-login-page"
            type="password"
          />
          <label class="display-flex" for="remember">
            <input id="remember" type="checkbox" />{{
              $t("message.rememberMe")
            }}
          </label>
          <input class="btn-login" type="submit" :value="$t('message.login')" />
        </fieldset>
        <hr />
        <fieldset>
          <button class="btn-login btn-google">
            {{ $t("message.signInWithGoogle") }}
          </button>
          <button class="btn-login btn-facebook">
            {{ $t("message.signInWithFacebook") }}
          </button>
        </fieldset>
        <hr />
        <fieldset>
          <p>
            <a href="">{{ $t("message.forgetPassword") }}</a>
          </p>
          <p>
            <a href="">{{ $t("message.createAccount") }}</a>
          </p>
        </fieldset>
      </form>
    </section>
  </div>
</template>

<script setup>
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