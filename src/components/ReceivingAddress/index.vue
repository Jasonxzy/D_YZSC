<template>
  <div class="address-box">
     <div class="address">
        <div class="Management clearfix">
          <span class="fl">管理你的收货地址</span>
         <router-link to="/ReceivingAddress/lickAddress" class="fr">添加地址</router-link>
        </div>
     </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        date1: '',
        delivery: false,
        type: []
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
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
  }
}
</script>
<style scoped>
.address-box{
  width: 1000px;
   margin:0 auto;
   border: 1px solid #cccccc;
}
.address{
  width: 900px;
  margin: auto;
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
.clearfix{
  clear: both;
}
.Management span{
  font-weight: bold;
}
.clearfix::after{
  content: " ";
  display: inline-block;
  clear: both;
}
.Management a{
  width: 100px;
  /* color: #df5451; */
  background:#df5451;
  color: white;
  text-align: center
}
.Management a:hover{
  background: #d72a28;
}
.list-nav{
  width: 900px;
  margin: auto;
  font-size: 12px;
  color: #cccccc;
}
.address-conter{
  width: 900px;
  margin: auto;
}
</style>
