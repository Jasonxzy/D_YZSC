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
      <router-link to="#" class="gray fonts-12">{{divList.NSynopsis}}</router-link>
    </div>
    <div class="Notice-cotainer">
      <div class="Notice-logo">
        <img src="./Noticeimg/ganso-logo.png" alt="">
        <span>
        {{divList.NTitle}}
        </span>
      </div>
      <div class="Notice-content">
        <p v-html="divList.NContent"></p>
      </div>
      <!--落款-->
      <div class="Inscription">
         <span class="fonts-20">
            {{divList.NCompany}}
         </span>
        <span class="fonts-20">
          <br/>
          {{NTime}}
         </span>
      </div>
    </div>
     <BottomNav/>
  </div>
</template>
<script>
//import moment from 'moment'
import TopNavigation from '@/components/public/TopNavigation.vue'
import TopBanner from '@/components/public/TopBanner.vue'
import search from '@/components/public/search.vue'
import ClassNav from '@/components/public/ClassNav.vue'
import BottomNav from '@/components/public/BottomNavigation.vue'
import {homeNl} from 'api/request_ll'
export default {
  props: ['id'],
  components: {
    TopNavigation,
    TopBanner,
    search,
    ClassNav,
    BottomNav
  },
  data () {
    return {
      divList: [],
      NTime: '',
      aa: []
    }
  },
  // 文档加载完成
  mounted () {
    let id = {id: this.$route.query.id}
    console.log(id)
    homeNl(id, (res) => {
      this.aa = id.id
      this.divList = res.noticelist[this.aa - 1]
      console.log(res.noticelist[0])
      let a = new Date(this.divList.NTime)
      let b = a.getFullYear() + '年' + a.getMonth() + '月' + a.getDay() + '日'
      this.NTime = b
    })
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
