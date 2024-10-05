import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../components/auth/UserLogin.vue';
import AdminLogin from '../components/auth/AdminLogin.vue';

const routes = [
  { path: '/', name: 'UserLogin', component: UserLogin },
  { path: '/admin-panel', name: 'AdminLogin', component: AdminLogin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
