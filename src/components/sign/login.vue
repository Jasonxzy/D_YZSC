<template>
          <div class="login">
              <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
                 <el-form-item label="手机" prop="phone">
                  <el-input v-model="loginForm.phone" placeholder="请输入你登录的手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码"  prop="pass">
                  <el-input type="password" v-model="loginForm.Pass" autocomplete="off" placeholder="请输入你登录的密码"></el-input>
                </el-form-item>
                <div class="automatic cleafx">
                    <input type="checkbox">自动登录
                    <router-link to="/Forgetpassword "><a class="fr">忘记密码?</a></router-link>
                </div>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                </el-form-item>
              </el-form>
          </div>
</template>
<script>
import {calcuMD5} from 'api/public'
import {login} from 'api/request_wyl.js'
export default {
  data () {
    var phone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        var reg = /^1[34578]\d{9}$/
        if (reg.test(value) === false) {
          return callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      }
    }
   var Pass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      loginForm: {
        Pass: '',
        phone: ''
      },
      activeName: 'second',
      rules: {
        Pass: [
          { validator: Pass, trigger: 'blur' }
        ],
        phone: [
          { validator: phone, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleClick (tab, event) {
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
            login({
            'Userinfo_userTelnumber': this.loginForm.phone,
            'Userinfo_userPassword': calcuMD5(this.loginForm.Pass),
            },(res) => {
            console.log(res)
            window.localStorage.setItem('token',res.userid)
            window.localStorage.setItem('userinfo',res.userphon)
            this.$store.commit('getuserinfo', {userinfo: res.userphon,token:res.userid})
            this.$router.push({path: '/'})
            if(res.success===true){
              alert("密码正确")
            }else{
            alert("密码不对后用户名不对")
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>
.login-box{
  width: 1200px;
  margin: auto;
}
.login{
  width: 403px;
  margin: auto;
}
.el-button{
  width: 303px;
  margin-left: -4px;
}
.automatic{
  font-size: 14px;
  margin-bottom: 20px;
  vertical-align: middle;
  margin-left: 100px;
}
.a-phone{
  margin-top:100px;
}
.automatic input{
  vertical-align: middle;
}
.fr{
  float: left;
}
.fr{
  float: right;
}
.cleafx:after{
   clear: both;
   content: " ";
   display:inline-block;
}
/* .el-tabs__item{
  padding: 0 55px;
} */
</style>
