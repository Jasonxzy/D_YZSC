//     封装axios请求
import axios from 'axios'
import {api} from './index'



function sendAxios (methods, url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: methods,
      url: api + url,
      data: data
    }).then((res) => {
      if (res.data.message === 'success') {
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
