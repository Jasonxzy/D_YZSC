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
                <router-link :to="'/SearchList?typeone='+goneId1.goneId">{{goneName1}}</router-link>
              </strong>
              <em v-for="i in CcnList1" :key="i"><router-link :to="'/SearchList?typetwo='+i.gtwoId">{{i.gtwoName}}</router-link></em>
              </li>
            <li>
              <strong>
                <span class="icon1 wizard1" style="background-position: 0px 0px;"></span>
                <router-link :to="'/SearchList?typeone='+goneId2.goneId">{{goneName2}}</router-link>
              </strong>
              <em v-for="i in CcnList2" :key="i"><router-link :to="'/SearchList?typetwo='+i.gtwoId">{{i.gtwoName}}</router-link></em>
            </li>
            <li class="hui_bg">
              <strong>
                <span class="icon1 wizard2" style="background-position: 0px 0px;"></span>
                <router-link :to="'/SearchList?typeone='+goneId3.goneId">{{goneName3}}</router-link>
              </strong>
              <em v-for="i in CcnList3" :key="i"><router-link :to="'/SearchList?typetwo='+i.gtwoId">{{i.gtwoName}}</router-link></em>
            </li>
            <li>
              <strong>
                <span class="icon1 wizard3" style="background-position: 0px 0px;"></span>
                <router-link :to="'/SearchList?typeone='+goneId4.goneId">{{goneName4}}</router-link>
              </strong>
              <em v-for="i in CcnList4" :key="i"><router-link :to="'/SearchList?typetwo='+i.gtwoId">{{i.gtwoName}}</router-link></em>
            </li>
            <li class="hui_bg">
              <strong>
                <span class="icon1 wizard4" style="background-position: 0px 0px;"></span>
                <router-link :to="'/SearchList?typeone='+goneId5.goneId">{{goneName5}}</router-link>
              </strong>
              <em v-for="i in CcnList5" :key="i"><router-link :to="'/SearchList?typetwo='+i.gtwoId">{{i.gtwoName}}</router-link></em>
            </li>
            <li>
              <strong>
                <span class="icon1 wizard5" style="background-position: 0px 0px;"></span>
                <router-link :to="'/SearchList?typeone='+goneId6.goneId">{{goneName6}}</router-link>
              </strong>
              <em v-for="i in CcnList6" :key="i"><router-link :to="'/SearchList?typetwo='+i.gtwoId">{{i.gtwoName}}</router-link></em>
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
      goneId1: [],
      goneId2: [],
      goneId3: [],
      goneId4: [],
      goneId5: [],
      goneId6: [],
      // 二级商品id
      // 全部商品分类商品大标题
      goneName1: [],
      goneName2: [],
      goneName3: [],
      goneName4: [],
      goneName5: [],
      goneName6: [],
      // 全部商品分类商品大标题下面小标题循环
      CcnList1: [],
      CcnList2: [],
      CcnList3: [],
      CcnList4: [],
      CcnList5: [],
      CcnList6: []
    }
  },
  //   获取数据
  mounted () {
    // 全部商品分类下悬浮列表数据
    getList((res) => {
      console.log(res)
      this.goneName1 = res.goodsinfolist[0].goneName
      this.goneId1 = res.goodsinfolist[0]
      this.goneName2 = res.goodsinfolist[1].goneName
      this.goneId2 = res.goodsinfolist[1]
      this.goneName3 = res.goodsinfolist[2].goneName
      this.goneId3 = res.goodsinfolist[2]
      this.goneName4 = res.goodsinfolist[3].goneName
      this.goneId4 = res.goodsinfolist[3]
      this.goneName5 = res.goodsinfolist[4].goneName
      this.goneId5 = res.goodsinfolist[4]
      this.goneName6 = res.goodsinfolist[5].goneName
      this.goneId6 = res.goodsinfolist[5]
      // 第一个
      for (var i = 0; i < res.goodsinfolist[0].goodstypetwos.length; i++) {
        this.CcnList1.push(res.goodsinfolist[0].goodstypetwos[i].gtwoName)
      }
      //      console.log(this.CcnList1)
      // 第二个
      for (var a = 0; a < res.goodsinfolist[1].goodstypetwos.length; a++) {
        this.CcnList2.push(res.goodsinfolist[1].goodstypetwos[a].gtwoName)
      }
      //      console.log(this.CcnList2)
      // 第三个
      for (var b = 0; b < res.goodsinfolist[2].goodstypetwos.length; b++) {
        this.CcnList3.push(res.goodsinfolist[2].goodstypetwos[b].gtwoName)
      }
      //      console.log(this.CcnList3)
      // 第四个
      for (var c = 0; c < res.goodsinfolist[3].goodstypetwos.length; c++) {
        this.CcnList4.push(res.goodsinfolist[3].goodstypetwos[c].gtwoName)
      }
      // console.log(this.CcnList4)
      // 第五个
      for (var d = 0; d < res.goodsinfolist[4].goodstypetwos.length; d++) {
        this.CcnList5.push(res.goodsinfolist[4].goodstypetwos[d].gtwoName)
      }
      // console.log(this.CcnList5)
      // 第六个
      for (var e = 0; e < res.goodsinfolist[5].goodstypetwos.length; e++) {
        this.CcnList6.push(res.goodsinfolist[5].goodstypetwos[e].gtwoName)
      }
      // console.log(this.CcnList6)
      this.CcnList1 = res.goodsinfolist[0].goodstypetwos
      // 第二个
      this.CcnList2 = res.goodsinfolist[1].goodstypetwos
      // 第三个
      this.CcnList3 = res.goodsinfolist[2].goodstypetwos
      // 第四个
      this.CcnList4 = res.goodsinfolist[3].goodstypetwos
      // 第五个
      this.CcnList5 = res.goodsinfolist[4].goodstypetwos
      // 第六个
      this.CcnList6 = res.goodsinfolist[5].goodstypetwos
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
