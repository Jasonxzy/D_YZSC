<template>
  <div class="address-box">
     <div class="address">
        <div class="Management">
          <span>管理你的收货地址</span>
          <!-- <a class="fr">添加地址</a> -->
        </div>
        <div class="ReceivingAddress">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="收货人" prop="name">
              <el-input v-model="ruleForm.name" placeholder="收货人姓名"></el-input>
            </el-form-item>
            <el-form-item label="所在区域" >
              <City/>
            </el-form-item>
            <el-form-item prop="address" label="详细地址">
              <el-input v-model="ruleForm.address" placeholder="请输入你的详细地址"></el-input>
            </el-form-item>
            <el-form-item prop="Postal" label="邮政编码">
              <el-input v-model="ruleForm.Postal" placeholder="请输入你的邮政编码"></el-input>
            </el-form-item>
            <el-form-item prop="phone" label="手机号">
              <el-input v-model="ruleForm.phone" placeholder="请输入你的手机号"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="name">
              <select class="select">
                <option>男</option>
                <option>女</option>
              </select>
            </el-form-item>
            <el-form-item label="生日" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item prop="mailbox" label="邮箱">
              <el-input v-model="ruleForm.mailbox" placeholder="请输入你的邮政编码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" class="fl">保存地址</el-button>
              <el-button type="primary" @click="submitForm('ruleForm')" class="fl">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
     </div>
  </div>
</template>
<script>
import City from '@/components/ReceivingAddress/City.vue'
export default {
  data () {
   var address = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('地址不能为空'))
      } else {
        var reg = /[\u4e00-\u9fa5]/
      if (reg.test(value) === false) {
          return callback(new Error('请输入正确的地址'))
        } else {
          callback()
        }
      }
    }
    var name = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('名字不能为空'))
      } else {
        var reg = /[\u4e00-\u9fa5]/
        if (reg.test(value) === false) {
          return callback(new Error('名字必须是中文'))
        } else {
          callback()
        }
      }
    }
      var Postal = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮政编码不能为空'))
      } else {
        var reg = /\d{6}/
      if (reg.test(value) === false) {
          return callback(new Error('请输入真确的邮政编码'))
        } else {
          callback()
        }
      }
    }
    var phone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机不能为空'))
      } else {
        var reg = /0?(13|14|15|18)[0-9]{9}/
      if (reg.test(value) === false) {
          return callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      }
    }
    var mailbox = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      } else {
        var reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
      if (reg.test(value) === false) {
          return callback(new Error('请输入正确的邮箱'))
        } else {
          callback()
        }
      }
    }
    return {
     ruleForm: {
        name: '',
        date1: '',
        delivery: false,
        type: [],
        address: '',
        Postal: '',
        phone: '',
        mailbox: ''
      },
      rules: {
        name: [
          { required: true, validator: name, trigger: 'blur' },
          { min: 3, max: 5, message: '长度为 3 到 6 个字符', trigger: 'blur' }
        ],
        address: [
          { required: true, validator: address, trigger: 'blur' }
        ],
        Postal: [
          { required: true, validator: Postal, trigger: 'blur' },
          {  max: 6, message: '长度为 6 个字符', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        phone: [
          { required: true, validator: phone, trigger: 'blur' },
          { max: 11, message: '长度为 11 个字符', trigger: 'blur' }
        ],
        mailbox:[
          { required: true, validator: mailbox, trigger: 'blur' },
          // { max: 11, message: '长度为 11 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
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
  },
  components: {
    City 
  }
}
</script>
<style scoped>
.address-box{
  width: 1000px;
   margin:0 auto;
}
.address{
  border: 1px solid #cccccc;
}
.Management{
  width: 900px;
  border-bottom:1px solid #cccccc;
  font-size: 14px;
  height: 30px;
  margin:20px auto;
}
.Management a,span{
  display:inline-block;
  line-height: 30px;
}
.fr{
  float: right;
}
.fl{
  float: left;
}
.Management span{
  font-weight: bold;
}
.Management a{
  width: 120px;
  /* color: #df5451; */
  background:#df5451;
  color: white;
  text-align: center
}
.Management a:hover{
  background: #d72a28;
}
.ReceivingAddress{
  width: 400px;
  margin-top: 26px;
  margin-left: 60px;
}
.el-button{
  height: 36px;
  padding: 0;
  line-height: 36px;
  text-align: center;
  width: 80px;
  margin-left: 20px;
}
select{
  width: 90px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  color: #DCDFE6;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  margin-left: 10px;
}
select:first-child{
   margin-left: 0;
}
.select{
  width: 300px;
}
>>>.el-form-item__content{
  width: 300px;
  font-size: 12px;
}
>>>.el-form-item{
  margin-bottom: 11px;
}
>>>.el-input__inner{
  height: 32px;
  line-height: 32px;
}
>>>.el-col-11{
  width: 100%;
  margin-bottom: 0;
}
>>>.el-form-item__error{
  padding-top: 0px;
}
>>>.el-button{
  margin-top: 10px;
}
</style>
