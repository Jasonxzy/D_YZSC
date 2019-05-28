// 专门存放发送请求的方法

import sendAxios from './axios'

let orderLL = function (fn) {
  sendAxios('post', '/Canso/getordertb?userid=1').then((res) => {
    fn(res)
  })
}
// let orderLL1 = function (fn) {
//   sendAxios('post', '/Canso/getordertb?userid=1').then((res) => {
//     fn(res)
//   })
// }
let homeNl = function (data, fn) {
  sendAxios('post', '/Canso/getNoticeType', data).then((res) => {
    fn(res)
  })
}
let homeNlq = function (fn) {
  sendAxios('post', '/Canso/getNoticeType').then((res) => {
    fn(res)
  })
}
export {
  orderLL,
  homeNl,
  homeNlq
  // orderLL1
}
