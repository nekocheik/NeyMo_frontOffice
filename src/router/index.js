import Vue from 'vue';
import VueRouter from 'vue-router';
import Inscription from '@/views/Inscription.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
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
