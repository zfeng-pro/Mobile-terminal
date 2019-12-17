// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './../static/rem'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ElementUI from 'element-ui';
import InfiniteLoading from 'vue-infinite-loading';
import axios from 'axios';
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper,);
Vue.prototype.$axios = axios;
Vue.use(InfiniteLoading);
new Vue({
  el: '#app',
  router,
  // axios,
  components: { App},

  template: '<App/>'
});
