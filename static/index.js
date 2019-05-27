import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default Vuex.Store({
  state: {
      token: '',
      use: {}
  },
  mutations:function( state,token,use){
    state.token=token;
    state.use=use  
  }
})