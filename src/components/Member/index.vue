<template>
  <div>
    <TopNavigation/>
    <!--导航banner-->
    <TopBanner/>
    <!--搜索部分-->
    <search/>
    <!--分类导航部分-->
    <ClassNav/>
    <div class="member-box">
      <div class="meber-nav">
        <span>主页</span>
        <span>></span>
        <span>我的账户</span>
      </div>
      <div class="clearfix">
        <div class="member fl">
          <div class="meber-xinxi">
            <p>欢迎光临元祖食品</p>
            <p>会员中心</p>
            <p>
              <span>ID</span>
              <span>15346852520</span>
            </p>
            <p>会员等级</p>
          </div>
          <div class="meber-list">
            <ul>
              <p>个人中心</p>
              <router-link to="/Member/MyInformation"><li>我的资料</li></router-link>
              <router-link  to="/Member/ChangePassword"><li>修改密码</li></router-link>
              <router-link  to="/Member/ReceivingAddress"><li>收货地址</li></router-link>
            </ul>
            <ul>
              <p>购物中心</p>
              <router-link  to="/ShoppingCart"><li>购物车</li></router-link>
              <router-link  to="/Member/Collectionlist"><li>订单列表</li></router-link>
              <router-link  to="/Member/Orderlist"><li>收藏列表</li></router-link>
            </ul>
          </div>
          <span class="clear"></span>
        </div>
        <div class="meber-right fr">
          <router-view></router-view>
        </div>
        <span class="clear"></span>
      </div>
    </div>
    <!--底部-->
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
<style>
.member-box{
  width: 1200px;
  margin: auto;
  background: rgb(249,249,249);
}
.meber-nav{
  height: 30px;
  font-size: 12px;
  line-height: 30px;
}
.meber-nav span{
  margin-left: 6px;
}
.meber-nav span:first-child{
  margin-left: 0;
}
.member{
  width: 260px;
  min-height: 500px;
  /*background: #e4004f;*/
}
  .meber-xinxi{
    font-size: 14px;
    line-height: 30px;
    margin-top: 20px;
    margin-left: 20px;
    padding-top: 10px;
  }
.meber-list{
  font-size: 12px;
  margin-top:20px;
  margin-left: 20px;
}
.meber-list p{
  height: 30px;
  line-height: 30px;
  background: rgb(241,241,241);
}
.meber-list li{
  height: 35px;
  line-height: 35px;
  padding-left: 50px;
}
.meber-right{
  width: 940px;
  min-height: 500px;
  /*background: #4F4F4F;*/
}
.clearfix{
  clear: both;
}
.clearfix:after{
  content: "";
  clear: both;
  display: inline-block;
}
.fl{
    float: left;
  }
.fr{float: right;
  }
</style>
