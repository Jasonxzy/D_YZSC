// 专门存放发送请求的方法
import sendAxios from './axios'

//注册验证
let register = function (data, fn) {
  sendAxios('post', 'Canso/user_yzPhonAction', data).then((res) => {
    fn(res)
  })
}
// 短信验证
let Shortmessage = function (data, fn) {
  sendAxios('post', 'Canso/user_phonyzaction', data).then((res) => {
    fn(res)
  })
}
// 登录
let login = function (data, fn) {
  sendAxios('post', 'Canso/user_userLoginAction', data).then((res) => {
    fn(res)
  })
}
let Forgetpassword = function (data, fn) {
  sendAxios('post', 'uCanso/ser_zhqueryaction', data).then((res) => {
    fn(res)
  })
}
let address= function (data, fn) {
  sendAxios('post', 'Canso/goods_addressaddaction', data).then((res) => {
    fn(res)
  })
}
function loging () {
  // 1.请求后台判断是否登录
  // 2.已登录 后台返回登录信息和token
  // 3.将返回的信息存储到localstorage中
  var telphone = window.localStorage.getItem('user')
  telphone = JSON.parse(telphone)
  console.log(telphone)
  var token = window.localStorage.getItem('token')
  store.commit('userInfor', token, telphone)
  console.log(store.state)
}
export {
 register,
 picturec,
 Shortmessage,
 login,
 Forgetpassword,
 address,
 loging
}
