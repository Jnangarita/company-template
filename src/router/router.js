import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/Index.vue') },
      { path: 'dashboard', name: 'dashboard', component: () => import('@/pages/Dashboard.vue') },
    ],
  },

  { path: '/login', name: 'login', component: () => import('@/pages/Login.vue') },
  { path: '/forgot-password', name: 'forgotPassword', component: () => import('@/pages/ForgotPassword.vue') },
  { path: '/create-account', name: 'createAccount', component: () => import('@/pages/CreateAccount.vue') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;