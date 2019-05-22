// 专门存放发送请求的方法

import sendAxios from './axios'

let orderLL = function (data, callback) {
  sendAxios('post', '/Canso/getordertb').then((res) => {
    callback(res)
  })
}
export {
  orderLL
}
