<template>
<div>
    <div class="nav-top">
        <div class="nav-bottom">
            忘记密码
        </div>
        <div class="nav-top-span">
        <span>请输入您账户的电子邮件地址。我们将通过电子邮件向您发送更改密码的链接。。</span>
        <span>标有星号 (*) 的字段是必填字段</span>
        </div>
    </div>
    <div class="register">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="100px">
        <el-form-item prop="email" label="邮箱">
            <el-input v-model="ruleForm.email" placeholder="请输入你的邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="picture" label="验证码">
            <el-input v-model="ruleForm.picture" placeholder="请输入验证码" class="el-input-phone"></el-input>
            <span class="a-phone">
                <img>
            </span>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">找回密码</el-button>
        </el-form-item>
        </el-form>
    </div>
</div>
</template>
<script>
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
    var email = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      } else {
        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.com+)+$/
        if (reg.test(value) === false) {
          return callback(new Error('请输入正确的邮箱'))
        } else {
          callback()
        }
      }
    }
    var Shortmessage = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('获取验证码'))
      } else {
        var reg = /^\d{6}$/
        if (reg.test(value) === false) {
          return callback(new Error('请输入正确的验证码'))
        } else {
          callback()
        }
      }
    }
    var picture = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('获取验证码'))
      } else {
        var reg = /^\d{6}$/
        if (reg.test(value) === false) {
          return callback(new Error('请输入正确的验证码'))
        } else {
          callback()
        }
      }
    }
    var Recommender = (rule, value, callback) => {
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
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        phone: '',
        email: '',
        Shortmessage: '',
        picture: '',
        Recommender: ''
      },
      activeName: 'second',
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phone: [
          { validator: phone, trigger: 'blur' }
        ],
        email: [
          { validator: email, trigger: 'blur' }
        ],
        Shortmessage: [
          { validator: Shortmessage, trigger: 'blur' }
        ],
        picture: [
          { validator: picture, trigger: 'blur' }
        ],
        Recommender: [
          { validator: Recommender, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
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
.register{
  width: 700px;
  margin: auto;
}
.el-button{
  width: 200px;
  margin-left: -20px;
}
.el-tabs__nav{
  left: 540px;
}
.a-phone{
  font-size: 14px;
  vertical-align: middle;
  background:#e93d6d;
  display: inline-block;
  width: 27%;
  text-align: center;
  border: 1px soli;
  border-radius: 4px;
  line-height: 38px;
  color: white;
  margin-left: 10px;
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
.el-input-phone{
  width: 70%;
  display: inline-block;
}
.nav-top{
  margin-top: 20px;
  font-size: 14px;
  width: 700px;
  margin: auto;
}
.nav-bottom{
  border-bottom: 1px solid #cccccc;
  padding-bottom: 15px;
  margin-bottom: 20px;
}
 .nav-top-span{
    display: inline-block;
    margin-bottom: 14px;
}
</style>
