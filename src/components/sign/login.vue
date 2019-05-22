<template>
          <div class="login">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                 <el-form-item label="手机" prop="phone">
                  <el-input v-model="ruleForm.phone" placeholder="请输入你登录的手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码"  prop="pass">
                  <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入你登录的密码"></el-input>
                </el-form-item>
                <div class="automatic cleafx">
                    <input type="checkbox">自动登录
                    <router-link to="/"><a class="fr">忘记密码?</a></router-link>
                </div>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
              </el-form>
          </div>
</template>
<script>
import axios from "axios"
import {loginList} from "api/request_wyl"
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
    var validatePass = (rule, value, callback) => {
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
      ruleForm: {
        pass: '',
        phone: ''
      },
      activeName: 'second',
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        phone: [
          { validator: phone, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    // 获取数据
  mounted () {
    loginList({},(res) => {
      // console.log(res.data)
      //      this.goodsList = data.lists
    })  
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post("http://user_userLoginAction",{
            phone: this.ruleForm.phone,
            pass: this.ruleForm.pass
          }).then((res)=>{
            // 请求成功返回用户名 token
            console.log(res)
            // 返回来的东西要存到localstorage里面
            window.localStorage.setItem("token",res.token);
            window.localStorage.setItem('userinfo',JSON.stringify(res.userinfo))
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      console.log(this.$refs.ruleForm)
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
