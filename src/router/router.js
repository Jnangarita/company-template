import { createRouter, createWebHashHistory } from 'vue-router'

import Index from "@/pages/Index.vue";
import Login from "@/pages/Login.vue";
import ForgotPassword from "@/pages/ForgotPassword.vue";

const routes = [
  { path: '/', component: Index },
  { path: '/login', name: "login", component: Login },
  { path: '/forgot-password', name: "forgotPassword", component: ForgotPassword },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router