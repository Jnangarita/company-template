import { createRouter, createWebHashHistory } from 'vue-router'

import Index from "@/pages/Index.vue";
import Login from "@/pages/Login.vue";
import ForgotPassword from "@/pages/ForgotPassword.vue";
import CreateAccount from '@/pages/CreateAccount.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/login', name: "login", component: Login },
  { path: '/forgot-password', name: "forgotPassword", component: ForgotPassword },
  { path: '/create-account', name: "createAccount", component: CreateAccount },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router