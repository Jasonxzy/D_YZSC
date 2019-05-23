// 封装一些公共的方法
import md5 from 'js-md5'
/*
作用： 封装md5 加密
@param string 需要加密的密码
 */
const calcuMD5  = function (pwd) {
    pwd = md5(pwd);
    return pwd;
}

export {
    calcuMD5
}