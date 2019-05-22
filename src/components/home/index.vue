<template>
  <div class="home">
    <!--顶部导航-->
    <TopNavigation/>
    <!--导航banner-->
    <TopBanner/>
    <!--搜索部分-->
    <search/>
    <!--分类导航部分-->
    <ClassNav/>
    <!--首页轮播位置-->
    <div class="banner">
      <el-carousel>
        <el-carousel-item v-for="(item,index) in imglist" :key="index">
          <img :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--轮播结束-->
    <!--公告部分-->
    <div id="Floatingbar">
      <div id="GongGao">
        <div class="huiTitle">
          <em>元祖公告</em>
        </div>
        <ul class="NewsList">
          <li v-for="i in NoticeList">
            <router-link to="/Notice" :title="i.title">{{i.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!--公告结束-->
    <!--热门商品部分-->
    <div id="hot">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="元祖新品" name="first">
          <div class="Tab_nr">
            <ul class="ProductList3">
              <li v-for="i in prodlist">
                <router-link to="/purchase" class="photo">
                  <img :title="i.title" :alt="i.title" :src="i.img"/>
                </router-link>
                <strong>{{i.name}}</strong>
                <em> ¥{{i.monery}}</em>
              </li>
            </ul>
            <span class="clear"></span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="热销商品" name="second">
          <div class="Tab_nr">
            <ul class="ProductList3">
              <li v-for="i in Selllist">
                <router-link to="/purchase" class="photo">
                  <img :title="i.title" :alt="i.title" :src="i.img"/>
                </router-link>
                <strong>{{i.name}}</strong>
                <em> ¥{{i.monery}}</em>
              </li>
            </ul>
            <span class="clear"></span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="节庆民俗" name="third">
          <div class="Tab_nr">
            <ul class="ProductList3">
              <li v-for="i in folklist">
                <router-link to="/purchase" class="photo">
                  <img :title="i.title" :alt="i.title" :src="i.img"/>
                </router-link>
                <strong>{{i.name}}</strong>
                <em> ¥{{i.monery}}</em>
              </li>
            </ul>
            <span class="clear"></span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="元祖卡券" name="fourth">
          <div class="Tab_nr">
            <ul class="ProductList3">
              <li v-for="i in Cardlist">
                <router-link to="/purchase" class="photo">
                  <img :title="i.title" :alt="i.title" :src="i.img"/>
                </router-link>
                <strong>{{i.name}}</strong>
                <em> ¥{{i.monery}}</em>
              </li>
            </ul>
            <span class="clear"></span>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!--热门商品部分结束-->
    <!--分类商品部分-->
    <div class="column">
      <h3 class="PartTitle">
        <img class="icon" src="./img/-Much-.png" />
        MUCH蛋糕
      </h3>
      <span class="clear"></span>
      <div class="yCmsComponent ad316x367">
        <div class="disp-img">
          <div class="thumb">
            <img src="./img/-MUCH-.jpg"/>
            <span class="guang"></span>
          </div>
        </div>
      </div>
      <ul class="ProductList">
        <li v-for="i in Cakelist">
          <router-link to="/purchase" class="photo">
            <img :title="i.title" :alt="i.title" :src="i.img"/>
            <strong>{{i.name}}</strong>
            <span>{{i.describe}}</span>
            <em>{{i.monery}}</em>
          </router-link>
        </li>
      </ul>
    </div>
    <span class="clear"></span>
    <!--分类商品结束-->
    <div class="column">
      <h3 class="PartTitle">
        <img class="icon" src="./img/-.png" />
        元祖礼盒
      </h3>
      <span class="clear"></span>
      <div class="yCmsComponent ad316x367">
        <div class="disp-img">
          <div class="thumb">
            <img src="./img/-1.jpg"/>
            <span class="guang"></span>
          </div>
        </div>
      </div>
      <ul class="ProductList">
        <li v-for="i in GiftBoxlist">
          <router-link to="/purchase" class="photo">
            <img :title="i.title" :alt="i.title" :src="i.img"/>
            <strong>{{i.name}}</strong>
            <span>{{i.describe}}</span>
            <em>{{i.monery}}</em>
          </router-link>
        </li>
      </ul>
    </div>
    <span class="clear"></span>
    <!--分类商品结束-->
    <div class="column">
      <h3 class="PartTitle">
        <img class="icon" src="./img/-2.png" />
        精致西点
      </h3>
      <span class="clear"></span>
      <div class="yCmsComponent ad316x367">
        <div class="disp-img">
          <div class="thumb">
            <img src="./img/49730.jpg"/>
            <span class="guang"></span>
          </div>
        </div>
      </div>
      <ul class="ProductList">
        <li v-for="i in westPointlist">
          <router-link to="/purchase" class="photo">
            <img :title="i.title" :alt="i.title" :src="i.img"/>
            <strong>{{i.name}}</strong>
            <span>{{i.describe}}</span>
            <em>{{i.monery}}</em>
          </router-link>
        </li>
      </ul>
    </div>
    <span class="clear"></span>
    <!--分类商品结束-->
    <div id="Activity">
      <h3 class="PartTitle">精选活动 </h3>
      <span class="clear"></span>
      <ul class="imgList">
        <li v-for="i in ActivitiesList">
          <div class="simple_disp-img">
            <router-link to="/purchase">
              <img :src="i.img"/>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <!--底部部分&侧边导航部分-->
    <BottomNav/>
  </div>
</template>
<script>
import {getList,getList2} from 'api/request'
import banner1 from './img/4e1ba6692b4dedcc9aefdf81441e7e0.jpg'
import banner2 from './img/-20190501134142.jpg'
import banner3 from './img/WechatIMG249.png'
import TopNavigation from '../public/TopNavigation.vue'
import TopBanner from '../public/TopBanner.vue'
import search from '../public/search.vue'
import ClassNav from '../public/ClassNav.vue'
import BottomNav from '../public/BottomNavigation.vue'
import img1 from './img/100001422_M.jpg'
import img2 from './img/100000234_M.jpg'
import img3 from './img/100001174_M.jpg'
import img4 from './img/600000224_M.jpg'
//   蛋糕 图片
import img5 from './img/100000805_M.jpg'
//  礼盒 图片
import img6 from './img/100001362_M.jpg'
//  西点 图片
import img7 from './img/100000235_M.jpg'
//  精选活动 图片
import img8 from './img/49731.jpg'
import img9 from './img/49732.jpg'
import img10 from './img/49733.jpg'
export default {
  components: {
    TopNavigation,
    TopBanner,
    search,
    ClassNav,
    BottomNav
  },
  data () {
    return {
      imglist: [banner1, banner2, banner3],
      activeName: 'first',
//      banner下面tab切换
      prodlist: [
        {name: "溪云初起巧克力蛋糕",title: "8号溪云初起巧克力蛋糕",img: img1, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "8号溪云初起巧克力蛋糕",img: img1, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "8号溪云初起巧克力蛋糕",img: img1, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "8号溪云初起巧克力蛋糕",img: img1, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "8号溪云初起巧克力蛋糕",img: img1, monery: "258.00"}
      ],
      Selllist: [
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img2, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img2, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img2, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img2, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img2, monery: "258.00"}
      ],
      folklist: [
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img3, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img3, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img3, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img3, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img3, monery: "258.00"}
      ],
      Cardlist: [
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img4, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img4, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img4, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img4, monery: "258.00"},
        {name: "溪云初起巧克力蛋糕",title: "6号朝羽鲜奶蛋糕",img: img4, monery: "258.00"}
      ],
      //      MUCH蛋糕
      Cakelist: [
        {name: "朝羽鲜奶蛋糕",title: "6号朝羽鲜奶蛋糕",describe: "寓意良辰美景， 幸福的时刻", img: img5, monery: "258.00"},
        {name: "朝羽鲜奶蛋糕",title: "6号朝羽鲜奶蛋糕",describe: "寓意良辰美景， 幸福的时刻", img: img5, monery: "258.00"},
        {name: "朝羽鲜奶蛋糕",title: "6号朝羽鲜奶蛋糕",describe: "寓意良辰美景， 幸福的时刻", img: img5, monery: "258.00"}
      ],
      //      元祖礼盒
      GiftBoxlist: [
        {name: "藤椒牛肉粽",title: "藤椒牛肉粽竹篮版",describe: "麻辣爽口，料多馅足，优选牛柳", img: img6, monery: "258.00"},
        {name: "藤椒牛肉粽",title: "藤椒牛肉粽竹篮版",describe: "麻辣爽口，料多馅足，优选牛柳", img: img6, monery: "258.00"},
        {name: "藤椒牛肉粽",title: "藤椒牛肉粽竹篮版",describe: "麻辣爽口，料多馅足，优选牛柳", img: img6, monery: "258.00"}
      ],
      //      元祖礼盒
      westPointlist: [
        {name: "西点卷",title: "小西点虎皮卷",describe: "卷起来的幸福", img: img7, monery: "258.00"},
        {name: "西点卷",title: "小西点虎皮卷",describe: "卷起来的幸福", img: img7, monery: "258.00"},
        {name: "西点卷",title: "小西点虎皮卷",describe: "卷起来的幸福", img: img7, monery: "258.00"}
      ],
      //    精选活动
      ActivitiesList: [
        {img: img8},
        {img: img9},
        {img: img10}
      ],
      //    公告
      NoticeList: [
        {name: "【公告】18年中秋月饼销毁",title: "【公告】18年中秋月饼销毁"},
        {name: "【公告】18年中秋月饼销毁",title: "【公告】18年中秋月饼销毁"},
        {name: "【公告】18年中秋月饼销毁",title: "【公告】18年中秋月饼销毁"},
        {name: "【公告】18年中秋月饼销毁",title: "【公告】18年中秋月饼销毁"}
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  },
  // 获取数据
  mounted () {
    getList({},(res) => {
      console.log(res.data)
      //      this.goodsList = data.lists
    }),
    getList2({},(res) => {
      console.log(res.data)
      //      this.goodsList = data.lists
    })
  }
}
</script>
<style>
  body {
    background-color: #f9f9f9;
  }
  .banner{
    width: 1200px;
    height: 436px;
    margin: 0 auto;
  }
  .el-carousel__container {
    position: relative;
    height: 463px;
    width: 100%;
  }
  .el-carousel__indicators--horizontal{
    bottom: 34px;
  }
  .el-carousel__container button{
    display: none;
  }
  #Floatingbar{
    width: 190px;
    height: 438px;
    position: absolute;
    left: 50%;
    margin: -436px 0px 0px 412px;
    background-color: #ffffff;
    z-index: 2;
  }
  #GongGao {
    width: 190px;
    height: 100%;
    overflow: hidden;
  }
  .huiTitle{
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    padding: 0 10px;
    background-color: #efefef;
    display: block;
  }
  .huiTitle em {
    font-size: 15px;
    font-weight: normal;
    color: #777777;
    padding-left: 21px;
    background: url(./img/icon_ld.png) no-repeat left center;
  }
  i, em, address {
    font-style: normal;
  }
  .NewsList {
    margin: 0 18px;
    padding-top: 5px;
  }
  .NewsList li {
    height: 30px;
    line-height: 30px;
    overflow: hidden;
  }
  .NewsList li a{
    color: #666;
  }
  .NewsList li a:hover {
    color: #ff6500;
  }
  #hot {
    width: 1200px;
    margin: 0 auto 13px;
  }
  #hot .Tab_nr {
    width: 100%;
    overflow: hidden;
  }
  .Tab_nr .ProductList3 {
    width:100%;
  }
  .ProductList3 {
    float: left;
  }
  .ProductList3 li {
    box-sizing: content-box;
  }
  .ProductList3 li {
    float: left;
    width: 183px;
    height: 249px;
    transition:All 0.4s ease-in-out;
    margin-right: 7px;
    padding: 13px 24px 0;
    background-color: #ffffff;
    border: 1px solid #eeeeee;
    display: inline;
  }
  .ProductList3 li .photo {
    width: 185px;
    height: 185px;
    display: block;
  }
  .ProductList3 li .photo img {
    width: 100%;
    height: 100%;
    display: block;
  }
  img {
    border: none;
    vertical-align: middle;
  }
  .ProductList3 li strong {
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    font-size: 14px;
    font-weight: normal;
    display: block;
    text-align: center;
  }
  .ProductList3 li em {
    height: 26px;
    line-height: 26px;
    overflow: hidden;
    font-size: 20px;
    color: #c70238;
    display: block;
    text-align: center;
  }
  .ProductList3 li:hover{
    cursor: pointer;
    z-index: 9999;
    box-shadow: 0 1px 12px 0 rgba(0,0,0,0.5);
    border: 1px solid #E93D6D;
  }
  .el-tabs__item.is-active {
    color: #c5023a!important;
  }
  .el-tabs__item:hover {
      color: #c5023a;
      cursor: pointer;
    }
  .el-tabs__item{
    color: #666666;
  }
  .el-tabs__active-bar{
    background-color: #c5023a;
  }
  /*分类部分*/
  .column {
    width: 1200px;
    height: 430px;
    position: relative;
    margin: 0px auto 10px auto;
    padding-bottom: 15px;
    background: #fff;
  }
  .PartTitle {
    height: 40px;
    line-height: 40px;
    position: relative;
    overflow: hidden;
    font-size: 18px;
    font-weight: normal;
    padding-left: 50px;
    background-color: #f9f9f9;
    border-bottom: 2px solid #e4004f;
  }
  .PartTitle .icon {
    position: absolute;
    top: 7px;
    left: 9px;
    width: 25px;
    height: 25px;
  }
  img {
    border: none;
    vertical-align: middle;
  }
    /*分类部分-顶部结束*/
  .column .ad316x367 {
    float: left;
    width: 316px;
    height: 367px;
    position: relative;
    overflow: hidden;
    margin-left: 20px;
    background: #333;
    display: inline;
  }
  .column .ad316x367 .guang {
    width: 317px;
    height: 368px;
    position: absolute;
    top: -50%;
    left: -50%;
  }
  .disp-img:hover .guang{
    left: 55%;
    top:55%;
    display: block;
    background: url(./img/guang.png) no-repeat left top;
    transition: All 0.7s ease-in-out;
    -webkit-transition: All 0.7s ease-in-out;
    -moz-transition: All 0.7s ease-in-out;
    -o-transition: All 0.7s ease-in-out;
  }
  .ProductList {
    float: left;
    background-color: #ffffff;
  }
  .ProductList li {
    float: left;
    width: 248px;
    height: 347px;
    text-align: center;
    padding: 20px 20px 0;
    box-sizing: content-box;
    -webkit-transition: All 0.4s ease-in-out;
    transition: All 0.4s ease-in-out;
  }
  .ProductList li .photo {
    display: block;
  }
  .ProductList li .photo img {
    width: 180px;
    height: 180px;
    margin: 50px auto 10px auto;
    display: block;
  }
  .ProductList li .photo strong {
    height: 28px;
    line-height: 28px;
    overflow: hidden;
    font-size: 18px;
    display: block;
  }
  strong {
    font-weight: 700;
  }
  .ProductList li .photo span {
    height: 19px;
    line-height: 19px;
    overflow: hidden;
    display: block;
  }
  .ProductList li .photo em {
    height: 28px;
    line-height: 28px;
    overflow: hidden;
    font-size: 18px;
    color: #e70050;
    display: block;
  }
  a{
    font-family: inherit;
  }
  .ProductList li:hover{
    cursor: pointer;
    z-index: 9999;
    -webkit-box-shadow: 0 1px 12px 0 rgba(0,0,0,0.5);
    box-shadow: 0 1px 12px 0 rgba(0,0,0,0.5);
  }
  /*分类部分结束*/
  /*精选活动部分*/
  #Activity {
    width: 1200px;
    height: 257px;
    margin: 0 auto;
    padding-bottom: 15px;
    background: #fff;
  }
  #Activity .PartTitle {
    margin-bottom: 15px;
    padding-left: 19px;
    border: none;
  }
  .PartTitle {
    height: 40px;
    line-height: 40px;
    position: relative;
    overflow: hidden;
    font-size: 18px;
    font-weight: normal;
    padding-left: 50px;
    background-color: #f9f9f9;
    border-bottom: 2px solid #e4004f;
  }
  .imgList {
    float: left;
  }
  .imgList li {
    float: left;
    width: 375px;
    height: 200px;
    overflow: hidden;
    margin-left: 18px;
    display: inline;
  }
  .simple_disp-img{
    line-height: 69px;
  }
  .imgList li a img {
    width: 100%;
    height: 100%;
    display: block;
  }
  /*竞选活动部分结束*/
  .el-tabs__nav{
    height: 60px;
  }
  .el-tabs__nav-wrap{
    height: 60px;
  }
  #tab-first{
    line-height: 60px;
  }
</style>
