// 专门存放发送请求的方法
import sendAxios from './axios'

let loginList = function (data,callback) {
  sendAxios('post', '/goods_getJsonGoodsinfoType').then((res) => {
    callback(res)
  })
}


export{
    loginList
}