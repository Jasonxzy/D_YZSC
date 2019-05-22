<template>
   <div class="Notice allcolor">
     <TopNavigation/>
     <TopBanner/>
     <search/>
     <ClassNav/>
    <!--元祖公告一-（刘璐-->
    <!--元祖公告导航-->
    <div class="Notice-head">
      <router-link to="/#" class="gray fonts-12">主页</router-link>
      >
      <router-link to="#" class="gray fonts-12"> 元祖公告44（18年中秋月饼销毁公告）</router-link>
    </div>
    <div class="Notice-cotainer">
      <div class="Notice-logo">
        <img src="./Noticeimg/ganso-logo.png" alt="">
        <span>
        {{divlist.name}}
        </span>
      </div>
      <div class="Notice-content">
        <p class="fonts-24" v-for="i in divlist1" :key="i">
          {{i.name}}
        </p>
      </div>
      <!--落款-->
      <div class="Inscription">
         <span class="fonts-20" v-for="i in divlist2" :key="i">
            {{i.name}}
         </span>
      </div>
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
  },
  data () {
    return {
      divlist: {
        name: '【公告】元祖2018年中秋月饼报废公告'
      },
      divlist1: [
        {name: '为维护广大消费者的合法权益，元祖已将2018年月饼提货券的提领时间，' +
        '分别延期至2018年9月24日和2018年10月15日，并公布了“元祖对已过中秋节的月饼' +
        '提领政策”，指引消费者在2018年' +
        '10月15日前及时携券提领月饼，提醒消费者逾期将无法提领。'
        },
        {name: '为严格执行《食品安全法》关于及时清理超过保质期食品的相关规定，' +
        '同时因月饼本身具有保质期和销售期，元祖对已过期产品一贯采取及时报废原则，' +
        '并对过期产品报废过程及对报废品处理实行严格的管控流程，故元祖于2018年10月在' +
        '各门店张贴了关于2018年10月30日销毁过期月饼的公告，并于当天在上海元祖梦果子股' +
        '份有限公司现场销毁月饼，' +
        '总计陆仟肆佰余盒，整个过程由公证机关进行了现场公证。'},
        {name: '至此，元祖2018年度中秋月饼已全部销毁，同时敬告广大消费者，2018年中秋月饼提货券' +
        '将不再予以提领。'}
      ],
      divlist2: [
        {name: '上海元祖梦果子股份有限公司'},
        {name: '2018年11月5日'}
      ]
    }
  },
  // 文档加载完成
  mounted () {
    console.log(this.$route.params.id)
  }
}
</script>
<style scoped>
  /*导航*/
  .Notice{
    width: 100%;
    height: auto;
  }
  .Notice-head{
    width: 1199px;
    height: 45px;
    padding-top: 10px;
    margin: 10px auto;
  }
  /*导航过渡*/
  .Notice-head a:nth-of-type(1):hover,.Notice-head a:nth-of-type(2):hover{
    color: red;
    transition: all 0.5s;
  }
  /*内容*/
  .Notice-cotainer{
    width: 1160px;
    margin: 0 auto;
  }
  .Notice-logo{
    width: 100%;
    height: auto;
    margin: 20px auto;
    border-bottom: 2px solid firebrick;
    text-align: center;
  }
  .Notice-logo img{
    display: block;
    width: 135px;
    height: 58px;
    /*border: 1px solid firebrick;*/
    margin-left: 900px;
  }
  .Notice-logo span{
    font-size: 29px;
    color: rgb(173, 1, 50);
    display: block;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  /*公告详情*/
  .Notice-content{
    margin-top: 50px;
    height: 400px;
  }
  .Notice-content p{
    font-family: "宋体";
    line-height: 35px;
    text-indent: 50px;
  }
  .Notice-content p:nth-of-type(3){
    margin-top: 20px;
    margin-bottom: 50px;
  }
  /*落款*/
  .Inscription{
    text-align: right;
    height: 130px;
  }
  .Inscription span{
    display: block;
    font-weight: bold;
  }
</style>
