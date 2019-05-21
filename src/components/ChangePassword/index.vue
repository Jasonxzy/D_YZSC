<template>
  <div class="Change-Password">
    <div class="Password-box">
      <span>修改你的密码</span>
    </div>
    <div class="Password-modify">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="100px">
        <el-form-item  prop="pass1"  label="原始密码">
          <el-input type="password" v-model="ruleForm.pass1" autocomplete="off" placeholder="请输入你的原密码"></el-input>
        </el-form-item>
         <el-form-item  prop="pass"  label="新的密码">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入你的新密码"></el-input>
        </el-form-item>
        <el-form-item  prop="checkPass" label=" 确认密码" >
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请输入确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
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
    var pass1 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else {
        var reg = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{8,}$/
        if (reg.test(value) === false) {
          return callback(new Error('请输入正确的密码'))
        } else {
          callback()
        }
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
        pass1: ''
      },
      activeName: 'second',
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        pass1: [
          { validator: pass1, trigger: 'blur' }
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
.Change-Password{
  width: 1000px;
  height: 400px;
  border: 1px solid #cccccc;
  margin: auto;
}
.Password-box{
  width: 900px;
  margin: auto;
  border-bottom:1px solid #cccccc;
  margin-top: 30px;
}
.fr{
  float: right;
}
.fl{
  float: left;
}
.Password-box span{
  font-weight: bold;
  font-size: 14px;
  display:inline-block;
  line-height: 30px;
}
.Password-modify{
  width: 400px;
  margin-left: 60px;
  margin: auto;
  margin-top: 30px;
}
</style>
