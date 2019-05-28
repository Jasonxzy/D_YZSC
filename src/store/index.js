// vuex 数据
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
Vue.use(Vuex)
const state = {
  showFooter: true,
  changableNum: 0
}
// 导出vuex实例
const store = new Vuex.Store({
  state,
  modules: {
    cart: cart
  }
})
export default store
