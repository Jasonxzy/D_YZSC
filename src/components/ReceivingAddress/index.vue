<template>
  <div class="address-box">
     <div class="address">
        <div class="Management clearfix">
          <span class="fl">管理你的收货地址</span>
         <router-link to="/ReceivingAddress/lickAddress" class="fr">添加地址</router-link>
         <span class="clearfix"></span>
        </div>
        <span class="clearfix"></span>
        <div class="address-add">
          <div class="address-add-box">
              <div class="fl address-add-l">地址</div>
              <div class="fr address-add-l">操作</div>
              <span class="clearfix"></span>
          </div>
          <div>
            <span></span>
          </div>
        </div>
     </div>
  </div>
</template>
<script>
// import {addresslist} from 'api/request_wyl.js'
export default {

}
</script>
<style scoped>
.address-add{
  width: 800px;
  min-height: 500px;
}
.address-box{
  width: 940px;
   margin:0 auto;
   border: 1px solid #cccccc;
}
.address{
  width: 800px;
  margin: auto;
}
.Management{
  width: 800px;
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
.clearfix{
  clear: both;
}
.clearfix:after{
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
.address-add-box{
  height: 30px;
  line-height: 30px;
  border: 1px solid #cccccc;
}
.address-add-l{
  margin-left: 30px;
}
.address-add-l{
  margin-right: 30px;
}
</style>
