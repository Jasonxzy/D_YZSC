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
// to 将要进入的路由
// from 从哪个路由来的
// next() 方法 进入哪一个路由 进入默认要进入的路由
router.beforeEach((to , from, next) => {
  // 判断是否需要登录， 根据meta 中的 req....
  if(to.meta.requirAuth){
     // 判断登录
    let userid = window.localStorage.getItem('userId')
    if(userid) {
      // 已经登录
      next()
    }else{
      next('/login')

    }
  }else {
    next()
  }

})
new Vue({
  el: '#app',
  router,
  axios,
  login,
  store,
  components: { App },
  template: '<App />'
})
