import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/public-css/public.less'
import VDistpicker from 'v-distpicker'
Vue.component('v-distpicker', VDistpicker)
import vueMagnify from 'vue-magnify'
Vue.use(vueMagnify)
Vue.use(ElementUi)
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App />'
})
