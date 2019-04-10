import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/router.js';
import App from './App';
import axios from 'axios';

Vue.prototype.$http = axios;

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
