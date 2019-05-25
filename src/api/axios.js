//     封装axios请求
import axios from 'axios'
import {api} from './index'


function sendAxios (methods, url, data = {}) {
  let qs = require('qs')
  let requestrl = api + url + '?' + qs.stringify(data)
  return new Promise((resolve, reject) => {
    axios({
      method: methods,
      url: requestrl,
      data: data
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
