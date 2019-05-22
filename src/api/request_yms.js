// 专门存放发送请求的方法
import sendAxios from './axios'
let getList = function (data, callback) {
  sendAxios('post', '/Canso/getGoodsType', data).then((res) => {
    callback(res)
  })
}

export {
  getList
}
