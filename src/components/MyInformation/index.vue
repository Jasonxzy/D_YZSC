<template>
  <div class="information">
    <div class="information-box">
      <span>我的资料</span>
    </div>
    <div class="information-list">
      <ul>
        <li>姓名：<span>1008612</span></li>
        <li>生日：<span>196656554</span></li>
        <li>电子邮箱：<span>154544qq@.com</span></li>
        <li>手机号：<span>112</span></li>
        <li>推荐人手机<span>110</span></li>
      </ul>
    </div>
    <span class="clear"></span>
    <div class="information-menu">
      <span>更改你的密码</span>
      <span>更新个人详细信息</span>
      <span>更新你的电子邮箱</span>
      <span>更新你的手机号</span>
    </div>
    <span class="clear"></span>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.information{
  width: 940px;
  min-height: 500px;
  border: 1px solid #cccccc;
}
.information-box{
  width: 800px;
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
.information span{
  font-weight: bold;
  font-size: 14px;
  display:inline-block;
  line-height: 30px;
}
.information-list{
  width: 800px;
  margin: auto;
  line-height: 30px;
}
.information-list span{
  font-weight: 300
}
.information-list li:first-child{
  margin-top: 10px;
}
.information-menu{
  width: 900px;
  margin:auto;
  margin-top: 10px;
}
.information-menu span{
  display: inline-block;
  font-size: 12px;
  font-weight: 100;
  width: 120px;
  background: #cccccc;
  text-align: center;
  line-height: 30px;
  height: 30px;
  margin: 0;
}
.information-menu span:first-child{
  margin-left: 56px;
}
.information-menu span:hover{
  background: red;
  color:white;
}
</style>
