import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../components/firebase/firebaseConfig'; // Firebase authentication
import UserLogin from '../components/auth/UserLogin.vue';
import AdminLogin from '../components/auth/AdminLogin.vue';
import UserDashboard from '../components/UserDashboard.vue';
import AdminPanel from '../components/AdminPanel/AdminPanel.vue';

const routes = [
  { path: '/', name: 'UserLogin', component: UserLogin },
  { path: '/admin-panel', name: 'AdminLogin', component: AdminLogin },
  { path: '/admin/dashboard', component: AdminPanel, meta: { requiresAuth: true, requiresAdmin: true } },
  { path: '/dashboard', component: UserDashboard, meta: {requiresAuth: true} },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = auth.currentUser;

  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!user) {
      next('/');
    }
    else {
      if(to.matched.some(record => record.meta.requiresAdmin)) {
        const isAdmin = true;
        if(isAdmin){
          next();
        }
        else {
          next('/dashboard');
        }
      }
      else {
        next();
      }
    }
  }
  else {
    next();
  }
});

export default router;
