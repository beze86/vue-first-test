import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import { routes } from './routes.js';
import { store } from  './store.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App),
})
