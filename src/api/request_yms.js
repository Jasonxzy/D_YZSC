// 专门存放发送请求的方法
import sendAxios from './axios'
// 商品信息接口：
let shopinformation = function (fn) {
  sendAxios('post', '/Canso/getcommentbygoodsid?goodsid=1').then((res) => {
    fn(res)
  })
}
// 查看用户评论接口：
let Usercomments = function (fn) {
  sendAxios('post', '/Canso/getGoodsType').then((res) => {
    fn(res)
  })
}
// 添加用户评论接口：
let addUsercomments = function (fn) {
  sendAxios('post', '/Canso/getGoodsType').then((res) => {
    fn(res)
  })
}
// 删除用户评论接口
let deleteUsercomments = function (fn) {
  sendAxios('post', '/Canso/getGoodsType').then((res) => {
    fn(res)
  })
}
// 购物车页面接口
let shopcart = function (fn) {
  sendAxios('post', '/Canso/getshopping').then((res) => {
    fn(res)
  })
}
export {
  shopinformation,
  Usercomments,
  addUsercomments,
  shopcart,
  deleteUsercomments
}
