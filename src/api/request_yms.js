// 专门存放发送请求的方法
import sendAxios from './axios'
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
  sendAxios('post', '/Canso/getshopping?userid=28').then((res) => {
    fn(res)
    console.log('商品数据')
    console.log(res)
    console.log('商品数据')
  })
}
// 删除一条购物车商品数据
let deleteList = function (data, fn) {
  sendAxios('post', '/Canso/deleteshopp', data).then((res) => {
    fn(res)
  })
}
// 添加图片
let imgss = function (fn) {
  sendAxios('post', '/Canso/getshopping?userid=1').then((res) => {
    fn(res)
    console.log(res)
  })
}
// 获取地址信息
let address = function (data, fn) {
  sendAxios('post', '/Canso/goods_addressaddaction', data).then((res) => {
    fn(res)
    console.log('地址啊')
    console.log(res)
  })
}
export {
  addUsercomments,
  shopcart,
  deleteUsercomments,
  deleteList,
  imgss,
  address
}
