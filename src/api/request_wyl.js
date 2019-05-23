// 专门存放发送请求的方法
import sendAxios from './axios'

let collection= function (fn) {
  sendAxios('post', 'Canso/getcollectlist').then((res) => {
    fn(res)
  })
}
let collectionlist = function (fn) {
  sendAxios('post', 'Canso/getordertb').then((res) => {
    fn(res)
  })
}
let register = function (data, fn) {
  sendAxios('post', 'user_zhqueryaction', data).then((res) => {
    fn(res)
  })
}
let picturec = function (fn) {
  sendAxios('post', 'Canso/user_codeImgaction').then((res) => {
    fn(res)
  })
}
export {
 collection,
 collectionlist,
 register,
 picturec
}
