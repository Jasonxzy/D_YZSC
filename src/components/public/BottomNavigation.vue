<template>
  <div class="footer">
    <footer id="footer">
      <div class="center">
        <img class="center" src="./img/footer.jpg" />
        <span class="clear"></span>
        <P>

          版权所有 @ 2015 上海元祖梦果子股份有限公司 沪ICP备17013537号
          <a href="#" style="color: #535353;">
            <img src="./img/organ.png">
            沪公网安备 31011802001203号
          </a>
        </P>
        <p>
          <a href="#">
            <img src="./img/5.jpg" style="width: 260px"/>
          </a>
        </p>
      </div>
    </footer>
    <div id="FloatBar">
      <ul>
        <li id="btn_backtop">
          <a href="#">
            <span></span>
            <em>返回顶部</em>
          </a>
        </li>
        <li id="btn_hd">
          <a href="#">
            <span></span>
            <em>最新活动</em>
          </a>
        </li>
        <li id="btn_cart">
          <router-link to="/ShoppingCart">
            <span></span>
            <strong>购物车</strong>
            <ins class="count">0</ins>
          </router-link>
        </li>
        <li id="btn_sc">
          <router-link to="/Member/Orderlist">
            <span></span>
            <em>我的收藏</em>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
  #footer {
    min-width: 1200px;
    margin: 25px auto 0px auto;
    padding-bottom: 50px;
    background-color: #ffffff;
    border-top: 7px solid #de5251;
    width: 1200px;
  }
  .center{
    width: 1196px;
    margin: 0 auto;
  }
  #footer div.center>img {
    margin: 20px 0;
  }
  img {
    border: none;
    vertical-align: middle;
  }
  #footer p {
    line-height: 31px;
    text-align: center;
    color: #535353;
    margin-bottom: 10px;
  }
  #FloatBar {
    width: 37px;
    height: 100%;
    position: fixed;
    top: 0px;
    right: 0px;
    background-color: #444851;
    z-index: 55500;
  }
  #FloatBar ul{
    padding-top: 237px;
    width: 37px;
  }
  #FloatBar ul li {
    width: 37px;
    float: left;
    position: relative;
    border-right: 1px solid #444851;
    border-bottom: 1px solid #444851;
    background-color: #30343d;
  }
  a {
    color: #4f4f4f;
  }
  #FloatBar ul li#btn_backtop span {
    background-position: left top;
  }
  #FloatBar ul li span {
    width: 34px;
    height: 36px;
    position: relative;
    background: url(./img/iconlist.png) no-repeat left top;
    display: block;
    z-index: 1500;
  }
  i, em, address {
    font-style: normal;
  }
  #FloatBar ul li em {
    width: 90px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    position: absolute;
    color: #fff;
    top: 0px;
    right: -96px;
    background-color: #ef285f;
    transition: All 0.4s ease-in-out;
    -webkit-transition: All 0.4s ease-in-out;
    -moz-transition: All 0.4s ease-in-out;
    -o-transition: All 0.4s ease-in-out;
  }
  #FloatBar ul li#btn_hd span {
    line-height: 36px;
    background-position: 0px -37px;
  }
  #FloatBar ul li#btn_cart {
    height: 139px;
    background-color: #31353e;
  }
  #FloatBar ul li#btn_cart span {
    height: 30px;
    background-position: 0px -179px;
  }
  #FloatBar ul li#btn_cart strong {
    padding: 7px 12px;
    width: 16px;
    font-size: 14px;
    font-weight: normal;
    color: #fff;
    display: block;
  }
  #FloatBar ul li#btn_cart ins {
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    margin: 0 auto;
    background-color: #d02631;
    text-decoration: none;
    border-radius: 10px;
    display: block;
  }
  #FloatBar ul li#btn_sc span {
    background-position: 0px -74px;
  }
  #btn_backtop:hover em{
    right: 36px;
  }
  #btn_hd:hover em{
    right: 36px;
  }
  #FloatBar ul li#btn_cart:hover{
    background-color: #e4004f;
  }
  #FloatBar ul li#btn_cart:hover ins{
    background-color: #fff;
    color: #cf2532;
  }
  #btn_sc:hover em{
    right: 36px;
  }
  #btn_backtop:hover{
    background-color: #e4004f;
  }
  #btn_hd:hover{
    background-color: #E4004F;
  }
  #btn_sc:hover{
    background-color: #E4004F;
  }
</style>
