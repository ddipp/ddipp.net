import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/views/HelloWorld.vue';
import Home from '@/views/Home.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Проверяем в meta маршрута requiresAuth
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log('required auth');
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
