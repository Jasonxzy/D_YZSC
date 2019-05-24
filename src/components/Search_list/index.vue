<template>
  <div id="container">
    <!--顶部导航-->
    <TopNavigation/>
    <!--搜索部分-->
    <search/>
    <!--分类导航部分-->
    <ClassNav/>
    <span class="clear"></span>
    <!--首页轮播位置-->
    <div class="banner">
      <el-carousel>
        <el-carousel-item v-for="(item,index) in imglist" :key="index">
          <img :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <span class="clear"></span>
    <!--轮播结束-->
    <div id="Sequence">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="comp">综合排序</el-menu-item>
        <el-submenu index="2">
          <template slot="title">价格</template>
          <el-menu-item index="2-1" @click="Low_to_high">价格（由低到高）</el-menu-item>
          <el-menu-item index="2-2" @click="high_to_Low">价格（由高到低）</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">销量</template>
          <el-menu-item index="3-1">销量（由低到高）</el-menu-item>
          <el-menu-item index="3-2">销量（由高到低）</el-menu-item>
        </el-submenu>
        <li class="subTotal">
          <!--共多少个商品-->
          <strong class="total">每页：100条</strong>
        </li>
        <li class="page2">
          <span class="sl"><span id="Current_page">当前页：<ins>1</ins></span></span>
        </li>
      </el-menu>
      <div class="line">
        <!--单件商品-->
        <div v-for="i in commodity" :key="i" class="Products" :id="i.ginfoId">
          <router-link :to="'/purchase?goodsid='+i.ginfoId" class="photo" :id="i.ginfoId">
            <img :title="i.alt" :alt="i.alt" :src="api+i.ginfoId+'.jpg'" />
          </router-link>
          <div class="ms">
            <h5>
              <router-link to="/purchase">{{i.ginfoName}}</router-link>
            </h5>
            <P>{{i.ginfoSynopsis}}</P>
            <P class="spec">规格：{{i.ginfoSpecs}}</P>
          </div>
           <strong class="price">￥{{i.ginfoPrice}}</strong>
          <router-link :to="'/purchase?goodsid='+i.ginfoId" class="btn_minxi">立即购买</router-link>
        </div>
        <!--商品分页-->
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
        <!--商品分页结束-->
      </div>
    </div>
    <!--猜你喜欢-->
    <div id="sidebar">
      <div class="yCmsContentSlot">
        <h4 class="redTitle">猜你喜欢</h4>
        <ul class="likeProductList">
          <li v-for="i in guess" :key="i">
            <router-link :to="'/purchase?goodsid='+i.ginfoId">
              <img :src="api+i.ginfoId+'.jpg'" :alt="i.ginfoSynopsis"/>
            </router-link>
            <em>¥{{i.ginfoPrice}}</em>
            <strong>{{i.ginfoName}}</strong>
          </li>
        </ul>
      </div>
    </div>
    <span class="clear"></span>
    <!--底部部分&侧边导航部分-->
    <BottomNav/>
  </div>
</template>
<script>
import {guess} from 'api/request'
import {getLists} from 'api/request'
import {getListstow} from 'api/request'
import banner1 from './img/4e1ba6692b4dedcc9aefdf81441e7e0.jpg'
import banner2 from './img/-20190501134142.jpg'
import banner3 from './img/WechatIMG249.png'
import TopNavigation from '../public/TopNavigation.vue'
import search from '../public/search.vue'
import ClassNav from '../public/ClassNav.vue'
import BottomNav from '../public/BottomNavigation.vue'
// 商品
import img1 from './img/100000027_M.jpg'
// 猜你喜欢
import img11 from './img/100001442_M.jpg'
export default {
  components: {
    TopNavigation,
    search,
    ClassNav,
    BottomNav
  },
  data () {
    return {
      imglist: [banner1, banner2, banner3],
      activeIndex: '1',
      currentPage1: 1,
      commodity: [],
      guess: [],
      api: 'http://88ja9g.natappfree.cc/Canso/img/'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      let total = document.querySelector('.total')
      total.innerHTML = `每页：${val} 条`
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      let curpa = document.querySelector('#Current_page')
      curpa.innerHTML = `当前页：${val}`
    },
    //    价格：由低到高
    Low_to_high: function () {
      let Allprice = document.querySelectorAll('.price')
      let com = document.querySelectorAll('.Products')
      let a = null
      for (var i = 0; i < Allprice.length; i++) {
        for (var j = 0; j < i; j++) {
          if (Allprice[i].innerHTML < Allprice[j].innerHTML) {
          //   html排序
            a = com[i].innerHTML
            com[i].innerHTML = com[j].innerHTML
            com[j].innerHTML = a
            //  id排序
            a = com[i].id
            com[i].id = com[j].id
            com[j].id = a
          }
        }
      }
    },
    //    价格：由高到低
    high_to_Low: function () {
      let Allprice = document.querySelectorAll('.price')
      let com = document.querySelectorAll('.Products')
      let a = null
      console.log(Allprice.length)

      for (var i = 0; i < Allprice.length; i++) {
        for (var j = 0; j < i; j++) {
          if (Allprice[i].innerHTML > Allprice[j].innerHTML) {
            //   html排序
            a = com[i].innerHTML
            com[i].innerHTML = com[j].innerHTML
            com[j].innerHTML = a
            //   id排序
            a = com[i].id
            com[i].id = com[j].id
            com[j].id = a
          }
        }
      }
    },
    //    综合排序
    comp: function () {
      let com = document.querySelectorAll('.Products')
      let a = null
      for (var i = 0; i < com.length; i++) {
        for (var j = 0; j < i; j++) {
          if (com[i].id < com[j].id) {
            //   html排序
            a = com[i].innerHTML
            com[i].innerHTML = com[j].innerHTML
            com[j].innerHTML = a
            //   id排序
            a = com[i].id
            com[i].id = com[j].id
            com[j].id = a
          }
        }
      }
    }
  },
  //   获取数据
  mounted () {
    console.log()
    let data = {typeone: this.$route.query.typeone}
    console.log(data)
    getLists(data, (res) => {
      console.log('666')
      console.log(res.goodsinfo)
      console.log('666')
      this.commodity = res.goodsinfo
    })
    let da = {typetwo: this.$route.query.typetwo}
    console.log(da)
    getListstow(da, (res) => {
      console.log('7777')
      console.log(res)
      console.log('7777')
      this.commodity = res.goodsinfo
    })
    // 猜你喜欢
    guess((res) => {
      console.log('元祖西点')
      console.log(res)
      this.guess = res.goodsinfo
    })
  }
}
</script>
<style>
  body {
    background: #fff;
    background-color: #f9f9f9;
  }
  #container{
    width: 1200px;
    margin: 0 auto;
  }
  #Sequence {
    width: 990px;
    height: 39px;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    box-sizing: content-box;
    margin-top: 15px;
  }
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #C5023A;
    color: #000;
  }
  .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border-bottom: 2px solid #C5023A;
    color: #303133;
  }
  .el-menu--horizontal>.el-menu-item{
    height: 39px;
    line-height: 39px;
  }
  .el-menu.el-menu--horizontal{
    height: 39px;
  }
  .el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 39px;
    line-height: 39px;
  }
  .el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
    min-width: 120px;
  }
  /*单件商品部分*/
  .Products {
    padding: 20px 0;
    height: 150px;
    background: #fff;
    box-sizing: content-box;
    border-bottom: 1px solid #e1e1e1;
  }
  .Products .photo {
    margin: 0 22px 0 5px;
    float: left;
    width: 150px;
    height: 150px;
    display: inline;
  }
  a {
    color: #4f4f4f;
    text-decoration: none;
  }
  .Products .photo img {
    width: 100%;
    height: 100%;
    display: block;
  }
  img {
    border: none;
    vertical-align: middle;
  }
  .Products .ms {
    width: 450px;
    float: left;
    font-size: 14px;
    padding-right: 80px;
    padding-top: 15px;
  }
  .Products .ms h5 {
    height: 22px;
    line-height: 22px;
    overflow: hidden;
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 700;
  }
  .Products .ms p {
    line-height: 20px;
    color: #3c3c3c;
    height: 40px;
    overflow: hidden;
  }
  .Products .ms p.spec {
    margin-top: 20px;
  }
  strong {
    font-weight: 700;
  }
  .Products strong.price {
    float: left;
    width: 179px;
    font-size: 24px;
    color: #e93d6d;
    margin-top: 50px;
  }
  .Products strong.price span {
    font-size: 15px;
    font-weight: normal;
  }
  .Products .btn_minxi {
    margin: 50px 43px 0 0;
    float: right;
    width: 127px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background-color: #e50150;
    display: inline;
  }
  .Products .btn_minxi:hover {
    background-color: #fe0259;
  }
  .line{
    float: left;
    width: 990px;
  }
  #sidebar {
    float: right;
    width: 195px;
    background-color: #ffffff;
  }
  .redTitle {
    padding: 0 13px;
    height: 30px;
    line-height: 30px;
    position: relative;
    overflow: hidden;
    color: #fff;
    margin-bottom: 10px;
    background-color: #e50150;
  }
  h3, h4 {
    font-size: 14px;
  }
  .likeProductList {
    width: 170px;
    margin: 0 auto;
  }
  .likeProductList li {
    width: 170px;
    margin-bottom: 10px;
  }
  .likeProductList li a {
    color: #5c5c5c;
  }
  .likeProductList li a img {
    width: 170px;
    height: 170px;
    display: block;
  }
  .likeProductList li em {
    height: 27px;
    line-height: 27px;
    text-align: right;
    overflow: hidden;
    font-weight: bold;
    color: #e70050;
    display: block;
  }
  .likeProductList li strong {
    height: 36px;
    line-height: 18px;
    overflow: hidden;
    font-weight: normal;
    display: block;
  }
  .Products:hover{
    z-index: 999;
    background-color: #fcfcfc;
  }
  .el-menu.el-menu--horizontal{
    background-color: #f5f5f5;
  }
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    background-color: #f5f5f5;
  }
  .subTotal {
    float: left;
    font-size: 15px;
    height: 35px;
    line-height: 35px;
    margin-left: 400px;
    color: #4f4f4f;
  }
  b, strong {
    font-weight: 700;
  }
  .subTotal em {
    color: #e70050;
  }
  .page2 {
    float: right;
    position: relative;
    font-size: 14px;
    padding-top: 8px;
  }
  .page2 span {
    float: left;
    width: 88px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-size: 12px;
  }
  .page2 span ins {
    color: #e93d6d;
    text-decoration: none;
  }
  .line .block{
    text-align: center;
    margin: 35px 0;
  }
  .el-pager li{
    margin: 0 5px;
  }
  .el-pager li.active{
    color: #fff;
    background-color: #e50150;
  }
  .el-pager li:hover{
    color: #fff;
    background-color: #e50150;
  }
  .el-pagination button:hover {
    color: #fff;
    background-color: #e50150;
  }
  .el-pagination button:disabled {
    display: none;
  }
  .el-pagination__sizes .el-input .el-input__inner:hover {
    border-color: #e50150;
  }
  .el-input__inner:hover {
    border-color: #e50150;
  }
  .el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: #e50150;
    outline: 0;
  }
  .el-select .el-input__inner:focus {
    border-color: #e50150;
  }
  .el-select-dropdown__item.selected {
    color: #e50150;
  }
</style>
