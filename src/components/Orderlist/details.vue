<template>
  <div class="Collectionlist">
    <div class="Collectionlist-box">
      <span>订单详情</span>
    </div>
    <div class="details-box">
        <div class="details-list">
            <span v-for="i in orderspan" :key="i">{{i.name}}</span>
            <!--<span></span>-->
            <!--<span></span>-->
            <!--<span></span>-->
        </div>
        <div class="examine">
            <el-steps :active="0" align-center>
                <el-step :title="i.name" v-for="i in orderel" :key="i"></el-step>
                <!--<el-step title="订单审核" ></el-step>-->
                <!--<el-step title="自提、配送"></el-step>-->
                <!--<el-step title="订单完成"></el-step>-->
            </el-steps>
        </div>
        <div class="lists">
            <ul>
                <li>
                    <p class="list-p">{{orderli1.name}}</p>
                    <p>
                      <!--<span>MOKJO</span><span>中国</span>, <span>河北省</span>,-->
                     <!--<span>秦皇岛市</span>, <span>卢龙县</span>,-->
                     <!--<span>0JIJ0OIJOPI OJPOIU </span><span>14729623123</span>-->
                      <span v-for="i in orderspan1" :key="i">
                        {{i.name}}
                      </span>
                    </p>
                </li>
                <li>
                    <p class="list-p">备注信息</p>
                    <p>{{orderli2.name}}</p>
                </li>
                <li>
                   <p class="list-p">预计到货时间</p>
                   <span v-for="i in orderspan2" :key="i">{{i.name}}</span>
                  <span>(* 温馨提示：快递类商品以实际到货时间为准，实际到货时间可能有0.5~1小时的偏差哦~)</span>
                </li>
                <li>
                    <p class="list-p">支付方式</p>
                    <p>{{orderli3.name}}</p>
                </li>
                <li>
                    <p class="list-p">电子劵使用情况</p>
                    <p>{{orderli4.name}}</p>
                </li>
                <li>
                    <p class="list-p">发票信息</p>
                    <p>{{orderli5.name}}</p>
                </li>
            </ul>
        </div>
        <div>
            <p class="list-p">商品清单</p>
            <div class="table">
                <table>
                    <tr class="table-box">
                        <td></td>
                        <td></td>
                        <td>数量</td>
                        <td>商品价格</td>
                        <td>总计</td>
                        <td>配送方式</td>
                        <td>门店</td>
                    </tr>
                    <tr class="table-img">
                        <!--<td v-for="(i,index) in imgList" :key="index">-->
                          <!--<img :src="i.img">-->
                          <!--&lt;!&ndash;{{i.img}}&ndash;&gt;-->
                        <!--</td>-->
                      <td>
                        <img :src="api+'/img/'+lis[1].imgSrc">
                        <!--{{i.img}}-->
                      </td>
                        <td>
                            <p v-for="(i,index) in orderdetail" :key="index">{{i.name}}</p>
                            <p>规格：
                                <span v-for="(i,index) in orderspan3" :key="index">{{i.name}}</span>
                                <!--<span>夹馅：</span>-->
                                <!--<span>香芋+香芋</span>-->
                                <!--<span>（网红款）</span>-->
                            </p>
                        </td>
                        <td v-for="(i,index) in ordertd" :key="index">{{i.name}}</td>
                        <!--<td>￥210.00</td>-->
                        <!--<td>￥214.00</td>-->
                        <!--<td>门店提取</td>-->
                        <!--<td>北京双井店</td>-->
                    </tr>
                </table>
            </div>
        </div>
        <div class="datails-Cart">
            <ul>
                <li class="list-p">订单合计</li>
                <li>
                    <span>商品数量总计</span>
                    <span class="fr">{{accounts1.name}}</span>
                </li>
                <li>
                    <span>商品金额总计</span>
                    <span class="fr">￥258.00</span>
                </li>
                <li>
                    <span>送货:</span>
                    <span class="fr">免费</span>
                </li>
                <li>
                    <span>总计</span>
                    <span class="fr"> ￥5515</span>
                </li>
            </ul>
            <span class="clear"></span>
        </div>
    </div>
  </div>
</template>
<script>
//import {api} from 'api'
import {orderLL} from 'api/request_ll'
import img0 from './img/sh.jpg'
export default {
  data () {
    return {
      api: 'http://huangchuan.natapp1.cc/Canso',
      orderspan: [
        {name: '订单号'},
        {name: '15454515415'},
        {name: '订单状态：'},
        {name: '订单提交'}
      ],
      orderel: [
        {name: '订单提交'},
        {name: '付款成功'},
        {name: '订单审核'},
        {name: '自提、配送'},
        {name: '订单完成'}
      ],
      orderli1: {
        name: '收货地址'
      },
      orderli2: {
        name: '暂无备注信息'
      },
      orderli3: {
        name: '支付宝'
      },
      orderli4: {
        name: '该订单未使用电子劵'
      },
      orderli5: {
        name: '不需要发票'
      },
      orderspan1: [
        {name: '重庆市沙坪坝区,'},
        {name: '西永大道西科公寓'}
//        {name: '河北省,'},
//        {name: '秦皇岛市,'},
//        {name: '卢龙县,'},
//        {name: '0JIJ0OIJOPI  OJPOIU'},
//        {name: '14729623123'}
      ],
      orderspan2: [
        {name: '19961210 16:40'}
      ],
      imgList: [
        {img: img0}
      ],
      orderdetail: [
        {name: '朝羽鲜奶蛋糕'}
      ],
      orderspan3: [
        {name: '8号'},
        {name: '夹馅： '},
        {name: '香芋+香芋'},
        {name: '（网红款）'}
      ],
      ordertd: [
        {name: '1'},
        {name: '￥210.00'},
        {name: '￥214.00'},
        {name: '门店提取'},
        {name: '北京双井店'}
      ],
      accounts1: {
        name: '1'
      },
      lis: []
    }
  },
  mounted () {
    orderLL((res) => {
      console.log(res.ordertb[0].orderdetailses[0].goodsinfo.goodsimgses)
      this.lis = res.ordertb[0].orderdetailses[0].goodsinfo.goodsimgses
      console.log(res)
    })
  }
}
</script>
<style scoped>
.Collectionlist{
    width: 1000px;
    border: 1px solid #cccccc;
    margin: auto;
}
.Collectionlist-box{
    width: 900px;
    margin: auto;
    border-bottom:1px solid #cccccc;
}
.Collectionlist-box span{
    font-weight: bold;
    font-size: 14px;
    display:inline-block;
    line-height: 30px;
}
.fr{
    float: right;
}
.fl{
    float: left;
}
.details-box{
    width: 900px;
    margin: auto;
}
.details-list span{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    margin-left: 50px;
}
.details-list span:first-child{
    margin-left:0;
}
.examine{
    padding-bottom: 20px;
    border-bottom:1px solid #cccccc;
}
.lists li{
    line-height: 30px;
    border-bottom: 1px solid #cccccc;
    padding-top: 10px;
    padding-bottom: 10px;
}
.list-p{
    font-size: 14px;
    font-weight: bold;
}
table tr{
 height: 40px;
 border: 1px solid #cccccc;
 }
table{
   border: 1px solid #cccccc;
 }
td{
  width: 180px;
  text-align: center;
}
table
  {
  border-collapse:collapse;
  }
.table-box{
  font-size: 14px;
  font-weight: bold;
}
.table{
  margin-top: 20px;
}
.table-img img{
    width: 120px;
    height: 120px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: -14px;
}
.datails-Cart ul{
    width: 300px;
    float: right;
}
.datails-Cart ul li{
    line-height: 30px;
    border-bottom: 1px solid #cccccc;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
