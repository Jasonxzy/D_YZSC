// 专门存放发送请求的方法
import sendAxios from './axios'
let getLists = function (fn) {
  sendAxios('post', '/Canso/getcommentbyuserid?goodsid=1').then((res) => {
    fn(res)
  })
}

export {
  getLists
}
