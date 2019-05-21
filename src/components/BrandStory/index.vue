<template>
  <!--品牌故事-刘璐-->
  <div class="allcolor brand">
    <TopNavigation/>
    <TopBanner/>
    <search/>
    <ClassNav/>
     <div class="brand-head">
       <router-link to="/#" class="gray fonts-12">主页</router-link>
       >
       <router-link to="#" class="gray fonts-12">品牌故事</router-link>
     </div>
     <div class="brang-img">
        <img src="./brandimg/solagen_r1_c2.gif" alt="">
     </div>
    <div class="brand-content">
       <div class="brand-content-ibox">
           <h3 class="fonts-18 brand-hf">品牌介绍</h3>
       </div>
       <h3 class="fonts-24 brand-hs">元祖食品· 1981年创立于台湾地区</h3>
      <div class="brand-content-img1">
        <img src="./brandimg/solagen_r5_c6.gif" alt="">
      </div>
      <p class="brand-content-sp1">
        1981年创始于台湾，1993年第一块鲜亮醒目的"元祖红"招牌在上海竖起。至今元祖门店遍及台湾两岸，力求以时效确保品质新鲜、服务贴心；随著产品不断创新和门店的扩增，公司每年都在稳步成长。今天这块元祖红招牌已遍布中国各大城市，并成为家喻户晓的"精致礼品名家"。
      </p>
      <div class="brand-content-ibox">
        <h3 class="fonts-18 brand-hf">品牌定位</h3>
      </div>
      <div class="brand-content-ibox1">
        <img src="./brandimg/solagen_r7_c5.gif" alt="">
        <div class="brand-content-ibox2">
          <div>
            <img src="./brandimg/solagen_r5_c4.gif" alt="">
          </div>
          <div>
            <span class="fonts-24">
              讲究饮食文化·坚持食品品质
            </span>
            <div>
              <p>
                新鲜让美味加分，为了喜爱元祖食品的消费者能享用到新鲜的产品，元祖不辞繁琐工序，坚持各门店现场裱花，确保美味与新鲜传递到消费者手里
              </p>
            </div>
          </div>
          <div>
            <span class="fonts-24">
            演绎民俗·创新传统
            </span>
            <p class="fonts-16">
              元祖Much蛋糕、春节八宝年糕、清明麻糬、端午元祖龙粽、绿豆糕、中秋元祖雪月饼…… 元祖根据不同节令，推出相应的礼盒与商品。
            </p>
          </div>
          <div>
            <img src="./brandimg/solagen_r7_c3.gif" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="brand-content1">
      <div class="brand-content-ibox">
        <h3 class="fonts-18 brand-hf brand-hs">品牌定位</h3>
      </div>
      <img src="./brandimg/solagen_r9_c1.gif" alt="">
    </div>
    <BottomNav/>
  </div>
</template>
<script>
import TopNavigation from '@/components/public/TopNavigation.vue'
import TopBanner from '@/components/public/TopBanner.vue'
import search from '@/components/public/search.vue'
import ClassNav from '@/components/public/ClassNav.vue'
import BottomNav from '@/components/public/BottomNavigation.vue'
export default {
  components: {
    TopNavigation,
    TopBanner,
    search,
    ClassNav,
    BottomNav
  }
}
</script>
<style lang="less" scoped>
  .brand{
    width: 100%;
    height: auto;
  }
  .brand-head{
    width: 1199px;
    height: 45px;
    margin: 10px auto;
  }
  .brand img{
    width: 1128px;
    height: 337px;
    margin: 0 auto;
    display: block;
  }
  .brand-content{
    width: 1128px;
    text-align: center;
    margin: 0 auto;
  }
  .brand-content-ibox{
    width: 227px;
    height: 58px;
    /*border: 1px solid red;*/
    margin: 50px auto;
    background: url("./brandimg/solagen_r3_c5.gif") no-repeat;
  }
  .brand-hf{
    line-height: 44px;
    color: white;
    margin-left: 115px;
  }
  .brand-content-img1{
    margin-top: 10px;
  }
  .brand-content-img1 img{
    width: 833px;
    height: 20px;
  }
  .brand-content-sp1{
    text-align: left;
    display: inline-block;
    height: 35px;
    line-height: 35px;
    margin-top: 30px;
    color: #6b6b6b;
    margin-bottom: 120px;
  }
  .brand-content-ibox1 img:nth-of-type(1){
    width: 909px;
    height: 298px;
  }
  .brand-content-ibox2{
    width: 910px;
    height: auto;
    margin: 60px auto;
    text-align: left;
  }
  .brand-content-ibox2 div:nth-of-type(1) img{
    width: 386px;
    height: 252px;
    float: left;
  }
  .brand-content-ibox2 div:nth-of-type(2){
    width: 490px;
    height: 252px;
    float: right;
  }
  .brand-content-ibox2 div:nth-of-type(2) div{
    height: 35px;
    margin-top: 40px;
    line-height: 35px;
  }
  .brand-content-ibox2 div:nth-of-type(3){
    clear: both;
    width: 100%;
  }
  .brand-content-ibox2 div:nth-of-type(3) span{
    display: inline-block;
    padding-left: 30px;
    padding-top: 30px;
  }
  .brand-content-ibox2 div:nth-of-type(3) p{
    padding-left: 30px;
    padding-top: 50px;
  }
  .brand-content-ibox1 div:nth-of-type(4) img{
    width: 910px;
    height: 158px;
    margin-top: 30px;
  }
  .brand-content1{
    width: 1260px;
    height: 600px;
    margin: 0 auto;
  }
  .brand-hs{
    margin-left: 135px;
  }
  .brand-content1 img{
    width: 100%;
    height: 395px;
    margin: 30px auto;
  }
  /*点击导航过度效果*/
  .brand-head a:nth-of-type(1):hover,.brand-head a:nth-of-type(2):hover{
    color: red;
    transition: all 0.5s;
  }
</style>
