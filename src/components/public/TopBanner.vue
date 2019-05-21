<template>
  <!--顶部轮播-->
  <div class="topBanner">
    <el-carousel>
      <el-carousel-item v-for="(item,index) in imglist" :key="index">
        <img :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
  <!--顶部轮播完成-->

</template>
<script>
import topBanner1 from './img/-333333333333333333333.jpg'
import topBanner2 from './img/-333333333333333333333.jpg'
export default {
  data () {
    return {
      imglist: [topBanner1, topBanner2]
    }
  }
}
</script>
<style>
  .topBanner{
    height: 90px;
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
  }
  /*.el-carousel__container {*/
    /*position: relative;*/
    /*height: 90px;*/
    /*width: 100%;*/
  /*}*/
</style>
