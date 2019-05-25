//     封装axios请求


import axios from 'axios'
import {api} from './index'
import qs from 'qs'//上传数据转化成？连接
// npm i qs --save安装方法


function sendAxios (methods, url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: methods,
      url: api + url,
      data: qs.stringify(data) //{}   ?username= &password=
    }).then((res) => {
      if (res.data.success === true) {
        resolve(res.data)
      } else {
        console.log('请求失败')
      }
    }).catch((err) => {
      console.log('网络错误')
    })
  })
}

export default sendAxios
