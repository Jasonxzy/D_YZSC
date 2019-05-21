<template>
  <div class="Member-content">
    <ul>
      <dt><img src="./picture/icon1.gif">资料设置</dt>
      <li>更新个人信息</li>
      <li>修改密码</li>
      <li>收货地址</li>
      <li>增值税发票</li>
    </ul>
    <ul>
      <dt><img src="./picture/icon2.gif">账户查询资</dt>
      <li>我的电子卷</li>
      <li>我的积分</li>
    </ul>
    <ul>
      <dt><img src="./picture/icon3.gif">我的收藏</dt>
      <li>我的收藏夹</li>
    </ul>
    <ul>
      <dt><img src="./picture/icon4.gif">订单管理</dt>
      <li>订单历史记录</li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.Member-content{
  width: 1000px;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.clearfix:active{
  content: " ";
  display: inline-block;
  clear: both;
}
.Center-menu ul{
  margin: 0;
  padding: 0;
  margin-left: 10px;
}
.Center-menu ul li{
  list-style: none;
  font-size: 14px;
  line-height: 30px;
}
.Member-content ul{
  width: 400px;
  float: left;
  margin: 6px;
  height: 200px;
  border: 1px solid #cccccc;
}
.Member-content ul li{
  list-style: none;
  width: 100%;
  line-height: 30px;
  font-size: 14px;
  text-align: center;
}
.Center-menu  dd{
  font-size: 14px;
  line-height: 30px;
  margin-left: 40px;
  color: #4f4f4f;
  font-size: 12px;
}
.Member-content dt{
  border-bottom: 1px solid #000000;
  width: 160px;
  vertical-align: middle;
   padding-top: 30px;
   margin-left: 130px;
}
.Member-content ul img{
  vertical-align: middle;
  padding-right: 20px;
}
</style>
