import Vue from 'vue';
import App from './App.vue';
import scrollAnimation from './directives/scrollAnimation';
import jQuery from 'jquery';
import VueScrollmagic from 'vue-scrollmagic';
import VueRouter from 'vue-router';
import axios from 'axios';


import Home from './components/Home/Home.vue';
import Contact from './components/ContactUs/Contact.vue';
import productDetails from './components/Product/ProductDetails.vue';
import product from './components/Product/Product.vue';
import InfiniteLoading from 'vue-infinite-loading';

import { store } from './store/store';


Vue.use(VueRouter);
Vue.use(VueScrollmagic);
Vue.use(InfiniteLoading);

Vue.directive('scrollanimation', scrollAnimation);

Vue.prototype.$http = axios;
Vue.prototype.$api = 'http://localhost:3000/';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/contact-us', component: Contact, name: 'contact' },
  {path: '/products/:id', component: productDetails, name: 'productDetails',props: true},
  {path: '/products',  component: product, name: 'product',props: true}

];

window.$ = jQuery;


Vue.config.productionTip = false;
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition){
    return {x:0 , y:0};
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
