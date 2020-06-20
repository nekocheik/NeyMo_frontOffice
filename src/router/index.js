import Vue from 'vue';
import VueRouter from 'vue-router';
import Inscription from '@/views/Inscription.vue';
import Register from '@/views/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'register',
    component: Register,
  },
  {
    path: '/',
    name: 'inscription',
    component: Inscription,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
