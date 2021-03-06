import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import jQuery from 'jquery';
import vuetify from './plugins/vuetify';
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import router from './router'
import "jquery.easing";
import carousel from "vue-owl-carousel";
import VueWaypoint from 'vue-waypoint';
import VueSplide from '@splidejs/vue-splide';

import "./assets/css/style.css";
import "./assets/vendor/animate.css/animate.css";
import "./assets/vendor/animate.css/animate.min.css";
import { VueperSlides, VueperSlide } from 'vueperslides'
import { CarouselPlugin } from 'bootstrap-vue';
import 'vueperslides/dist/vueperslides.css'

// import "./assets/vendor/jquery/jquery.min.js";
// import "./assets/vendor/jquery.easing/jquery.easing.min.js";
// import "./assets/vendor/isotope-layout/isotope.pkgd.min.js"; filtering and sorting
// import "./assets/vendor/venobox/venobox.min.js";   preseerves the mx height of the image if window width is low
// import "./assets/vendor/waypoints/jquery.waypoints.min.js";  execute a function whenever you scroll to an element
// import "./assets/vendor/owl.carousel/owl.carousel.min.js"; slider 
// import "./assets/js/main.js";

// import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/icofont/icofont.min.css" ;
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/venobox/venobox.css";
import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css"; 


Vue.config.productionTip = false
Vue.use(BootstrapVue).use(VueWaypoint).use(VueSplide);

new Vue({
  el: '#app',
  router,
  vuetify,
  VueWaypoint,
  VueperSlides, VueperSlide ,
  CarouselPlugin,
  axios,
  jQuery,
  BootstrapVue,
  carousel,
  VueSplide,
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
