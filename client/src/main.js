import Vue from 'vue'
import App from './App.vue'


import AOS from 'aos';
import "aos/dist/aos.css"

import jQuery from 'jquery'

window.$ = jQuery;
// Vue.use(jQuery);

Vue.config.productionTip = false

new Vue({
  created(){
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app')
