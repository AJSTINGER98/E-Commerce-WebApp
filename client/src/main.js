<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import scrollAnimation from './directives/scrollAnimation';

Vue.directive('scrollanimation', scrollAnimation);
=======
import Vue from 'vue';
import App from './App.vue';
import Jquery from 'jquery';
>>>>>>> ef530c343de2324280be66a4db209f9702a9d347

import AOS from 'aos';
import "aos/dist/aos.css";

import jQuery from 'jquery';

window.$ = jQuery;
// Vue.use(jQuery);

Vue.config.productionTip = false;

new Vue({
  created(){
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app');
