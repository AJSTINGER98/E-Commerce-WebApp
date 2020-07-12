import Vue from 'vue';
import App from './App.vue';
import scrollAnimation from './directives/scrollAnimation';
import jQuery from 'jquery';
import AOS from 'aos';
import "aos/dist/aos.css";
import VueScrollmagic from 'vue-scrollmagic';


Vue.use(VueScrollmagic);

Vue.directive('scrollanimation', scrollAnimation);



window.$ = jQuery;


Vue.config.productionTip = false;

new Vue({
  created(){
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app');
