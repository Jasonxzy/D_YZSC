import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import router from './router'
import store from './store/index'
import login from './store/login.js'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import '@/public-css/public.less'
import VDistpicker from 'v-distpicker'
import vueMagnify from 'vue-magnify'
Vue.component('v-distpicker', VDistpicker)
Vue.use(vueMagnify)
Vue.use(ElementUi)
new Vue({
  el: '#app',
  router,
  axios,
  login,
  store,
  components: { App },
  template: '<App />'
})
