<template>
  <nav class="menu">
    <div class="center">
      <ul class="menus">
        <li>
          <router-link to="/" title="元祖商城">元祖商城</router-link>
        </li>
        <li></li>
        <li>
          <router-link to="/BrandStory" title="品牌故事">品牌故事</router-link>
        </li>
        <li>
          <router-link to="/" title="元祖推荐">元祖推荐</router-link>
        </li>
        <li></li>
        <li></li>
      </ul>
      <span class="clear"></span>
      <div class="submenu">
        <div class="menutitle">
          <span class="empty-nav-item">全部商品分类</span>
          <ul class="nav">
            <li class="hui_bg">
              <strong>
                <span class="icon1 wizard0" style="background-position: 0px 0px;"></span>
                <router-link to="/SearchList">{{goneName1}}</router-link>
              </strong>
              <em v-for="i in CcnList1"><router-link to="/SearchList">{{i}}</router-link></em>
              </li>
            <li>
              <strong>
                <span class="icon1 wizard1" style="background-position: 0px 0px;"></span>
                <router-link to="/SearchList">{{goneName2}}</router-link>
              </strong>
              <em v-for="i in CcnList2"><router-link to="/SearchList">{{i.Ccn}}</router-link></em>
            </li>
            <li class="hui_bg">
              <strong>
                <span class="icon1 wizard2" style="background-position: 0px 0px;"></span>
                <router-link to="/SearchList">{{goneName3}}</router-link>
              </strong>
              <em v-for="i in CcnList3"><router-link to="/SearchList">{{i.Ccn}}</router-link></em>
            </li>
            <li>
              <strong>
                <span class="icon1 wizard3" style="background-position: 0px 0px;"></span>
                <router-link to="/SearchList">{{goneName4}}</router-link>
              </strong>
              <em v-for="i in CcnList4"><router-link to="/SearchList">{{i.Ccn}}</router-link></em>
            </li>
            <li class="hui_bg">
              <strong>
                <span class="icon1 wizard4" style="background-position: 0px 0px;"></span>
                <router-link to="/SearchList">{{goneName5}}</router-link>
              </strong>
              <em v-for="i in CcnList5"><router-link to="/SearchList">{{i.Ccn}}</router-link></em>
            </li>
            <li>
              <strong>
                <span class="icon1 wizard5" style="background-position: 0px 0px;"></span>
                <router-link to="/SearchList">{{goneName6}}</router-link>
              </strong>
              <em v-for="i in CcnList6"><router-link to="/SearchList">{{i.Ccn}}</router-link></em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import {getList} from 'api/request'
export default {
  data () {
    return {
      CommodityList: [
        {ActivityTitle: "元祖端午季"},
        {ActivityTitle: "元祖梦蛋糕"},
        {ActivityTitle: "冰品季"},
        {ActivityTitle: "元祖礼盒"},
        {ActivityTitle: "精致西点"},
        {ActivityTitle: "元祖卡卷"}
      ],
      //全部商品分类商品大标题
      goneName1:[],goneName2:[],goneName3:[],goneName4:[],goneName5:[],goneName6:[],
      CcnList1:[],
      CcnList2:[
        {Ccn:"母亲节专款"},
        {Ccn:"鲜奶蛋糕"},
        {Ccn:"巧克力蛋糕"},
        {Ccn:"慕思蛋糕"},
        {Ccn:"多层蛋糕"}
      ],
      CcnList3:[
        {Ccn:"冰淇淋蛋糕"},
        {Ccn:"冰品点心"}
      ],
      CcnList4:[
        {Ccn:"水果礼盒"},
        {Ccn:"糕点礼盒"}
      ],
      CcnList5:[
        {Ccn:"小慕思类"},
        {Ccn:"西点卷类"},
        {Ccn:"麻糬类"},
        {Ccn:"其他"}
      ],
      CcnList6:[
        {Ccn:"礼卡"},
        {Ccn:"水果券"},
        {Ccn:"西点券"},
        {Ccn:"蛋糕券"},
        {Ccn:"电子券"}
      ]
    }
  },
//   获取数据
  mounted () {
    // 全部商品分类下悬浮列表数据
    getList((res) => {
      console.log("111111")
//      console.log( res.goodsinfolist[0].goodstypetwos[0].gtwoName)
      this.goneName1 = res.goodsinfolist[0].goneName
      this.goneName2 = res.goodsinfolist[1].goneName
      this.goneName3 = res.goodsinfolist[2].goneName
      this.goneName4 = res.goodsinfolist[3].goneName
      this.goneName5 = res.goodsinfolist[4].goneName
      this.goneName6 = res.goodsinfolist[5].goneName
      for ( var i = 0; i < res.goodsinfolist[0].goodstypetwos.length;i++) {
        this.CcnList1.push(res.goodsinfolist[0].goodstypetwos[i].gtwoName)
//        console.log(this.CcnList1)
      }
      console.log(this.CcnList1)
    })
  }
}
</script>
<style>
  .menu{
    height: 40px;
    min-width: 1200px;
    margin: 0 auto;
    position: relative;
    background-color: #ffffff;
    border-bottom: 2px solid #e4004f;
    width: 1200px;
  }
  .menu .center{
    position: relative;
  }
  .center {
    width: 1196px;
    margin: 0 auto;
  }
  .center .menus{
    float: left;
    padding-left: 215px;
  }
  .menus li{
    float: left;
    background: url(./img/1.gif) no-repeat right center;
  }
  .menus li a{
    float: left;
    width: 117px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
  }
  .menus li a:hover{
    color: #e93d6d;
  }
  a {
    color: #4f4f4f;
    text-decoration: none;
    background-color: transparent;
  }
  .submenu{
    max-height: 478px;
    overflow: hidden;
    width: 225px;
    position: absolute;
    top: 0px;
    left: -2px;
    z-index: 999;
  }
  .submenu .menutitle{
    overflow: hidden;
    cursor: pointer;
    background-color: #e9004f;
    text-align: center;
  }
  .empty-nav-item{
    color: #FFFFFF;
    height: 40px;
    font-size: 16px;
    font-weight: normal;
    line-height: 40px;
  }
  .submenu .menutitle .nav {
    background-color: #ffffff;
    text-align: left;
    display: none;
  }
  .submenu .menutitle .nav li.hui_bg {
    background-color: #eeeeee;
  }
  .submenu .menutitle .nav li {
    padding: 10px 0 9px 34px;
    position: relative;
  }
  .submenu .menutitle .nav li strong {
    height: 27px;
    line-height: 27px;
    overflow: hidden;
    font-size: 13px;
    font-weight: normal;
    display: block;
  }
  .submenu .wizard0{
    background-image: url('./img/-.png');
    background-size: 22px 22px;
  }
  .submenu .wizard1{
    background-image: url('./img/-Much-.png');
  }
  .submenu .wizard2{
    background-image: url('./img/-.jpg');
    background-size: 22px 22px;
  }
  .submenu .wizard3{
    background-image: url('./img/-1.png');
    background-size: 22px 22px;
  }
  .submenu .wizard4{
    background-image: url('./img/-2.png');
    background-size: 22px 22px;
  }
  .submenu .wizard5{
    background-image: url('./img/-3.png');
    background-size: 22px 22px;
  }
  .submenu .menutitle .nav li span.icon1 {
    background-position: 0px 6px;
  }
  .submenu .menutitle .nav li a {
    line-height: 20px;
    display: inline-block;
    color: #6b6b6b;
    margin-right: 5px;
  }
  .submenu:hover .nav{
    display: block;
  }
  .submenu .menutitle .nav li a:hover {
    color: #e70050;
  }
  .submenu .menutitle .nav li span {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 15px;
    left: 6px;
  }

</style>
