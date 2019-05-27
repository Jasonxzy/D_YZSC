// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
// export default new Vuex.Store({
//     state:{
//         tokcn:'',
//         user: {}
//     },
//     mutations:{
//         user: function (state,token,user){
//         state.token=token,
//         state.user=user
//         }
//     }
// })
import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    // state里面会存一个token值
    token: '',
    userphon: ''
  },
  mutations: {
    userInfor: function (state, token, userphon) {
      state.token = token
      state.userphon = userphon
    }
  }
})