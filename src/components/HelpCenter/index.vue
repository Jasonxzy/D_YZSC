<template>
  <div class="content allcolor">
    <TopNavigation/>
    <TopBanner/>
    <search/>
    <ClassNav/>
    <div class="help-center-a allcolor padding-T-10 fonts-12">
      <router-link to="/#" class="gray">主页</router-link>
      >
      <router-link to="/BrandStory" class="gray">品牌故事</router-link>
    </div>
    <div class="help-center-hc">
      <h1 class="help-center-h1 help-center-red">帮助中心</h1>
      <el-tabs :tab-position="tabPosition" class="tab-height">
        <!--帮助中心侧边导航-->
        <el-tab-pane label="配送范围及服务费">
          <!--配送范围及服务费tab内容-->
          <p class="fonts-16 help-center-p1">配送范围及服务费</p>
          <p class="fonts-16 help-center-p2 padding-T-20">现有可配送城市查询 </p>
            <router-link to="#" class="fonts-16 help-center-p3 padding-T-20">
              http://mall.ganso.com.cn/Ganso/zh/store-finder
            </router-link>
          <table border="1" cellpadding="collapse" cellspacing="collapse" class="help-center-tb"  style="border-collapse:collapse;">
            <tr>
              <td></td>
              <td colspan="2">
                <p class="fonts-14 help-center-p4">单笔订单金额</p>
                <p class="fonts-14 help-center-p5">＜100元</p>
              </td>
              <td colspan="2">
                <p class="fonts-14 help-center-p4">单笔订单金额额</p>
                <p class="fonts-14 help-center-p5">≥100元</p>
              </td>
            </tr>
            <tr>
              <td>
                <p class="fonts-14 help-center-p4">商品类别</p>
              </td>
              <td>
                <p class="fonts-14 help-center-p4">所在城市有门店</p>
              </td>
              <td>
                <p class="fonts-14 help-center-p4">所在城市无门店</p>
              </td>
              <td>
                <p class="fonts-14 help-center-p4">所在城市有门店</p>
              </td>
              <td>
                <p class="fonts-14 help-center-p4">所在城市无门店</p>
              </td>
            </tr>
            <tr valign="middle">
              <td>
                <p class="fonts-14">需门店加工或冷冻冷藏的产品（如鲜奶</p>
                <p class="fonts-14">蛋糕、西点卷、冰品、粽子等)</p>
              </td>
              <td>
                <span class="fonts-14">自提</span>
              </td>
              <td></td>
              <td>
                <span class="fonts-14">自提/配送</span>
                <span class="fonts-14 help-center-red">（见2）</span>
              </td>
              <td></td>
            </tr>
            <tr valign="middle">
              <td>
                <p class="fonts-14 help-center-p2">常温储存（如蛋黄酥礼盒）</p>
              </td>
              <td>
                <p class="fonts-14 help-center-p2">自提/付费快递</p>
                <span class="fonts-14 help-center-red">（见1）</span>
              </td>
              <td>
                <p class="fonts-14 help-center-p2">付费快递</p>
                <span class="fonts-14 help-center-red">（见1）</span>
              <td>
                <p class="fonts-14 help-center-p2">自提/配送</p>
                <span class="fonts-14 help-center-red">（见2、3）</span>
                <p class="fonts-14 help-center-p2">/免费快递</p>
              </td>
              <td>
                <p class="fonts-14 help-center-p2">免费快递</p>
              </td>
            </tr>
            <tr valign="middle">
              <td>
                <p class="fonts-14 help-center-p2">提货券、卡</p>
              </td>
              <td>
                <p class="fonts-14 help-center-p2">自提/付费快递</p>
                <span class="fonts-14 help-center-red">（见1）</span>
              </td>
              <td>
                <p class="fonts-14 help-center-p2">付费快递</p>
                <span class="fonts-14 help-center-red">（见1）</span>
              </td>
              <td>
                <p class="fonts-14 help-center-p2">自提/配送</p>
                <span class="fonts-14 help-center-red">（见2、3）</span>
                <p class="fonts-14 help-center-p2">/免费快递</p>
              </td>
              <td>
                <p class="fonts-14 help-center-p2">免费快递</p>
              </td>
            </tr>
          </table>
          <p class="fonts-14 padding-T-25">1、单笔订单消费满100元可选配送。</p>
          <p class="fonts-14 padding-T-25">2、选择门店配送（根据驾车距离收费</p>
          <p class="fonts-14 padding-T-25 padding-L-25">0-7公里以内免运费|7-9公里为20元|9-11公里为30元|11-13公里为40元|13-15公里为50元|15公里以外不配送</p>
          3、<p class="fonts-14 help-center-p5 padding-T-25">上海地区</p>
          <p class="fonts-14 help-center-p2 padding-T-25">单笔订单金额≥200元，不限里程均免费配送（崇明三岛除外）。</p>
        </el-tab-pane>
        <el-tab-pane label="产品预定说明">
          <!--产品预定说明内容-->
          <p class="fonts-16 help-center-p1">产品预定说明</p>
          <p class="fonts-14 help-center-p5 padding-T-25 help-center-bl">商品详情页面图片仅供参考，实际产品请以实物为准。</p>
          <p class="fonts-14 padding-T-25">一、蛋糕预订说明</p>
          <p class="fonts-14 help-center-p2 padding-T-25">1、普通款式蛋糕请提前配送时间</p>
          <p class="fonts-14 help-center-p5 padding-T-25">三小时下单预订，最晚下单时间为当天18:00（当天订单最晚下单时间为18：00点），在此后的订单将视作明日订单处理。</p>
          <p class="fonts-14 padding-T-25">2、婚庆、寿庆类等层架类蛋糕，请提前3-7天下单预定。</p>
          <p class="fonts-14 padding-T-25">3、层架蛋糕需要收取器具押金（200元/层），在收货时支付给送货门店工作人员；使用完毕后在三日内归还相应门店，同时收回押金（归还时零件不能缺损）。</p>
          <p class="fonts-14 padding-T-25">4、蛋糕类产品只能由有元祖门店的城市在一定范围之内进行配送！对于节令时期（如：端午、中秋、春节等）繁忙时段门店无法进行配送服务时，建议至门店自提，具体时间将另行公告！</p>
          <p class="fonts-14 padding-T-25">一、蛋糕预订说明</p>
          <p class="fonts-14 help-center-p2 padding-T-25">蛋生报喜礼盒</p>
          <p class="fonts-14 help-center-p5 padding-T-25">10盒以上</p>
          <p class="fonts-14 help-center-p2 padding-T-25">需提前预定，数量多可拨打</p>
          <p class="fonts-14 help-center-p5 padding-T-25">021-59755678转分机6658</p>
          <p class="fonts-14 help-center-p2 padding-T-25">咨询</p>
          <p class="fonts-14  help-center-p2 padding-T-25">双休日可拨打元祖全国客服电话</p>
          <p class="fonts-14 help-center-p5 padding-T-25">4001103737</p>
        </el-tab-pane>
        <el-tab-pane label="订单修改/取消/退款说明">
          <!--订单修改/取消/退款说明内容-->
          <p class="fonts-16 help-center-p1">订单修改/取消/退款说明</p>
          <p class="fonts-14 help-center-p2 padding-T-25">1、在预计到货时间前</p>
          <p class="fonts-14 help-center-p5 padding-T-25">三小时</p>
          <p class="fonts-14 help-center-p2 padding-T-25">订单可以取消、修改地址或更改配送方式</p>
          <p class="fonts-14 help-center-p5 padding-T-25">（婚庆蛋糕及批量预约订购除外）。</p>
          <p class="fonts-14 help-center-p2 padding-T-25">2、未支付订单在<span class="help-center-spr">两小时</span>后将自动失效（无法继续支付，需重新下单）。</p>
          <p class="fonts-14 help-center-p2 padding-T-25">3、因为产品质量等问题引起的退单退款请致电<span class="help-center-spr">400-110-3737</span>申请，申请通过后相关款项将在7个工作日内通过原支付渠道退回。</p>
          <p class="fonts-14 padding-T-25">4、部分产品(如慕思蛋糕，冰激淋蛋糕，以及节令产品礼盒等)在下单后，如果当天门店暂时缺货，门店人员会与收货人协商，是否换同等价值的其它相同类产品。</p>
          <p class="fonts-14 padding-T-25">5、婚庆蛋糕及批量预约订购产品不能退货。</p>
        </el-tab-pane>
        <el-tab-pane label="送货、收货">
          <!--送货、收货-->
          <p class="fonts-16 help-center-p1">送货、收货</p>
          <p class="fonts-14 help-center-p2 padding-T-25">1、为了避免送到后本人不在的情况,在配送前之前会联系上收货人再配送。鉴于各城市交通状况不同，订单有可能造成提前或延后配送，敬请见谅！</p>
          <p class="fonts-14 padding-T-25">2、收货人可当场要求送货人员当面打开包装盒,进行验收，验收没有问题后再签收。若遇到蛋糕有破损或歪边现象可拒收，我们可以再安排分店制作一次并配送。产生拒收退款处理情况时，请将瑕疵蛋糕退给送货人员，如沟通中产生问题请拨打<span class="help-center-spr">400-110-3737</span>客服电话，我们将为您提供尽心的服务。</p>
          <p class="fonts-14 help-center-p2 padding-T-25">3、收货人如果当场没有进行检验而签收,我们视之为已进行验货签收。</p>
          <p class="fonts-14 help-center-p2 padding-T-25">4、我们原则上是要求本人签收,如果收货人要求我们其它人代收,那我们也会尊重收货人的意愿。</p>
          <p class="fonts-14 help-center-p2 padding-T-25">5、由于食品的特殊性，非我们的失误引起的运输途中变形、损坏以及非产品质量问题均不接受退换货。</p>
        </el-tab-pane>
        <el-tab-pane label="电子券购买/使用说明">
          <!--电子券购买/使用说明-->
          <p class="fonts-16 help-center-p1">电子券购买/使用说明</p>
          <p class="fonts-14 padding-T-25">1、官网购买的电子券可以在元祖官网、元祖门店、元祖微商城使用。</p>
          <p class="fonts-14 padding-T-25">2、电子券类别和适用说明（见下表）：</p>
          <table border="1" cellpadding="collapse" cellspacing="collapse" class="help-center-tb"  style="border-collapse:collapse;">
            <tr class="fonts-14">
              <td class="fonts-14">
                <p class="fonts-14 help-center-p4">商品类型</p>
              </td>
              <td>
                <p class="fonts-14 help-center-p4">券名</p>
              </td>
              <td>
                <p class="fonts-14 help-center-p4">可提领商品</p>
              </td>
              <td>
                <p class="fonts-14 help-center-p4">特别说明</p>
              </td>
            </tr>
            <tr class="fonts-14">
              <td rowspan="3">
                蛋糕券
              </td>
              <td>
                鲜奶蛋糕电子券
              </td>
              <td>
                鲜奶蛋糕
              </td>
              <td rowspan="3">
                <p class="fonts-14 help-center-tp1">售出不退还</p>
                <p class="fonts-14 help-center-tp1">使用时溢价部分不找零</p>
                <p class="fonts-14 help-center-tp1">每单限用一张</p>
              </td>
            </tr>
            <tr class="fonts-14">
              <td>
                慕思蛋糕电子券
              </td>
              <td>
                慕思蛋糕
              </td>
            </tr>
            <tr class="fonts-14">
              <td>
                冰淇淋蛋糕电子券
              </td>
              <td>
                冰淇淋蛋糕
              </td>
            </tr>
            <tr class="fonts-14">
              <td rowspan="3">
                通用券
              </td>
              <td rowspan="3">
                西点、常规礼盒电子券
              </td>
              <td>
                鲜奶、慕思、冰淇淋蛋糕
              </td>
              <td rowspan="3">
                <p class="fonts-14 help-center-tp1">售出不退还</p>
                <p class="fonts-14 help-center-tp1">使用时溢价部分不找零</p>
                <p class="fonts-14 help-center-tp1">不可和蛋糕券、专用券、抵扣券混用</p>
              </td>
            </tr>
            <tr class="fonts-14">
              <td>西点、水果礼盒、常规礼盒</td>
            </tr>
            <tr class="fonts-14">
              <td>不含中秋月饼礼盒以及端午龙粽礼盒</td>
            </tr>
            <tr class="fonts-14">
              <td rowspan="4">
                专用券
              </td>
              <td>
                水果电子券
              </td>
              <td>
                168型水果礼盒
              </td>
              <td rowspan="4">
                <p class="fonts-14 help-center-tp1">售出不退还</p>
                <p class="fonts-14 help-center-tp1">使用时溢价部分不找零</p>
                <p class="fonts-14 help-center-tp1">不可和蛋糕券、专用券、抵扣券混用</p>
              </td>
            </tr>
            <tr>
              <td>绿豆糕电子券</td>
              <td>绿豆糕礼盒</td>
            </tr>
            <tr>
              <td>中秋月饼券</td>
              <td>月饼礼盒</td>
            </tr>
            <tr>
              <td>端午龙粽券</td>
              <td>龙粽礼盒</td>
            </tr>
            <tr>
              <td rowspan="3">抵扣券</td>
              <td rowspan="3">满X抵扣Y元电子券</td>
              <td>鲜奶、慕思、冰淇淋蛋糕</td>
              <td rowspan="3">
                <p class="fonts-14 help-center-tp1">售出不退还</p>
                <p class="fonts-14 help-center-tp1">使用时溢价部分不找零</p>
                <p class="fonts-14 help-center-tp1">不可和蛋糕券、专用券、抵扣券混用</p>
              </td>
            </tr>
            <tr>
              <td>西点、水果礼盒、常规礼盒</td>
            </tr>
            <tr>
              <td>不含中秋月饼礼盒以及端午龙粽礼盒</td>
            </tr>
          </table>
          <p class="fonts-14 padding-T-25">3、注：电子券不可再兑换元祖实体卡券</p>
        </el-tab-pane>
        <el-tab-pane label="发票信息说明" class="help-center-scorll">
          <!--发票信息说明-->
          <p class="fonts-16 help-center-p1">发票信息说明</p>
          <p class="fonts-14 help-center-p1 padding-T-25">一、普通发票</p>
          <p class="fonts-14 padding-T-25">1、发票抬头 - 个人或公司名称。</p>
          <p class="fonts-14 padding-T-25">2、发票内容 - 机打发票，食品或者蛋糕。</p>
          <p class="fonts-14 padding-T-25">3、发票日期 - 以实际开票日期为准。</p>
          <p class="fonts-14 help-center-p2 padding-T-25">4、补开发票 - 订单完成后1个月内可以补开发票，补开发票只能按照补开当日及以后日期开票，无法开过期发票；补开请拨打<span class="help-center-spr">400-110-3737</span>客服电话并提供订单号。</p>
          <p class="fonts-14 help-center-p2 padding-T-25">5、发票寄送-单独寄送或者随货同行（视商品类型、配送方式不定）；通常在订单完成后的<span class="help-center-spr">5~7个工作日</span>从上海总部快递寄出。</p>
          <p class="fonts-14 padding-T-25">6、发票类型：增值税专用发票、普通发票。</p>
          <p class="fonts-14 padding-T-25">7、两种发票只能任选一种。</p>
          <p class="fonts-14 padding-T-25">8、增值税专用发票需提供增值税相关信息审核通过后方可开具；</p>
          <p class="fonts-14 help-center-p2 padding-T-25">9、信息提供错误导致的发票问题请客户自行承担（包含且不限于：时效、寄送费用等），详情可拨打<span class="help-center-spr">400-110-3737</span>客服电话进行咨询。</p>
          <p class="fonts-14 help-center-p1 padding-T-25">二、电子发票常见问题</p>
          <p class="fonts-14 padding-T-25">1.什么是电子发票？</p>
          <p class="fonts-14">A:电子发票就是电子形式的发票。电子发票符合国家税务机关的要求，在保管、查询、调阅时更加便捷。</p>
          <p class="fonts-14 padding-T-25">2.我是否可以使用电子发票报销？</p>
          <p class="fonts-14">A:请先确认所属公司是否支持电子发票报销，电子发票是税务局认可的有效凭证，支持企业报销。</p>
          <p class="fonts-14 padding-T-25">3.我可否定义电子发票的开票内容，如购买商品选择餐饮消费？</p>
          <p class="fonts-14">A:很抱歉，开票内容默认为产品明细，不允许修改。</p>
          <p class="fonts-14 padding-T-25">4.开票金额就是订单金额吗？</p>
          <p class="fonts-14">A:所有商品仅按顾客实际支付金额开具发票，但不包括电子券、积分等方式抵扣的金额部分，同时也不包含运费。</p>
          <p class="fonts-14 padding-T-25">.我的电子发票抬头写错了，需要重开发票如何操作？</p>
          <p class="fonts-14">A:很抱歉，已开具的电子发票不支持重开发票</p>
          <p class="fonts-14 padding-T-25">6.开具电子发票后是否可以换开纸质发票？</p>
          <p class="fonts-14">A:很抱歉，已开具的电子发票不可以换纸质发票</p>
          <p class="fonts-14 padding-T-25">7.顾客下单后，什么时间能获得电子发票？</p>
          <p class="fonts-14">A:一般在整单签收后5个工作日内即可获得电子发票。</p>
          <p class="fonts-14">请在会员中心——订单历史记录 找到申请电子发票的订单查看。</p>
          <p class="fonts-14 padding-T-25">8.已经收到的电子发票，请问还可以修改发票内容吗？</p>
          <p class="fonts-14">A:很抱歉，已收到的电子发票不能再修改发票内容</p>
          <p class="fonts-14 padding-T-25">9.顾客在下单时选择电子发票，在未开具前，顾客能否修改发票信息？</p>
          <p class="fonts-14">A:很抱歉，一旦提交电子发票信息后就不能修改任何内容。</p>
        </el-tab-pane>
      </el-tabs>
    </div>
    <BottomNav/>
  </div>
</template>
<script>
import TopNavigation from '@/components/public/TopNavigation.vue' // 顶部
import TopBanner from '@/components/public/TopBanner.vue' // 顶部导航
import search from '@/components/public/search.vue' // 搜索
import ClassNav from '@/components/public/ClassNav.vue' // banner导航
import BottomNav from '@/components/public/BottomNavigation.vue' // 公共底部
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
      tabPosition: 'left'
    }
  }
}
</script>
<style scoped>
  /*导航样式*/
  .help-center-a{
    width: 1199px;
    height: 45px;
    margin: 10px auto;
  }
  /deep/.el-tabs__active-bar .is-left{
    background-color: transparent!important;
  }
  /*内容部分*/
  .content{
    max-width: 100%;
  }
  .help-center-hc{
    width: 1199px;
    height: 1000px;
    margin: 0 auto;
    background-color: white;
    margin-bottom: 20px;
  }
  /*侧边导航样式*/
  .help-center-h1{
    width: 187.78px;
    font-size: 18px;
    letter-spacing: 1px;
    display: inline-block;
    border-right: 1px solid gainsboro;
    /*text-align: center;*/
    padding-left: 19px;
    padding-bottom: 5px;
  }
  .tab-height{
    height: 970px;
  }
  /deep/.el-tabs--left .el-tabs__nav-wrap.is-left::after, .el-tabs--left .el-tabs__nav-wrap.is-right::after, .el-tabs--right .el-tabs__nav-wrap.is-left::after, .el-tabs--right .el-tabs__nav-wrap.is-right::after {
    height: 100%;
    width: 1px;
    bottom: auto;
    top: 0;
  }
  /deep/.el-tabs--left .el-tabs__item.is-left {
   text-align: left;
    border-bottom: 1px dotted gainsboro;
  }
  /deep/.el-tabs__item.is-active {
    color: #e9004f;
    background-color: #f1ebf6;
  }
  /deep/.el-tabs__item:hover {
    color: #e9004f;
    background-color: #f1ebf6;
    cursor: pointer;
  }
  /deep/.el-tabs__active-bar{
    background-color: transparent;
  }
  /deep/.el-tabs__content {
    overflow: hidden;
    position: relative;
    padding-left: 30px;
  }
  /*配送范围及服务费文字样式*/
  .help-center-p1{
    font-weight: bold;
    /*margin-top: 10px;*/
    letter-spacing: 3px;
  }
  .help-center-p2{
    /*margin-top: 25px;*/
    display: inline-block;
    letter-spacing: 1px;
  }
  /*配送范围及服务费表格样式*/
  .help-center-tb{
    width: 950px;
    height: 320px;
    border-collapse: collapse;
    border: 1px solid gainsboro;
    margin-top: 20px;
  }
  .help-center-p3{
    color: #e9004f;
    display: inline-block;
    padding-left: 15px;
  }
  .help-center-p4,.help-center-p5{
    font-weight: bold;
    display: inline;
    letter-spacing: 1px;
  }
  .help-center-p5{
    color: #e9004f;
  }
  .help-center-tb{
    text-align: center;
  }
  .help-center-red{
    color: #e9004f;
  }
  /*订单修改..*/
  .help-center-bl{
    display: block;
  }
  .help-center-spr{
    color: #e9004f;
    font-weight: bold;
  }
  /*发票信息说明*/
  .help-center-scorll{
    height: 970px;
    overflow-y: scroll;
  }
  /*电子券购买*/
  .help-center-tp1{
    text-align: left;
    margin-left: 20px;
  }
  >>>.el-tabs__item:hover {
    background-color: #f1ebf6;
    color: #e9004f;
    cursor: pointer;
  }
  >>>.el-tabs__active-bar{
    background-color: transparent;
  }
  >>>.el-tabs__item.is-active {
    color: #e9004f;
    background-color: #f1ebf6;
  }
</style>
