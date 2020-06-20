import Vue from 'vue';
import { ValidationProvider, extend, localize } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import './registerServiceWorker';
import requestApi from '../../custom_modules/RequestApi';
import Atoms from './component/atoms';
import Modules from './component/molecules';
import Layouts from './component/layouts';

Vue.config.productionTip = false;

// Add a rule.
extend('email', email);
extend('required', required);

// Register it globally

// Atoms
console.warn(Atoms, 'Atoms');
Vue.component('a-input', Atoms.AInputText);
Vue.component('a-button', Atoms.AButton);
Vue.component('a-link', Atoms.Alink);

// Molecules
console.warn(Modules, 'Modules');

// Layouts
console.warn(Layouts, 'Layouts');
Vue.component('LRegitster', Layouts.LRegister);

// global
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(requestApi);

new Vue({
  requestApi,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
