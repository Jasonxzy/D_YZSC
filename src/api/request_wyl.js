// 专门存放发送请求的方法
import sendAxios from './axios'

// let collection= function (fn) {
//   sendAxios('post', 'Canso/getcollectlist').then((res) => {
//     fn(res)
//   })
// }
// let collectionlist = function (fn) {
//   sendAxios('post', 'getordertb').then((res) => {
//     fn(res)
//   })
// }
//注册验证
let register = function (data, fn) {
  sendAxios('post', 'user_yzPhonAction', data).then((res) => {
    fn(res)
  })
}
// let picturec = function (fn) {
//   sendAxios('post', 'user_codeImgaction').then((res) => {
//     fn(res)
//   })
// }
// 短信验证
let Shortmessage = function (data, fn) {
  sendAxios('post', 'user_phonyzaction', data).then((res) => {
    fn(res)
  })
}
// 登录
let login = function (data, fn) {
  sendAxios('post', 'user_userLoginAction', data).then((res) => {
    fn(res)
  })
}
let Forgetpassword = function (data, fn) {
  sendAxios('post', 'user_zhqueryaction', data).then((res) => {
    fn(res)
  })
}
let address= function (data, fn) {
  sendAxios('post', 'goods_addressaddaction', data).then((res) => {
    fn(res)
  })
}
export {
//  collection,
//  collectionlist,
 register,
 picturec,
 Shortmessage,
 login,
 Forgetpassword,
 address
}
