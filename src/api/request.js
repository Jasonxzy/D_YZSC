// 专门存放发送请求的方法
import sendAxios from './axios'
let getList = function (data,callback) {
  sendAxios('post', '/address_queryAllProvinceAddress.action').then((res) => {
    callback(res)
  })
}
let getList2 = function (data,callback) {
  sendAxios('post', '/address_queryAllCityAddress.action').then((res) => {
    callback(res)
  })
}


export {
  getList,
  getList2
}
