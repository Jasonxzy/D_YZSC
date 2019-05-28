const state = {
  token: '',
  userinfo: ''
}
const mutations = {
  getuserinfo: function (state, data){
    state.token = data.token
    state.userinfo = data.userinfo
   }
  }
  export default {
    namespace: true,
    state,
    mutations
  }