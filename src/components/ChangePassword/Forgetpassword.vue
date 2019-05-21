<template>
  <div>
    <TopNavigation/>
    <TopBanner/>
    <search/>
    <ClassNav/>
    <div class="list">
      <span>主页</span><span>></span><span>忘记密码</span>
    </div>
    <div class="Forgetpassword">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="通过手机找回密码" name="first">
            <div class="password">
              <div class="nav-top">
                <div class="nav-bottom">
                  忘记密码
                </div>
                <div class="nav-top-span">
                <span>请输入您账户的手机号。我们将向您的手机号发送验证码来进行重置密码。</span>
                <span>标有星号 (*) 的字段是必填字段</span>
                </div>
              </div>
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="手机" prop="phone">
                  <el-input v-model="ruleForm.phone" placeholder="请输入你登录的手机号"></el-input>
                </el-form-item>
                <el-form-item label="验证码"  prop="pass">
                  <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入你登录的密码" class="el-input-phone"></el-input>
                  <span class="a-phone"><img></span>
                </el-form-item>
                <el-form-item prop="Shortmessage" label="短信验证">
                  <el-input  v-model="ruleForm.Shortmessage" placeholder="请输入你的手机号" class="el-input-phone"></el-input>
                  <span class="a-phone">获取验证码</span>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">找回密码</el-button>
                </el-form-item>
              </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="通过电子邮箱找密码" name="second">
              <router-view></router-view>
        </el-tab-pane>
    </el-tabs>
    </div>
    <BottomNav/>
  </div>
</template>
<script>
import BottomNav from '../public/BottomNavigation.vue'
import TopNavigation from '../public/TopNavigation.vue'
import TopBanner from '../public/TopBanner.vue'
import search from '../public/search.vue'
import ClassNav from '../public/ClassNav.vue'
  export default {
    data() {
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
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        phone: [
          { validator: phone, trigger: 'blur' }
        ]
      },
        activeName2: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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
  .Forgetpassword{
    width: 1200px;
    margin: auto;
  }
  .list{
    width: 1200px;
    margin: auto;
    font-size: 12px;
    height: 40px;
    line-height: 40px;
    background: rgb(247, 247,247)
  }
  .list span:first-child{
    margin-left: 0;
  }
  .list span{
    margin-left: 10px;
  }
>>>.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
  border-bottom-color: #e93d6d;
}
>>>.el-tabs__item{
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  width: 599px;
}
.password{
  width: 700px;
  margin: auto;
  margin-top: 30px;
}
>>>.el-button{
  width: 200px;
  background: #e93d6d;
  border: none;
} 
>>>.el-button--primary:hover{
  background:red;
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
.el-input-phone{
  width: 70%;
  display: inline-block;
}
.nav-top{
  margin-top: 20px;
  font-size: 14px;
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

