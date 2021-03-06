// 专门存放发送请求的方法
import sendAxios from './axios'
// 全部商品分类
let getList = function (fn) {
  sendAxios('post', '/Canso/getGoodsType').then((res) => {
    fn(res)
  })
}
// 全部商品一级列表分类
let getLists = function (data, fn) {
  sendAxios('post', '/Canso/getgoodsone', data).then((res) => {
    fn(res)
  })
}
// 全部商品二级列表分类
let getListstow = function (data, fn) {
  sendAxios('post', '/Canso/getgoodstwo', data).then((res) => {
    fn(res)
  })
}
// 元祖新品列表分类
let NewProducts = function (fn) {
  sendAxios('post', '/Canso/getgoodsone?typeone=5').then((res) => {
    fn(res)
  })
}
// 元祖新品列表分类
let HotSelling = function (fn) {
  sendAxios('post', '/Canso/getgoodsone?typeone=3').then((res) => {
    fn(res)
  })
}
// 元祖民俗列表分类
let folkCustom = function (fn) {
  sendAxios('post', '/Canso/getgoodsone?typeone=1').then((res) => {
    fn(res)
  })
}
// 元祖卡卷列表分类
let CardRoll = function (fn) {
  sendAxios('post', '/Canso/getgoodsone?typeone=6').then((res) => {
    fn(res)
  })
}
// 元祖蛋糕分类商品
let Cake = function (fn) {
  sendAxios('post', '/Canso/getgoodstwo?typetwo=5').then((res) => {
    fn(res)
  })
}
// 元祖礼盒分类商品
let GiftBox = function (fn) {
  sendAxios('post', '/Canso/getgoodstwo?typetwo=11').then((res) => {
    fn(res)
  })
}
// 元祖西点分类商品
let westPoint = function (fn) {
  sendAxios('post', '/Canso/getgoodstwo?typetwo=12').then((res) => {
    fn(res)
  })
}
// 猜你喜欢分类商品
let guess = function (fn) {
  sendAxios('post', '/Canso/getgoodstwo?typetwo=15').then((res) => {
    fn(res)
  })
}
// 商品详情也页面
let Dtails = function (data, fn) {
  sendAxios('post', '/Canso/getgoodsbyid', data).then((res) => {
    fn(res)
  })
}
// 根据商品id获取评论
let comment = function (data, fn) {
  sendAxios('post', '/Canso/getcommentbygoodsid', data).then((res) => {
    fn(res)
  })
}
// 根据用户获取收藏信息
let Collection = function (data, fn) {
  sendAxios('post', '/Canso/getcollectlist', data).then((res) => {
    fn(res)
  })
}
// 删除收藏信息
let DeleteGoods = function (data, fn) {
  sendAxios('post', '/Canso/deletecollectbyid', data).then((res) => {
    fn(res)
  })
}
// 根据用户id和产品id添加收藏信息
let MerColl = function (data, fn) {
  sendAxios('post', '/Canso/addCollect', data).then((res) => {
    fn(res)
  })
}
// 根据用户id和产品id添加购物车
let Addcart = function (data, fn) {
  sendAxios('post', '/Canso/addshopp', data).then((res) => {
    fn(res)
  })
}
// 根据用户id和产品id添加评论
let Addcomment = function (data, fn) {
  sendAxios('post', '/Canso/addComment', data).then((res) => {
    fn(res)
  })
}
// 根据名称模糊查询
let SearGoods = function (data, fn) {
  sendAxios('post', '/Canso/getGoodsforname', data).then((res) => {
    fn(res)
  })
}
// 根据用户查询购物车
let queryCart = function (data, fn) {
  sendAxios('post', '/Canso/getshopping', data).then((res) => {
    fn(res)
  })
}
// 在收藏页根据用户查询购物车
let meraddCart = function (data, fn) {
  sendAxios('post', '/Canso/addshopp', data).then((res) => {
    fn(res)
  })
}
export {
  getList,
  getLists,
  getListstow,
  NewProducts,
  HotSelling,
  folkCustom,
  CardRoll,
  Cake,
  GiftBox,
  westPoint,
  guess,
  Dtails,
  comment,
  Collection,
  DeleteGoods,
  MerColl,
  Addcart,
  Addcomment,
  SearGoods,
  queryCart,
  meraddCart
}
