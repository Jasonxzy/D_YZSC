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
          <li v-for="i in NoticeList" :key="i">
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
              <li>
                <router-link :to="'/purchase?goodsid='+prodlist1.ginfoId" class="photo">
                  <img :title="prodlist1.ginfoSynopsis" :alt="prodlist1.ginfoSynopsis" :src="api+'/img/'+prodlist1.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{prodlist1.ginfoName}}</strong>
                <em> ¥ {{prodlist1.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+prodlist2.ginfoId" class="photo">
                  <img :title="prodlist2.ginfoSynopsis" :alt="prodlist2.ginfoSynopsis" :src="api+'/img/'+prodlist2.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{prodlist2.ginfoName}}</strong>
                <em> ¥ {{prodlist2.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+prodlist3.ginfoId" class="photo">
                  <img :title="prodlist3.ginfoSynopsis" :alt="prodlist3.ginfoSynopsis" :src="api+'/img/'+prodlist3.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{prodlist3.ginfoName}}</strong>
                <em> ¥ {{prodlist3.ginfoPrice}}</em>
              </li>
              <li>
              <router-link :to="'/purchase?goodsid='+prodlist4.ginfoId" class="photo">
                <img :title="prodlist4.ginfoSynopsis" :alt="prodlist4.ginfoSynopsis" :src="api+'/img/'+prodlist4.ginfoId+'.jpg'"/>
              </router-link>
              <strong>{{prodlist4.ginfoName}}</strong>
              <em> ¥ {{prodlist4.ginfoPrice}}</em>
            </li>
              <li>
                <router-link :to="'/purchase?goodsid='+prodlist5.ginfoId" class="photo">
                  <img :title="prodlist5.ginfoSynopsis" :alt="prodlist5.ginfoSynopsis" :src="api+'/img/'+prodlist5.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{prodlist5.ginfoName}}</strong>
                <em> ¥ {{prodlist5.ginfoPrice}}</em>
              </li>
            </ul>
            <span class="clear"></span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="热销商品" name="second">
          <div class="Tab_nr">
            <ul class="ProductList3">
              <li>
                <router-link :to="'/purchase?goodsid='+Selllist1.ginfoId" class="photo">
                  <img :title="Selllist1.ginfoSynopsis" :alt="Selllist1.ginfoSynopsis" :src="api+'/img/'+Selllist1.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{Selllist1.ginfoName}}</strong>
                <em> ¥ {{Selllist1.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+Selllist2.ginfoId" class="photo">
                  <img :title="Selllist2.ginfoSynopsis" :alt="Selllist2.ginfoSynopsis" :src="api+'/img/'+Selllist2.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{Selllist2.ginfoName}}</strong>
                <em> ¥ {{Selllist2.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+Selllist3.ginfoId" class="photo">
                  <img :title="Selllist3.ginfoSynopsis" :alt="Selllist3.ginfoSynopsis" :src="api+'/img/'+Selllist3.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{Selllist3.ginfoName}}</strong>
                <em> ¥ {{Selllist3.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+Selllist4.ginfoId" class="photo">
                  <img :title="Selllist4.ginfoSynopsis" :alt="Selllist4.ginfoSynopsis" :src="api+'/img/'+Selllist4.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{Selllist4.ginfoName}}</strong>
                <em> ¥ {{Selllist4.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+Selllist5.ginfoId" class="photo">
                  <img :title="Selllist5.ginfoSynopsis" :alt="Selllist5.ginfoSynopsis" :src="api+'/img/'+Selllist5.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{Selllist5.ginfoName}}</strong>
                <em> ¥ {{Selllist5.ginfoPrice}}</em>
              </li>
            </ul>
            <span class="clear"></span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="节庆民俗" name="third">
          <div class="Tab_nr">
            <ul class="ProductList3">
              <li>
                <router-link :to="'/purchase?goodsid='+folklist1.ginfoId" class="photo">
                  <img :title="folklist1.ginfoSynopsis" :alt="folklist1.ginfoSynopsis" :src="api+'/img/'+folklist1.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{folklist1.ginfoName}}</strong>
                <em> ¥ {{folklist1.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+folklist2.ginfoId" class="photo">
                  <img :title="folklist2.ginfoSynopsis" :alt="folklist2.ginfoSynopsis" :src="api+'/img/'+folklist2.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{folklist2.ginfoName}}</strong>
                <em> ¥ {{folklist2.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+folklist3.ginfoId" class="photo">
                  <img :title="folklist3.ginfoSynopsis" :alt="folklist3.ginfoSynopsis" :src="api+'/img/'+folklist3.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{folklist3.ginfoName}}</strong>
                <em> ¥ {{folklist3.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+folklist4.ginfoId" class="photo">
                  <img :title="folklist4.ginfoSynopsis" :alt="folklist4.ginfoSynopsis" :src="api+'/img/'+folklist4.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{folklist4.ginfoName}}</strong>
                <em> ¥ {{folklist4.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+folklist5.ginfoId" class="photo">
                  <img :title="folklist5.ginfoSynopsis" :alt="folklist5.ginfoSynopsis" :src="api+'/img/'+folklist5.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{folklist5.ginfoName}}</strong>
                <em> ¥ {{folklist5.ginfoPrice}}</em>
              </li>
            </ul>
            <span class="clear"></span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="元祖卡券" name="fourth">
          <div class="Tab_nr">
            <ul class="ProductList3">
              <li>
                <router-link :to="'/purchase?goodsid='+Cardlist1.ginfoId" class="photo">
                  <img :title="Cardlist1.ginfoSynopsis" :alt="Cardlist1.ginfoSynopsis" :src="api+'/img/'+Cardlist1.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{Cardlist1.ginfoName}}</strong>
                <em> ¥ {{Cardlist1.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+Cardlist2.ginfoId" class="photo">
                  <img :title="Cardlist2.ginfoSynopsis" :alt="Cardlist2.ginfoSynopsis" :src="api+'/img/'+Cardlist2.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{Cardlist2.ginfoName}}</strong>
                <em> ¥ {{Cardlist2.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+Cardlist3.ginfoId" class="photo">
                  <img :title="Cardlist3.ginfoSynopsis" :alt="Cardlist3.ginfoSynopsis" :src="api+'/img/'+Cardlist3.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{Cardlist3.ginfoName}}</strong>
                <em> ¥ {{Cardlist3.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+Cardlist4.ginfoId" class="photo">
                  <img :title="Cardlist4.ginfoSynopsis" :alt="Cardlist4.ginfoSynopsis" :src="api+'/img/'+Cardlist4.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{Cardlist4.ginfoName}}</strong>
                <em> ¥ {{Cardlist4.ginfoPrice}}</em>
              </li>
              <li>
                <router-link :to="'/purchase?goodsid='+Cardlist5.ginfoId" class="photo">
                  <img :title="Cardlist5.ginfoSynopsis" :alt="Cardlist5.ginfoSynopsis" :src="api+'/img/'+Cardlist5.ginfoId+'.jpg'"/>
                </router-link>
                <strong>{{Cardlist5.ginfoName}}</strong>
                <em> ¥ {{Cardlist5.ginfoPrice}}</em>
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
        <li>
          <router-link :to="'/purchase?goodsid='+Cakelist1.ginfoId" class="photo">
            <img :title="Cakelist1.ginfoSynopsis" :alt="Cakelist1.ginfoSynopsis" :src="api+'/img/'+Cakelist1.ginfoId+'.jpg'"/>
            <strong>{{Cakelist1.ginfoName}}</strong>
            <span>{{Cakelist1.ginfoSynopsis}}</span>
            <em>¥ {{Cakelist1.ginfoPrice}}</em>
          </router-link>
        </li>
        <li>
          <router-link :to="'/purchase?goodsid='+Cakelist2.ginfoId" class="photo">
            <img :title="Cakelist2.ginfoSynopsis" :alt="Cakelist2.ginfoSynopsis" :src="api+'/img/'+Cakelist2.ginfoId+'.jpg'"/>
            <strong>{{Cakelist2.ginfoName}}</strong>
            <span>{{Cakelist2.ginfoSynopsis}}</span>
            <em>¥ {{Cakelist2.ginfoPrice}}</em>
          </router-link>
        </li>
        <li>
          <router-link :to="'/purchase?goodsid='+Cakelist3.ginfoId" class="photo">
            <img :title="Cakelist3.ginfoSynopsis" :alt="Cakelist3.ginfoSynopsis" :src="api+'/img/'+Cakelist3.ginfoId+'.jpg'"/>
            <strong>{{Cakelist3.ginfoName}}</strong>
            <span>{{Cakelist3.ginfoSynopsis}}</span>
            <em>¥ {{Cakelist3.ginfoPrice}}</em>
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
        <li>
          <router-link :to="'/purchase?goodsid='+GiftBoxlist1.ginfoId" class="photo">
            <img :title="GiftBoxlist1.ginfoSynopsis" :alt="GiftBoxlist1.ginfoSynopsis" :src="api+'/img/'+GiftBoxlist1.ginfoId+'.jpg'"/>
            <strong>{{GiftBoxlist1.ginfoName}}</strong>
            <span>{{GiftBoxlist1.ginfoSynopsis}}</span>
            <em>¥ {{GiftBoxlist1.ginfoPrice}}</em>
          </router-link>
        </li>
        <li>
          <router-link :to="'/purchase?goodsid='+GiftBoxlist2.ginfoId" class="photo">
            <img :title="GiftBoxlist2.ginfoSynopsis" :alt="GiftBoxlist2.ginfoSynopsis" :src="api+'/img/'+GiftBoxlist2.ginfoId+'.jpg'"/>
            <strong>{{GiftBoxlist2.ginfoName}}</strong>
            <span>{{GiftBoxlist2.ginfoSynopsis}}</span>
            <em>¥ {{GiftBoxlist2.ginfoPrice}}</em>
          </router-link>
        </li>
        <li>
          <router-link :to="'/purchase?goodsid='+GiftBoxlist3.ginfoId" class="photo">
            <img :title="GiftBoxlist3.ginfoSynopsis" :alt="GiftBoxlist3.ginfoSynopsis" :src="api+'/img/'+GiftBoxlist3.ginfoId+'.jpg'"/>
            <strong>{{GiftBoxlist3.ginfoName}}</strong>
            <span>{{GiftBoxlist3.ginfoSynopsis}}</span>
            <em>¥ {{GiftBoxlist3.ginfoPrice}}</em>
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
        <li>
          <router-link :to="'/purchase?goodsid='+westPointlist1.ginfoId" class="photo">
            <img :title="westPointlist1.ginfoSynopsis" :alt="westPointlist1.ginfoSynopsis" :src="api+'/img/'+westPointlist1.ginfoId+'.jpg'"/>
            <strong>{{westPointlist1.ginfoName}}</strong>
            <span>{{westPointlist1.ginfoSynopsis}}</span>
            <em>¥ {{westPointlist1.ginfoPrice}}</em>
          </router-link>
        </li>
        <li>
          <router-link :to="'/purchase?goodsid='+westPointlist2.ginfoId" class="photo">
            <img :title="westPointlist2.ginfoSynopsis" :alt="westPointlist2.ginfoSynopsis" :src="api+'/img/'+westPointlist2.ginfoId+'.jpg'"/>
            <strong>{{westPointlist2.ginfoName}}</strong>
            <span>{{westPointlist2.ginfoSynopsis}}</span>
            <em>¥ {{westPointlist2.ginfoPrice}}</em>
          </router-link>
        </li>
        <li>
          <router-link :to="'/purchase?goodsid='+westPointlist3.ginfoId" class="photo">
            <img :title="westPointlist3.ginfoSynopsis" :alt="westPointlist3.ginfoSynopsis" :src="api+'/img/'+westPointlist3.ginfoId+'.jpg'"/>
            <strong>{{westPointlist3.ginfoName}}</strong>
            <span>{{westPointlist3.ginfoSynopsis}}</span>
            <em>¥ {{westPointlist3.ginfoPrice}}</em>
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
        <li v-for="i in ActivitiesList" :key="i">
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
import {westPoint} from 'api/request'
import {GiftBox} from 'api/request'
import {Cake} from 'api/request'
import {folkCustom} from 'api/request'
import {CardRoll} from 'api/request'
import {HotSelling} from 'api/request'
import {NewProducts} from 'api/request'
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
      api: 'http://88ja9g.natappfree.cc/Canso',
      imglist: [banner1, banner2, banner3],
      activeName: 'first',
      // banner下面tab切换
      prodlist1: [],
      prodlist2: [],
      prodlist3: [],
      prodlist4: [],
      prodlist5: [],
      // 元祖新品完
      Selllist1: [],
      Selllist2: [],
      Selllist3: [],
      Selllist4: [],
      Selllist5: [],
      // 元祖热销完
      folklist1: [],
      folklist2: [],
      folklist3: [],
      folklist4: [],
      folklist5: [],
      // 节庆民俗
      Cardlist1: [],
      Cardlist2: [],
      Cardlist3: [],
      Cardlist4: [],
      Cardlist5: [],
      //      MUCH蛋糕
      Cakelist1: [],
      Cakelist2: [],
      Cakelist3: [],
      //      元祖礼盒
      GiftBoxlist1: [],
      GiftBoxlist2: [],
      GiftBoxlist3: [],
      //      元祖礼盒
      westPointlist1: [],
      westPointlist2: [],
      westPointlist3: [],
      //    精选活动
      ActivitiesList: [
        {img: img8},
        {img: img9},
        {img: img10}
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  //   获取数据
  mounted () {
    // 元祖新品
    NewProducts((res) => {
      console.log('元祖新品')
      console.log(res)
      this.prodlist1 = res.goodsinfo[1]
      this.prodlist2 = res.goodsinfo[2]
      this.prodlist3 = res.goodsinfo[3]
      this.prodlist4 = res.goodsinfo[4]
      this.prodlist5 = res.goodsinfo[5]
    })
    // 元祖热销
    HotSelling((res) => {
      console.log('元祖热销')
      console.log(res)
      this.Selllist1 = res.goodsinfo[1]
      this.Selllist2 = res.goodsinfo[2]
      this.Selllist3 = res.goodsinfo[3]
      this.Selllist4 = res.goodsinfo[4]
      this.Selllist5 = res.goodsinfo[5]
    })
    // 节庆民俗
    folkCustom((res) => {
      console.log('节庆民俗')
      console.log(res)
      this.folklist1 = res.goodsinfo[1]
      this.folklist2 = res.goodsinfo[2]
      this.folklist3 = res.goodsinfo[3]
      this.folklist4 = res.goodsinfo[4]
      this.folklist5 = res.goodsinfo[5]
    })
    // 元祖卡卷
    CardRoll((res) => {
      console.log('节庆民俗')
      console.log(res)
      this.Cardlist1 = res.goodsinfo[1]
      this.Cardlist2 = res.goodsinfo[2]
      this.Cardlist3 = res.goodsinfo[3]
      this.Cardlist4 = res.goodsinfo[4]
      this.Cardlist5 = res.goodsinfo[5]
    })
    // 元祖蛋糕
    Cake((res) => {
      console.log('元祖蛋糕')
      console.log(res)
      this.Cakelist1 = res.goodsinfo[0]
      this.Cakelist2 = res.goodsinfo[1]
      this.Cakelist3 = res.goodsinfo[2]
    })
    // 元祖礼盒
    GiftBox((res) => {
      console.log('元祖礼盒')
      console.log(res)
      this.GiftBoxlist1 = res.goodsinfo[0]
      this.GiftBoxlist2 = res.goodsinfo[1]
      this.GiftBoxlist3 = res.goodsinfo[2]
    })
    // 元祖西点
    westPoint((res) => {
      console.log('元祖西点')
      console.log(res)
      this.westPointlist1 = res.goodsinfo[0]
      this.westPointlist2 = res.goodsinfo[1]
      this.westPointlist3 = res.goodsinfo[2]
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
