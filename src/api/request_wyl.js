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
<<<<<<< HEAD
let addresslist= function (data, fn) {
  sendAxios('post', 'Canso/goods_addressaddaction', data).then((res) => {
    fn(res)
  })
}
=======
>>>>>>> dd8b8970d53ad94809d6d5797b2a7145fc569e40
export {
 register,
<<<<<<< HEAD
 // picturec,
=======
>>>>>>> c182060eec728049c0568c9952973f65b7e2026f
 Shortmessage,
 login,
 Forgetpassword,
 address,
<<<<<<< HEAD
 addresslist
=======
>>>>>>> dd8b8970d53ad94809d6d5797b2a7145fc569e40
}
