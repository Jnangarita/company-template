import { createRouter, createWebHashHistory } from 'vue-router'

import IndexPage from "@/pages/IndexPage.vue";
import Login from "@/pages/LoginPage.vue";

const routes = [
  { path: '/', component: IndexPage },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router