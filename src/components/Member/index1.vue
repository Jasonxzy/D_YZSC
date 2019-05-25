<template>
<div>
   <TopNavigation/>
    <!--导航banner-->
    <TopBanner/>
    <!--搜索部分-->
    <search/>
    <!--分类导航部分-->
    <ClassNav/>
  <div class="Member-Center">
      <div class="nav-top">
          <a>主页</a>
          <span> > </span>
          <span>我的账户</span>
      </div>
      <div class="Member clearfix">
          <div class="Center-menu fl">
            <ul>
              <li>欢迎光临元祖食品店</li>
              <li>会员中心</li>
              <li>ID:<span>15346852520</span></li>
              <li>会员等级</li>
            </ul>
            <dl>
              <dt>个人中心</dt>
             <router-link  to="/Member/MyInformation"><dd>我的资料</dd></router-link>
              <router-link  to="/Member/ChangePassword"><dd>修改密码</dd></router-link>
              <router-link  to="/Member/ReceivingAddress"><dd>收货地址</dd></router-link>
            </dl>
            <dl class="margin-T-20">
              <router-link  to="/ShoppingCart"><dd>购物车</dd></router-link>
              <router-link  to="/Member/Collectionlist"><dd>订单列表</dd></router-link>
              <router-link  to="/Member/Orderlist"><dd>收藏列表</dd></router-link>
            </dl>
          </div>
          <div class="Member-content fr">
            <router-view></router-view>
            <!-- <router-view></router-view> -->
          </div>
          <span class="clear"></span>
      </div>
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
html,body{ overflow-y:scroll;} 
html,body{ overflow:scroll; min-height:101%;} 
html{ overflow:-moz-scrollbars-vertical;} 
.Member-Center{
  width: 1200px;
  margin: auto;
}
.nav-top{
  font-size: 14px;
}
.Member{
  width: 1200px;
  margin-top: 20px;
}
.Center-menu{
  width: 200px;
}
.Member-content{
  width: 1000px;
  /* border: 1px solid #cccccc */
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
.Center-menu  dd{
  font-size: 14px;
  line-height: 30px;
  margin-left: 40px;
  color: #4f4f4f;
  font-size: 12px;
}
</style>
