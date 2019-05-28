<template>
  <div class="top">
  <div class="center">
    <div class="toplink">
      <!--微商城-->
      <div class="ewm">
        <span>
          <img src="./img/icon_phone.png"/>
           微商城
        </span>
        <div class="ewm_pic">
          <div class="cmsimage">
            <img src="./img/qrcode.jpg"/>
          </div>
        </div>
      </div>
      <!--官方微博-->
      <div class="weibo">
        <a href="http://weibo.com/gansofood">
        <img src="./img/icon_sina.png"/>
        <span>官方微博</span>
        </a>
      </div>
      <!--台湾元祖-->
      <div class="tw">
        <a href="http://www.ganso.com.tw/">
        <img src="./img/icon_tw.png"/>
        <span>台湾元祖</span>
        </a>
      </div>
    </div>
    <div class="userbar">
      <div class="wenhou">
        <span v-if="!token"><router-link to="/login">请登录</router-link></span>
        <span v-if="token"><router-link to="">用户{{token}}</router-link></span>
      </div>
      <ul>
        <li>
          <router-link to="/Member">会员中心</router-link>
        </li>
        <li>
          <router-link to="/ShoppingCart">购物车</router-link>
        </li>
        <li>
          <a>元祖门店</a>
        </li>
        <li>
          <router-link to="/HelpCenter">帮助中心</router-link>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return{}
  },
  computed: {
    token:function(){
      return this.$store.state.token
    }
  },
  // mounted () {
  //   var token = window.localStorage.getItem('token');
    
  // }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, ol{
    list-style-type: none;
  }
  body{
    font-size: 12px;
  }
  .top{
    height: 34px;
    position: relative;
    min-width: 1200px;
    margin: 0 auto;
    background-color: #eeeeee;
    z-index: 11500;
    width: 1200px;
    z-index: 100px;
  }
  .center{
    width: 1196px;
    margin: 0 auto;
  }
  .toplink{
    float: left;
    width: 400px;
    height: 34px;
    line-height: 34px;
  }
  .toplink .ewm{
    float: left;
    position: relative;
    padding-right: 8px;
  }
  .toplink .ewm span{
    padding-right: 15px;
    background: url(./img/icon_arrow2.png) no-repeat right center;
    cursor: pointer;
  }
  img {
    border: none;
    vertical-align: middle;
  }
  .toplink .ewm span>img {
    vertical-align: middle;
  }
  .ewm .ewm_pic {
    width: 140px;
    height: 140px;
    position: absolute;
    top: 34px;
    left: 0px;
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 15px #ccc;
    display: none;
  }
  .ewm .ewm_pic img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .ewm:hover .ewm_pic{
    display: block;
  }
  .toplink .weibo{
    float: left;
    margin-right: 9px;
    padding-left: 12px;
    display: inline;
  }
  .toplink .tw{
    float: left;
    margin-right: 9px;
    padding-left: 12px;
    display: inline;
  }
  .userbar{
    float: right;
    height: 34px;
    line-height: 34px;
    overflow: hidden;
  }
  .userbar .wenhou{
    float: left;
    padding-right: 13px;
    background: url(./img/1.gif) no-repeat right center;
  }
  .userbar ul{
    float: left;
  }
  .userbar ul li {
    float: left;
    background: url(./img/1.gif) no-repeat left center;
  }
  ul li{
    list-style-type: none;
    display: list-item;
  }
  a{
    color: #4f4f4f;
    text-decoration: none;
  }
  .userbar ul li a {
    padding: 0 14px;
    float: left;
  }
  a:hover{
    cursor: pointer;
    transition: color 200ms linear 0s,background-color 200ms linear 0s,border-color 200ms linear 0s;
    color: #e93d6d;
  }
</style>
