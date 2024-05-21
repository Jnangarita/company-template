import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  fallbackLocale: 'es',
  legacy: false,
  locale: 'es',
  messages: {
    es: {
      message: {
        email: 'Correo electrónico',
        password: 'Contraseña',
        rememberMe: 'Recordarme',
        login: 'Iniciar sesión',
        signInWithGoogle: 'Iniciar sesión con Google',
        signInWithFacebook: 'Iniciar sesión con Facebook',
        forgetPassword: '¿Olvido la contraseña?',
        createAccount: 'Crear cuenta',
        template: 'Plantilla',
        welcome: 'Bienvenido',
      }
    }
  }
})

export default i18n;