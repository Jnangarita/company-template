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
        forgetPasswordMsg: '¡Ingrese su dirección de correo electrónico y le enviaremos un enlace para restablecer su contraseña!',
        restorePassword: 'Restablecer contraseña',
        alreadyHaveAccount: '¿Ya tienes una cuenta?',
        registerAccount: 'Registrar cuenta',
        firstName: 'Primer nombre',
        lastName: 'Apellido',
        confirmPassword: 'Confirmar contraseña',
        dashboard: 'Dashboard',
        component: 'Componente',
      }
    }
  }
})

export default i18n;