import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/views/HelloWorld.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/he',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Проверяем в meta маршрута requiresAuth
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Проверям токен JWT
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath },
      });
    }
  } else { // В мета маршрута нет требования авторизации
    next();
  }
});

export default router;
