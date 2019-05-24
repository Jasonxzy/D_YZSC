<template>
  <div>
    <!--顶部导航-->
    <TopNavigation/>
    <!--导航banner-->
    <TopBanner/>
    <!--搜索部分-->
    <search/>
    <!--分类导航部分-->
    <ClassNav/>
    <!--内容页头部-->
    <div class="YZ-top fonts-12 allcolor">
      <router-link to="/" >主页</router-link>
      >
      <router-link to="/" >元祖商城</router-link>
      >
      <router-link to="" >冰品季</router-link>
      >
      <router-link to="" >冰品点心</router-link>
      >
      <router-link to="" >糯米拥抱冰淇淋</router-link>
    </div>
    <!--内容页内容部分-->
    <div class="YZ-bottom allcolor">
      <!--内容左边的商品详情-->
      <div class="Shopshow float-l allcolor">
        <!--商品详情-->
        <div class="Product">
          <!--图片展示和左右点击-->
          <div class="productleft float-l">
            <div class="shopimg">
              <vue-magnify
                :previewImg="min_img"
                :zoomImg="min_img">
              </vue-magnify>
            </div>
            <div class="puchase-carousel padding-T-20">
              <div class="puchase-carousel-left float-l">
                <img src="http://mall.ganso.com.cn/_ui/hepimages/left.gif" />
              </div>

              <div class="puchase-carousel-content float-l">
                <ul>
                  <li @mouseenter="lev(i,index)" v-for="(i,index) in imgList" :key="index">
                    <img :src="i.img"/>
                  </li>
                </ul>
              </div>
              <div class="puchase-carousel-right float-r">
                <img src="http://mall.ganso.com.cn/_ui/hepimages/right.gif" /> </div>
            </div>
          </div>
          <!--商品信息-->
          <div class="productright float-r fontf">
            <div class="shop-title fonts-16 lightgrey">雪麻糬</div>
            <div class="shop-name fonts-12 lightgray margin-B-15">糯米拥抱冰淇淋</div>
            <div class="shop-price margin-B-25 ">
              <div class="fonts-14 float-l lightgray">优惠价: </div>
              <div class="fonts-24 red2 float-l fontw padding-L-10">￥15.00</div>
            </div>
            <div class="shop-specifications margin-B-25 lightgray">
              <div class="fonts-14 float-l">选择规格: </div>
              <div class="fonts-12 float-l choose">
                <ul >
                  <li @click="changeBorder1(index)" v-for="(i,index) in selectorList" :key="index">
                    <a :class="{change:index == current2}" class=" a-hover-pink" href="javascript:void(0);">{{i.name}}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="shop-number margin-B-25">
              <div class="fonts-14 float-l shu lightgray">数量:</div>
              <ul><li>
                <el-input-number v-model="num8" controls-position="right" @change="handleChange"></el-input-number>
              </li></ul>
              <button class="buy fonts-20 float-l buypinkred"><router-link to="./ShoppingCart">立即购买</router-link></button>
              <button class="join fonts-20 float-l white joinred">
                <el-popover ref="popover2" placement="top-start" title="成功加入购物车" width="145" trigger="click"
                  content="">
                </el-popover>
                <el-button v-popover:popover2>加入购物车</el-button>
              </button>
             </div>
            <div class="shop-service fonts-12 margin-B-20">
              服务承诺：
              <img src="http://mall.ganso.com.cn/_ui/hepimages/00.gif"/>
              精选食材
              <img src="http://mall.ganso.com.cn/_ui/hepimages/00.gif"/>
              品质保证
              <img src="http://mall.ganso.com.cn/_ui/hepimages/00.gif"/>
              五星服务
              <img src="http://mall.ganso.com.cn/_ui/hepimages/00.gif"/>
              贴心宅配
            </div>
            <div class="shop-collection">
              <div class="Serial-number padding-L-10 lightgrey">商品编号：100000786</div>
              <a href="#"><img src="http://mall.ganso.com.cn/_ui/hepimages/icon_sc.gif" />
                <span class="float-r">收藏</span>
              </a>
            </div>
          </div>
        </div>
        <!--大图展示-->
        <div class="Products">
        <el-tabs v-model="activeName" @tab-click="handleClick" >
          <el-tab-pane label="商品介绍" name="first">
            <div class="ProductShow">
              <div  class="productshow-tabbody">
                <div class="productshow-tabbody-content">
                  <span>保冷包新旧交替中，随机出货，商品以实物为主</span>
                  <img src="http://pic.ganso.com.cn/description/100000770_1.jpg">
                  <img src="http://pic.ganso.com.cn/description/100000770_2.jpg">
                  <img src="http://pic.ganso.com.cn/description/100000770_3.jpg">
                  <img src="http://pic.ganso.com.cn/description/100000770_4.jpg">
                  <img src="http://pic.ganso.com.cn/description/100000770_5.jpg">
                  <img src="http://pic.ganso.com.cn/description/100000770_6.jpg">
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="商品评价" name="second">
            <div class="ProductShow2">
              <div  class="productshow-tabbody2">
                <div id="fontw1" class="productshow-tabbody-content2" style="display: block">
                  <div class="borderbottom">
                    <i class="header-icon el-icon-caret-right lightgray fontw fonts-12 float-l"></i>
                    <router-link to="#" @click.native="sas">欢迎您发表评论</router-link>
                    <div class="float-r">0/0评论</div>
                  </div>
                  <div class="borderbottom-content padding-T-20">
                    <ul>
                      <li v-for="(first, index) in evaluation" :key="index">
                        <p><a href="#" >用户ID:{{first.CId}}</a></p>
                        <p ><span >用户评论：{{first.CContent}}</span> </p>
                        <p><span>评论星级：{{first.CState}}</span></p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="fontw2" class="productshow-tabbody-content2 " style="display: none">
                  <div class="content2-title fonts-12 fontw">发表评论</div>
                  <div class="content2-published fonts-12 lightgrey">
                    <div class="float-l">请输入您的评论</div>
                    <div class="float-r">标有星号 (*) 的字段是必填字段</div>
                  </div>
                  <div class="content2-describe fonts-14">评论描述*</div>
                  <input type="text" class="comments"/>
                  <div class="content2-score">
                    <div class="block">
                      <span class="demonstration">您的评分 *:</span>
                      <el-rate v-model="value1"></el-rate>
                    </div>
                  </div>
                  <div class="content2-submit">
                    <button><router-link to="#" @click.native="ee">提交评论</router-link></button>
                  </div>
                  <div class="content2-return">
                    <i class="header-icon el-icon-caret-right lightgray fontw fonts-12 float-l padding-T-5">
                      <router-link to="#" @click.native="ee" class="float-r">返回评论</router-link>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        </div>
      </div>
      <!--内容右边的猜你喜欢-->
      <div class="Maylove float-r allcolor">
        <div class="Maylove-nav white deeppinkred margin-B-10 fonts-14 fontw">猜你喜欢</div>
        <ul>
          <li v-for="i in list" :key="i">
          <li v-for="(i,index) in list" :key="index">
            <a href="#"><img :src="i.img" :alt="i.name"/></a>
            <div class="love-money fontw fonts-12 red2">￥{{i.money}}</div>
            <div class="love-name gray">{{i.name}}</div>
          </li>
        </ul>
      </div>
      <span class="clear"></span>
     </div>
    <BottomNav/>
  </div>
</template>
<script>
import {getLists} from 'api/request_yms'
import img1 from '../public/img/100000027_M.jpg'
import img2 from '../public/img/100001236_M.jpg'
import img3 from '../public/img/100001239_M.jpg'
import iagms1 from './img/100000805_1.jpg'
import iagms2 from './img/100000805_L.jpg'
import iagms3 from './img/100000805_L2.jpg'
import TopNavigation from '../public/TopNavigation.vue'
import TopBanner from '../public/TopBanner.vue'
import search from '../public/search.vue'
import ClassNav from '../public/ClassNav.vue'
import BottomNav from '../public/BottomNavigation.vue'
export default {
  components: {
    TopNavigation,
    TopBanner,
    search,
    ClassNav,
    BottomNav
  },
  name: 'DetaiBanner',
  data () {
    return {
      //   handleMove: true,
      imgList: [
        {img: iagms1},
        {img: iagms2},
        {img: iagms3}
      ],
      min_img: iagms1,
      num8: 1,
      dialogVisible: false,
      activeName: 'first',
      value1: 3,
      value2: null,
      current2: 0,
      //        menu: ['蓝莓味', '草莓味', '芒果味'],
      index: 0,
      list: [
        {name: '甜蜜如心鲜奶蛋糕', img: img1, money: '238.00'},
        {name: '朵朵咖啡鲜奶蛋糕', img: img2, money: '258.00'},
        {name: '8号桃花扇鲜奶蛋糕', img: img3, money: '778.00'}
      ],
      selectorList: [
        {name: '巧克力'},
        {name: '奶油味'},
        {name: '仙女味'}
      ],
      evaluation: []
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
      //        console.log(tab, event)
    },
    son (item, idx) {
      this.index = idx
    },
    handleChange (value) {
//        console.log(value);
    },
    sas: function () {
      let fontw1 = document.querySelector('#fontw1')
      let fontw2 = document.querySelector('#fontw2')
      fontw1.style.display = 'none'
      fontw2.style.display = 'block'
    },
    ee: function () {
      let fontw1 = document.querySelector('#fontw1')
      let fontw2 = document.querySelector('#fontw2')
      fontw1.style.display = 'block'
      fontw2.style.display = 'none'
    },
    lev: function (i, index) {
      this.curren = index
      this.min_img = i.img
    },
//        console.log(value);
    changeBorder1: function (index) {
      this.current2 = index
      console.log(this.current2)
    }
  },
  // 获取数据
  mounted () {
    getLists((res) => {
      console.log('63232')
      console.log(res)
      // 用户评论
      this.evaluation = res.comment
    })
  }
}
</script>
<style lang="less"  scoped>
  .change{
    width: 100%!important;
    height: 100%!important;
    border: 2px solid red!important;
    color: #E93D6D;
  }
  a {
    color: #4F4F4F;
  }
  .YZ-top{
    width: 1199px;
    height: 45px;
    line-height: 45px;
    margin: 0 auto;
    a{
      /*color: yellow;*/
      &:hover{
        color:#E93D6D;
      }
    }
  }
  .YZ-bottom {
    width: 1199px;
    margin: 0 auto;
    .Shopshow {
      width: 991px;
      .Product {
        width: 991px;
        height: 600px;
        .productleft {
          width: 477px;
          .shopimg {
            width: 450px;
            height: 450px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .puchase-carousel {
            width: 415px;
            height: 69px;
            .puchase-carousel-left {
              width: 17px;
              height: 45px;
              margin: 0 10px;
            }
            .puchase-carousel-content {
              width: 360px;
              position: relative;
              overflow: hidden;
              display: inline;
              ul {
                float: left;
                li {
                  float: left;
                  width: 84px;
                  display: inline;
                  img {
                    width: 62px;
                    height: 62px;
                    padding: 1px;
                    &:hover{
                      border: 1px solid #C7023A;
                    }
                  }

                }
              }
            }
          }
        }
        .productright {
          width: 428px;
          height: 554px;
          margin-right: 40px;
          display: inline;
          .shop-title {
            height: 25px;
            line-height: 25px;
            font-weight: normal;
          }
          .shop-name {
            width: 100%;
          }
          .shop-price {
            width: 100%;
            height: 25px;
            line-height: 25px;
          }
          .shop-specifications {
            width: 100%;
            height: 30px;
            line-height: 25px;
            .choose {
              margin-left: 3px;
            }
            li {
              margin-right: 10px;
              margin-bottom: 5px;
              text-align: center;
              float: left;
              a {
                padding: 3px 15px;
                height: 21px;
                line-height: 21px;
                min-width: 53px;
                border: 1px solid #cccccc;
                font-size: 12px;
                box-sizing: content-box;
                &:hover {
                  color: #E93D6D;
                }
              }

            }
          }
          .shop-number {
            width: 100%;
            height: 35px;
            line-height: 25px;
            ul li {
              float: left;
              background: #fff;
              color: #AEAEAE;
              margin-right: 20px;
              line-height: 38px;
              height: 38px;
              /deep/.el-input-number{
                width: 65px;
                /deep/.el-input-number__decrease, .el-input-number__increase{
                  width: 25px;
                }
              }
              /deep/.el-input-number.is-controls-right .el-input__inner{
                padding-left: 8px;
                padding-right: 35px;
              }
              &:hover /deep/.el-input__inner{
                border:1px solid red;
              }
            }
            .buy {
              margin: 0 14px 0 0;
              width: 110px;
              height: 38px;
              line-height: 38px;
              text-align: center;
              border: 1px solid #d5014b;
              display: inline;
              a{
                color: #C70238
              }
              &:hover {
                color: black;
              }
            }
            .join {
              width: 150px;
              height: 38px;
              border: 0;
              line-height: 38px;
              padding-left: 20px;
              text-align: center;
              background-image: url(http://mall.ganso.com.cn/_ui/hepimages/icon_cart.gif);
              background-repeat: no-repeat;
              background-size: 17px 17px;
              background-position: 17px;
              /deep/.el-button {
                height: 37px;
                margin-top: -5px;
                background-color: #e4004f;
                font-size: 17px;
                border: none;
                color: white;
                padding: 0;
              }

              &:hover {
                background-color: #FE1B6A;
              }
              &:hover /deep/.el-button{
                background-color: #FE1B6A;
              }
            }
            .shu {
              letter-spacing: 5px;
            }

          }
          .shop-service {
            padding: 0 12px;
            line-height: 29px;
            color: #5a5a58;
            background-color: #f7f3e8;
            img {
              border: none;
              vertical-align: middle;
            }
          }
          .shop-collection {
            height: 20px;
            line-height: 20px;
            .Serial-number {
              float: left;
              margin-right: 30px;
              display: inline;
            }
            a {
              line-height: 20px;
              margin-right: 21px;
              cursor: pointer;
              float: left;
              &:hover {
                color: #E93D6D;
              }
            }
          }
        }
      }
      .Products {
        // deep 深度查询
        /deep/ .el-tabs__header {
          background-color: #999999;
        }
        /deep/ .el-tabs__item.is-active {
          color: white!important;
          background-color: #b6ab8f;
        }
        /deep/ .el-tabs__nav-wrap::after {
          height: 0;
        }
        /deep/ .el-tabs__active-bar {
          background-color: inherit;
        }
        /deep/ .el-tabs__item {
          color: white;
          width: 120px;
          text-align: center;
          padding: inherit;
          height: 30px;
          line-height: 30px;
        }
        /deep/.el-tabs__nav-wrap {
          height: 30px;
        }
        /deep/.el-tabs__nav {
          height: 30px;
        }
        /deep/#tab-first{
          line-height: 30px;
        }
        .ProductShow {
          .productshow-tabbody {
            width: 920px;
            margin: 0 auto;
            padding: 10px 0 20px 0;
            display: block;
            .productshow-tabbody-content {
              position: relative;
              padding: 10px 0 20px 0;
              text-align: left;
              span {
                font-size: medium;
                font-style: inherit;
                font-family: inherit;
                vertical-align: baseline;
                font-weight: 700;
              }
              img {
                max-width: 920px;
                /*margin: 0 auto;*/
                margin-left: 10px;
                /*消除图片缝隙：*/
                outline-width: 0px;
                vertical-align: top;
              }
            }
          }
        }
        .ProductShow2 {
          .productshow-tabbody2 {
            width: 920px;
            margin: 0 auto;
            padding: 20px 0 20px 0;
            display: block;

            .productshow-tabbody-content2 {
              position: relative;
              padding: 10px 0 20px 0;
              text-align: left;
              .borderbottom{
                width: 920px;
                height: 20px;
                border-bottom: 1px solid #a5a5a5;
                a{
                  float: left;
                }
                #disn{
                  width: 15px;
                }

              }
              .borderbottom-content{
                li{
                  padding-bottom: 20px;
                  p{
                    padding: 5px 0;
                    span{
                      padding-left: 20px;
                    }
                  }
                }
              }
            }
            /*隐藏部分*/
            .content2-title{
              width: 100%;
              height: 39px;
              line-height: 39px;
              margin: 0 0 20px 0;
              border-bottom: 1px solid #a5a5a5;
            }
            .content2-published{
              height: 17px;
              margin: 0 0 20px 0;
            }
            .content2-describe{
              height: 20px;
              line-height: 20px;
              margin: 12px 0 2px 0;
              font-weight: normal;
            }
            .comments{
              height: 50px;
              width: 100%;
              margin: 10px 0 10px 0;
            }
            .content2-score{
              height: 78px;
              width: 100%;
              .el-rate{
                margin-top: 20px;
                /deep/.el-rate__icon{
                  font-size: 3px;
                  margin-left: 30px;
                }
              }

            }
            .content2-submit{
              height: 42px;
              margin: 5px 0 20px 0;
              button{
                width: 52px;
                height: 40px;
                background-color: #E4004F;
                color: white;
                line-height: 40px;
                text-align: center;
                border: inherit;
                font-weight: bold;
                a{
                  color: white;
                }
              }
            }
            .content2-return{
              height: 30px;
              line-height: 30px;
              margin: 20px 0;
              border-top: 1px solid #a5a5a5;
              a{
                color: #808080;
              }
            }
          }
        }
      }
      /deep/.vue-magnify .zoom-box[data-v-0443e94f]{
        z-index:9999;
      }
    }
    .Maylove {
      width: 190px;
      .Maylove-nav {
        padding: 0 13px;
        height: 30px;
        line-height: 30px;
        position: relative;
        overflow: hidden;
      }
      ul {
        width: 170px;
        margin: 0 auto;
        li {
          width: 170px;
          margin-bottom: 10px;
          .love-money {
            height: 27px;
            line-height: 27px;
            text-align: right;
            overflow: hidden;
            display: block;
          }
          .love-name {
            height: 36px;
            line-height: 18px;
            overflow: hidden;
            font-weight: normal;
            display: block;
          }
          img {
            width: 170px;
            height: 170px;
            display: block;
          }
        }
      }
    }
  }
</style>
