<template>
  <div class="Change-Password">
    <div class="Password-box">
      <span>修改你的手机号</span>
    </div>
    <div class="Password-modify">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="100px">
        <el-form-item  prop="pass1"  label="旧手机">
          <el-input type="password" v-model="ruleForm.phone" autocomplete="off" placeholder="请输入你的原密码"></el-input>
        </el-form-item>
         <el-form-item  prop="pass"  label="新的手机">
          <el-input type="password" v-model="ruleForm.phone1" autocomplete="off" placeholder="请输入你的新密码"></el-input>
        </el-form-item>
        <el-form-item  prop="checkPass" label="密码" >
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入确认密码"></el-input>
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
    var phone1 = (rule, value, callback) => {
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
    return {
      ruleForm: {
        pass: '',
        phone: '',
        phone1: ''
      },
      activeName: 'second',
      rules: {
        pass: [
          { validator: phone1, trigger: 'blur' }
        ],
        checkPass: [
          { validator: phone, trigger: 'blur' }
        ],
        pass1: [
          { validator: pass, trigger: 'blur' }
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
  width: 940px;
  min-height: 500px;
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
