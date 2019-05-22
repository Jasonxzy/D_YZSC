// 专门存放发送请求的方法
import sendAxios from './axios'
let getList = function (fn) {
  sendAxios('post', 'Canso/Backstage/index.jsp').then((res) => {
    fn(res)
  })
}
export {
  getList
}
