import Vue from 'vue';
import App from './App.vue';
import Jquery from 'jquery';

Vue.config.productionTip = false;

// Vue.use({
//   install (Vue) {
//     Vue.jquery = Jquery;
//     Vue.prototype.$jquery = Jquery;
//   }
// });

window.$ = Jquery;

new Vue({
  render: h => h(App),
}).$mount('#app');
