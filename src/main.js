import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import router from './router'
<<<<<<< HEAD
import store from './store/index' // 挂在store
=======
import store from './store/index'
import login from './store/login.js'
>>>>>>> c182060eec728049c0568c9952973f65b7e2026f
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
<<<<<<< HEAD
  store, // store：store  可以省略后者
=======
  login,
  store,
>>>>>>> c182060eec728049c0568c9952973f65b7e2026f
  components: { App },
  template: '<App />'
})
