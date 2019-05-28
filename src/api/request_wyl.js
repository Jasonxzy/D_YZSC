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
export {
 register,
 Shortmessage,
 login,
 Forgetpassword,
 address,
}
