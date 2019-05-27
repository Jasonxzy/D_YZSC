// vuex 数据
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import login from './login'
Vue.use(Vuex)
const state = {
  showFooter: true,
  changableNum: 0
}
const store = new Vuex.Store({
  state,
  modules: {
    cart: cart,
    login
  }
})
export default store
