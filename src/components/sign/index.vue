<template>
<div>
  <TopNavigation/>
  <TopBanner/>
  <search/>
  <ClassNav/>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="登录" name="first">
      <router-view></router-view>
    </el-tab-pane>
    <el-tab-pane label="注册" name="second">
        <div class="register">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="100px">
          <el-form-item prop="phone" label="手机" name="phone">
              <el-input v-model="ruleForm.phone" placeholder="请输入你登录的手机号"></el-input>
          </el-form-item>
          <el-form-item prop="email" label="邮箱" name="email">
              <el-input v-model="ruleForm.email" placeholder="请输入你的邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="picture" label="验证码" name="">
              <el-input v-model="ruleForm.picture" placeholder="请输入验证码" class="el-input-phone"></el-input>
              <img class="img" @click="changeImageCode" :src="imgcode + timestamp "/>
          </el-form-item>
          <el-form-item prop="Shortmessage" label="短信验证" name="">
              <el-input v-model="ruleForm.Shortmessage" placeholder="请输入你的手机号" class="el-input-phone"></el-input>
              <a class="a-phone fr">
                <span v-show="sendAuthCode" class="auth_text auth_text_blue"  @click="getAuthCode">获取验证码</span>
                <span v-show="!sendAuthCode" class="auth_text"><span class="auth_text_blue codes">{{auth_time}}</span>秒之后重发</span>
              </a>
          </el-form-item>
              <el-form-item prop="Recommender" label="推荐人" name="">
              <el-input v-model="ruleForm.Recommender" placeholder="请输入推荐人的手机号"></el-input>
          </el-form-item>
          <el-form-item  prop="pass"  label="密码" name="">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入你的密码"></el-input>
          </el-form-item>
          <el-form-item  prop="checkPass" label=" 确认密码" name=" ">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请输入确认密码"></el-input>
          </el-form-item>
          <div class="automatic cleafx">
              <input type="checkbox">同意注册协议
              <router-link to="/Agreement" class="fr">注册协议</router-link>
          </div>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
        </el-form>
    </div>
    </el-tab-pane>
  </el-tabs>
  <BottomNav/>
</div>
</template>
<script>
import {register} from 'api/request_wyl.js'
import {Shortmessage} from 'api/request_wyl.js'
import {calcuMD5} from 'api/public'
import BottomNav from '../public/BottomNavigation.vue'
import TopNavigation from '../public/TopNavigation.vue'
import TopBanner from '../public/TopBanner.vue'
import search from '../public/search.vue'
import ClassNav from '../public/ClassNav.vue'
import {host} from 'api/index'
// console.log(calcuMD5(11111))
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
      sendAuthCode: true,
      auth_time: 0,
      ruleForm: {
        pass: '',
        checkPass: '',
        phone: '',
        email: '',
        Shortmessage: '',
        picture: '',
        Recommender: ''
      },
      timestamp: 0,
      imgcode: host+ 'user_codeImgaction?timestamp=',
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
    changeImageCode: function() {
        var timestamp = new Date().getTime();
        this.timestamp = timestamp
    },
    getAuthCode: function () {
      Shortmessage ({
        'Userinfo_userTelnumber': this.ruleForm.phone
      }, (res) => {
        console.log(res)
        //  this.collectionlist = data.lists
          })
      this.sendAuthCode = false
      this.auth_time = 30
      var authtimetimer = setInterval(() => {
        this.auth_time--
        if (this.auth_time <= 0) {
          this.sendAuthCode = true
          clearInterval(authtimetimer)
        }
      }, 1000)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    submitForm (formName) {
      // 判读表单是否通过验证
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 发送请求到后台，并将用户传递的信息一起发送过去
          console.log(this.ruleForm.phone)
          register({
            'userinfo_userTelnumber': this.ruleForm.phone,
            'Userinfo_userPassword': calcuMD5(this.ruleForm.pass),
            'verificationCode': this.ruleForm.Shortmessage
          },(res) => {
            console.log(res)
            //  this.collectionlist = data.lists
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
  },
  components: {
    BottomNav,
    ClassNav,
    search,
    TopBanner,
    TopNavigation
  }
}
</script>
<style scoped>
.register{
  width: 403px;
  margin: auto;
}
>>>.el-button{
  width: 303px;
  margin-left: -4px;
}
>>>.el-tabs__nav{
  left: 540px;
}
.automatic{
  font-size: 14px;
  margin-bottom: 20px;
  vertical-align: middle;
  margin-left: 100px;
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
>>>.el-input-phone{
  width: 60%;
}
.a-phone{
  width: 30%;
  border: 1px soli;
  border-radius: 4px;
  background:#409EFF;
  line-height: 38px;
  display: inline-block;
  text-align: center;
  color: white;
  margin-top: 3px;
}
>>>.el-tabs__nav{
  left: 600px;
}
.img{
  width: 36%;
  height: 40px;
}
</style>
