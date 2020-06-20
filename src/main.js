import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import './registerServiceWorker';
import requestApi from '../../custom_modules/RequestApi';
import Atoms from './component/atoms';
import Modules from './component/molecules';
import Layout from './component/layouts';

Vue.config.productionTip = false;

// Add a rule.
extend('secret', {
  validate: (value) => value === 'example',
  message: 'This is not the magic word',
});

// Register it globally

// Atoms
Vue.component('AInput', Atoms.AInputText);
Vue.component('AButton', Atoms.AButton);

// Molecules
console.warn(Modules);

// Layouts
console.warn(Modules);

// global
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(requestApi);

new Vue({
  requestApi,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
