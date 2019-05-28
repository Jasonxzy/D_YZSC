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
    <!--购物车-->
    <div id="car1" class="display">
      <div class="Cartop fonts-12 allcolor gray">
        <router-link to="/">主页</router-link>
        >
        <a href="#">购物车</a>
      </div>
      <div class="Cartsteps">
        <ol class="steps">
          <li class="white">1.购物车</li>
          <li>2.提交订单信息</li>
          <li>3.提交成功</li>
          <li>4.在线支付</li>
        </ol>
      </div>
      <div class="Carcontent">
        <table class="carlist">
          <tbody>
          <tr>
            <th>商品</th>
            <th>单价</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
          <tr v-for="(first, index) in shopc" :key="index">
            <td>
              <div class="cartproduct">
                <a href="#" class="cartproduct-img"  >
                  <img :src="first.goodsinfo.goodsimgses.imgSrc" />
                </a>
                <strong>
                  <a href="#">{{first.goodsinfo.ginfoName}}</a>
                </strong>
                <p>规格：<span>{{first.goodsinfo.ginfoSpecs}}</span>  夹馅：<span>{{first.goodsinfo.ginfoFavor}}</span></p>
              </div>
            </td>
            <td>
              <strong class="red fontw">¥{{first.goodsinfo.ginfoPrice}}</strong>
            </td>
            <td>
              <div class="cartnumber">
                <el-input-number v-model="first.shAmount" @change="handleChange" :min="0"></el-input-number>
              </div>
            </td>
            <td>
              <a href="javascript:void(0);" @click="deleteList(index)"  class="remove">移除</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="Carbottom">
        <div class="carbox float-r margin-R-15">
          <h3>订单合计</h3>
          <dl>
            <dt>商品数量总计：</dt>
            <dd>{{total.number}}</dd>
            <dt>商品金额总计（不含运费）：</dt>
            <dd><strong>¥{{total.price}}</strong></dd>
          </dl>
          <div class="statistical">总计： ¥{{total.price}}</div>
          <div class="carbtn">
            <router-link to="/">继续购物</router-link>
            <a href="javascript:void(0);" @click="jiesuan">结算</a>
          </div>
        </div>
      </div>
      <span class="clear"></span>
    </div>
    <!--提交订单-->
    <div id="car2" class="display2">
      <div class="Cartop fonts-12 allcolor gray">
        <router-link to="/">主页</router-link>
        >
        <a href="#">结账</a>
        >
        <a href="#">核对订单信息</a>
      </div>
      <div class="Cartsteps">
        <ol class="steps2">
          <li>1.购物车</li>
          <li class="white">2.提交订单信息</li>
          <li>3.提交成功</li>
          <li>4.在线支付</li>
        </ol>
      </div>
      <div class="addressee">
        <h3><span>收件人信息</span></h3>
        <ul>
          <li>
            <span class="btn float-r">
              <em>默认地址</em>
              <!--<a href="#" class="btnModify displayn">修改</a>-->
            </span>
            <input type="radio" name="address" checked />
            <span class="name">杨明松</span>
            <span>
              <em class="provinceMsg"></em><em class="cityMsg">重庆市</em><em class="regionMsg">沙坪坝区</em><em class="addressMsg"> 西永大道西科公寓</em>
            </span>
            <span class="mobileMsg">15285270087</span>
          </li>
        </ul>
        <tr v-cloak v-for="(item, index) in lists" :key="index">
          <span class="btn float-r">
            <em>默认地址</em>
            <a href="#" class="btnModify displayn">修改</a>
          </span>
          <input type="radio" name="address"/>
          <td class="padding-L-15">{{item.addName}}</td>
          <td class="padding-L-15">{{item.address}}</td>
          <td class="tr">{{item.addId}}</td>
          <td class="fo"></td>
          <td class="padding-L-25">{{item.telphone}}</td>
        </tr>
        <div class="addadress">
          <el-button type="text" @click="dialogVisible = true">
           <a href="javascript:void(0);" class="btn_add_address">新增收货人地址</a>
          </el-button>
            <el-dialog title="新增收货人地址" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
              <div class="creat-address">
                <form>
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="收货人" prop="name">
                      <el-input v-model="ruleForm.name" placeholder="收货人姓名"></el-input>
                    </el-form-item>
                    <el-form-item prop="address" label="详细地址">
                      <el-input v-model="ruleForm.address" placeholder="请输入你的详细地址"></el-input>
                    </el-form-item>
                    <el-form-item prop="Postal" label="邮政编码">
                      <el-input v-model="ruleForm.Postal" placeholder="请输入你的邮政编码"></el-input>
                    </el-form-item>
                    <el-form-item prop="phone" label="手机号">
                      <el-input v-model="ruleForm.phone" placeholder="请输入你的手机号"></el-input>
                    </el-form-item>
                    <div></div>
                    <el-form-item prop="mailbox" label="邮箱">
                      <el-input v-model="ruleForm.mailbox" placeholder="请输入你的邮政编码"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('ruleForm')" class="fl">保存地址</el-button>
                      <!--<el-button  class="fl">取消</el-button>-->
                    </el-form-item>
                  </el-form>
                </form>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">取消</el-button>
              </span>
            </el-dialog>
        </div>
      </div>
      <div class="Shoppinglist">
        <h3 class="title"><span>购物清单</span></h3>
        <p class="float-r"><a class="gray" @click="recar1">返回购物车修改商品</a></p>
        <table>
          <tbody>
            <tr>
              <th>商品</th>
              <th>单价</th>
              <th>数量</th>
              <th>总计</th>
            </tr>
            <tr v-for="(first, index) in shopc" :key="index">
              <td>
                <div class="cartProduct">
                  <strong><a href="#" class="gray">{{first.goodsinfo.ginfoName}}</a></strong>
                  <p>规格：<span>{{first.goodsinfo.ginfoSpecs}}</span>夹馅<span>{{first.goodsinfo.ginfoFavor}}</span></p>
                </div>
              </td>
              <td><em>¥{{first.goodsinfo.ginfoPrice}}</em></td>
              <td>{{first.shAmount}}</td>
              <td><em>¥{{first.goodsinfo.ginfoPrice * first.shAmount}}</em></td>
            </tr>
            <tr>
              <td><div class="distribution">
                <h4>配送方式：</h4>
                <ul>
                  <li><input type="radio" checked/>门店配送</li>
                </ul>
              </div></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div class="birthdayCandles">
          <span>
            <i class="red">*</i>生日蜡烛：
            <input name="cack" type="radio" checked="checked"/>需要
            <input name="cack" type="radio"/>不需要
          </span>
        </div>
        <form class="form-actions">
          <span class="float-l">备注：</span>
          <span><input type="text" placeholder="生日快乐，有什么需要请备注.."/></span>
        </form>
      </div>
      <div class="PaymentType">
        <h3 class="title"><span>支付方式</span></h3>
        <div class="box">
          <p>温馨提示：使用支付宝或银联支付更快捷</p>
          <input type="radio" checked/>支付宝
        </div>
      </div>
      <div class="Settlement">
        <h3 class="title"><span>订单结算</span></h3>
        <div class="invoice">
          <h4><input type="radio" checked/>不需要发票</h4>
        </div>
        <div class="Payment">
          <div class="settleDIV">
            <h4>最终订单金额：</h4>
            <dl>
              <dt>商品金额：</dt>
              <dd>¥{{total.price}}</dd>
              <dt>运费：</dt>
              <dd>免费</dd>
              <dt>折扣：</dt>
              <dd>¥0.00</dd>
              <dt>应付总额：</dt>
              <dd>¥{{total.price}}</dd>
            </dl>
          </div>
          <form><a href="#" @click="xiadan">下订单</a> </form>
        </div>
      </div>
    </div>
    <!--提交成功-->
    <div id="car3" class="display3">
      <div class="Cartop fonts-12 allcolor gray">
        <router-link to="/">主页</router-link>
        >
        <a href="#">结账</a>
        >
        <a href="#">核对订单信息</a>
      </div>
      <div class="Cartsteps">
        <ol class="steps2">
          <li>1.购物车</li>
          <li>2.提交订单信息</li>
          <li class="white">3.提交成功</li>
          <li>4.在线支付</li>
        </ol>
      </div>
      <div class="OrderTips">
        <div class="tips">
          <img src="https://mall.ganso.com.cn/_ui/hepimages/cart/icon_ok.gif"/>
          恭喜您订单提交成功
        </div>
        <div class="OrderMinxi">
          <p >订单编号：2019051802834104 应付款项：
            <strong>¥258.00</strong>
          </p>
          <p class="hei">
            您选择的支付方式为：<img src="https://mall.ganso.com.cn/_ui/hepimages/submit/alipay.jpg">
            <router-link to="/">立即支付</router-link>
          </p>
          <p >如果您在购物中遇到任何问题请及时咨询我们的客服人员，或拨打400-110-3737</p>
        </div>
      </div>
    </div>
    <BottomNav/>
  </div>
</template>
<script>
import {shopcart, deleteList, address} from 'api/request_yms'
import TopNavigation from '../public/TopNavigation.vue'
import TopBanner from '../public/TopBanner.vue'
import search from '../public/search.vue'
import ClassNav from '../public/ClassNav.vue'
import BottomNav from '../public/BottomNavigation.vue'
import qs from 'qs'
export default {
  name: 'demo',
  components: {
    TopNavigation,
    TopBanner,
    search,
    ClassNav,
    BottomNav
  },
  data () {
    var address = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('地址不能为空'))
      } else {
        var reg = /[\u4e00-\u9fa5]/
        if (reg.test(value) === false) {
          return callback(new Error('请输入正确的地址'))
        } else {
          callback()
        }
      }
    }
    var name = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('名字不能为空'))
      } else {
        var reg = /[\u4e00-\u9fa5]/
        if (reg.test(value) === false) {
          return callback(new Error('名字必须是中文'))
        } else {
          callback()
        }
      }
    }
    var sex = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('名字不能为空'))
      } else {
        var reg = /[\u4e00-\u9fa5]/
        if (reg.test(value) === false) {
          return callback(new Error('名字必须是中文'))
        } else {
          callback()
        }
      }
    }
    var Postal = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮政编码不能为空'))
      } else {
        var reg = /\d{6}/
        if (reg.test(value) === false) {
          return callback(new Error('请输入真确的邮政编码'))
        } else {
          callback()
        }
      }
    }
    var phone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机不能为空'))
      } else {
        var reg = /0?(13|14|15|18)[0-9]{9}/
        if (reg.test(value) === false) {
          return callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      }
    }
    var mailbox = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      } else {
        var reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
        if (reg.test(value) === false) {
          return callback(new Error('请输入正确的邮箱'))
        } else {
          callback()
        }
      }
    }
    return {
      dialogVisible: false,
      ruleForm: {
        name: '',
        date1: '',
        delivery: false,
        type: [],
        address: '',
        Postal: '',
        phone: '',
        mailbox: ''
      },
      rules: {
        name: [
          { required: true, validator: name, trigger: 'blur' },
          { min: 3, max: 5, message: '长度为 3 到 6 个字符', trigger: 'blur' }
        ],
        address: [
          { required: true, validator: address, trigger: 'blur' }
        ],
        Postal: [
          { required: true, validator: Postal, trigger: 'blur' },
          { max: 6, message: '长度为 6 个字符', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        phone: [
          { required: true, validator: phone, trigger: 'blur' },
          { max: 11, message: '长度为 11 个字符', trigger: 'blur' }
        ],
        mailbox: [
          { required: true, validator: mailbox, trigger: 'blur' },
          // { max: 11, message: '长度为 11 个字符', trigger: 'blur' }
        ],
        sex: [
          { required: true, validator: sex, trigger: 'blur' },
        ],
        city: [
          { required: true, validator: name, trigger: 'blur' },
          {}
        ]
      },
      api: 'http://huangchuan.natapp1.cc/Canso/img/',
      lists: [{
        addName: '张德帅',
        address: '贵州省贵阳市云岩区',
        email: '123@qq.com',
        sex: '男',
        telphone: '15166699966'
      }]
    }
  },
  computed: {
    shopc: function () {
//      console.log(this.$store.state.cart.cartLists)
      return this.$store.state.cart.shopc
    },
    total: function () {
      return this.$store.getters.total
    }
  },
  mounted () {
    this.$store.dispatch('getCartList')
    shopcart((res) => {
      console.log('购物车页面接口')
      console.log(res)
      console.log('购物车页面接口')
      this.$store.commit('changeCartLists', res.shoppingcart || [])
    })
    let data = {addId: this.$route.query.addId}
    address(data, (res) => {
      console.log('地址：')
      console.log(res.address)
      this.address = res.address
      console.log('地址')
    })
  },
  //  computed: {
  //    lists: () => this.$store.state.cart.cartLists
  //  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleChange (value) {
      console.log(value)
    },
//    sel: function (data) {
//      this.citydata = data.province.value + data.city.value + data.area.value
//      console.log(this.citydata)
//    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          address({
            'address_addName': this.ruleForm.name,
            'address_address' : this.ruleForm.address,
            'address_zipcode': this.ruleForm.Postal,
            'address_phone':this.ruleForm.phone,
            'address_email':this.ruleForm.mailbox
          },(res) => {
            console.log(res)
            this.$router.push({path: '/Member/ReceivingAddress'})
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    jiesuan: function () {
      let car1 = document.querySelector('#car1')
      let car2 = document.querySelector('#car2')
      let car3 = document.querySelector('#car3')
      car1.style.display = 'none'
      car2.style.display = 'block'
      car3.style.display = 'none'
    },
    recar1: function () {
      let car1 = document.querySelector('#car1')
      let car2 = document.querySelector('#car2')
      let car3 = document.querySelector('#car3')
      car1.style.display = 'block'
      car2.style.display = 'none'
      car3.style.display = 'none'
    },
    xiadan: function () {
      let car1 = document.querySelector('#car1')
      let car2 = document.querySelector('#car2')
      let car3 = document.querySelector('#car3')
      car1.style.display = 'none'
      car2.style.display = 'none'
      car3.style.display = 'block'
    },
    deleteList: function (index) {
      console.log(555)
      let data = {shoppingId: this.shopc[index].shId}
//      let shopid = this.shopc[index].shId
      console.log(this.shopc[index].shId)
      deleteList(data, (res) => {
         this.shopc.splice(index, 1)
         this.$store.commit('changeCartLists', this.shopc || [])
//        this.$store.commit('changeCartLists', this.shopc)
      })
    }
  },
//  components: {
//    City
//  }
}
</script>
<style lang="less"  scoped>
  /*购物车*/
  .display{
    /*display: none;*/
    .Cartop{
      width: 1199px;
      height: 45px;
      line-height: 45px;
      margin: 0 auto;
      a{
        color:#4F4F4F;
        &:hover{
          color:#E93D6D;
        }
      }
    }
    .Cartsteps{
      margin: 0 auto 15px auto;
      width:1198px;
      height: 31px;
      line-height: 31px;
      overflow: hidden;
      border-radius: 10px;
      /*background-color: #e4004f;*/
      ol{
        list-style-type: none;
        float: left;
        width: 100%;
        background: url("../public/img/stepbg.jpg");
        li{
          float: left;
          width: 25%;
          text-align: center;
          font-size: 14px;
        }
      }
    }
    .Carcontent{
      width: 1198px;
      margin: 0 auto;
      .carlist{
        width: 100%;
        border: 0;
        border-spacing: 0;
        tbody{
          display: table-row-group;
          vertical-align: middle;
          border-color: inherit;
          tr{
            th{
              width: 460px;
              text-align: center;
              font-size: 12px;
              line-height: 37px;
              background-color: #e6e4e5;
            }
            td{
              padding: 16px 0;
              text-align: center;
              border-bottom: 1px solid #c7c7c7;
              .cartproduct{
                padding-left: 20px;
                box-sizing: content-box;
                min-height: 120px;
                height: auto;
                line-height: 32px;
                text-align: left;
                .cartproduct-img{
                  float: left;
                  width: 118px;
                  height: 118px;
                  margin-right: 40px;
                  border: 1px solid #ccc;
                  display: inline;
                  img{
                    width: 100%;
                    height: 100%;
                    display: block;
                    border: none;
                    vertical-align: middle;
                  }
                }
                strong{
                  font-weight: 700;
                  line-height: 21px;
                  padding-top: 28px;
                  display: block;
                  a{
                    color: #4f4f4f;
                    text-decoration: none;
                  }
                }
                p{
                  vertical-align:baseline;
                  span{
                    color: #e9004f;
                  }
                }
              }
              .cartnumber{
                .el-input-number{
                  width: 120px;
                  /deep/.el-input-number__decrease, /deep/.el-input-number__increase{
                    width: 35px;
                  }
                }
              }
              .remove{
                padding-left: 20px;
                background: url(http://mall.ganso.com.cn/_ui/hepimages/cart/icon_del.gif) no-repeat left center;
                color: #4f4f4f;
              }
            }
          }
        }
      }
    }
    .Carbottom{
      width: 1198px;
      margin: 0 auto 30px auto;
      .carbox{
        width: 340px;
        display: inline;
        h3{
          height: 36px;
          line-height: 36px;
          overflow: hidden;
          font-weight: normal;
          border-bottom: 1px solid #c7c7c7;
          font-size: 14px;
        }
        dl{
          width: 340px;
          line-height: 31px;
          position: relative;
          border-bottom: 1px solid #c7c7c7;
          font-weight: normal;
          dt{
            line-height: 31px;
            position: absolute;
            left: 0;
            font-weight: normal;
          }
          dd{
            line-height: 31px;
            width: 125px;
            text-align: right;
            position: relative;
            padding-left: 215px;
            box-sizing: content-box;
            font-weight: normal;
            strong{
              color: #c7023a;
            }
          }
        }
        .statistical{
          height: 32px;
          line-height: 32px;
          overflow: hidden;
        }
        .carbtn{
          text-align: right;
          padding-top: 14px;
          a{
            width: 80px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #fff;
            margin-left: 23px;
            background-color:#de5356;
            display: inline-block;
          }
        }
      }

    }
  }
  /*提交订单*/
  .display2 {
    display: none;
    .Cartop {
      width: 1199px;
      height: 45px;
      line-height: 45px;
      margin: 0 auto;
      a {
        color: #4F4F4F;
        &:hover {
          color: #E93D6D;
        }
      }
    }
    .Cartsteps {
      margin: 0 auto 15px auto;
      width: 1198px;
      height: 31px;
      line-height: 31px;
      overflow: hidden;
      border-radius: 10px;
      ol {
        list-style-type: none;
        float: left;
        width: 100%;
        background: url("../public/img/stepbg.jpg");
        background-position: 0px -33px;
        li {
          float: left;
          width: 25%;
          text-align: center;
          font-size: 14px;
        }
      }
    }
    .addressee {
      margin: 0 auto -1px;
      padding: 12px 12px 12px 185px;
      width: 1000px;
      position: relative;
      min-height: 84px;
      background-color: #f9f9f9;
      border: 1px solid #c7c7c7;
      box-sizing: content-box;
      h3 {
        width: 171px;
        height: 100%;
        text-align: center;
        position: absolute;
        font-size: 14px;
        font-weight: normal;
        left: 0px;
        margin-top: -12px;
        background: #e6e4e5 url(https://mall.ganso.com.cn/_ui/hepimages/cart/line_x.jpg) no-repeat left top;
        span {
          padding-top: 29px;
          display: block;
        }
      }
      ul {
        width: 955px;
        list-style-type: none;
        li {
          padding: 0 13px;
          height: 24px;
          line-height: 24px;
          overflow: hidden;
          margin-bottom: 3px;
          &:hover {
            background-color: #e6e4e5;
          }
          span {
            margin: 0 8px;
            a {
              margin: 0 11px;
            }
          }
        }
        li:hover .displayn {
          display: block;
          float: right;
          color: #4F4F4F;
        }
      }
      tr {
        width: 995px;
        height: 24px;
        float: left;
        padding: 0 13px;
        input {
          float: left;
        }
        &:hover {
          background-color: #e6e4e5;
        }
        span {
          /*margin-top: -15px;*/
          margin: 0 45px;
          a {
            margin: 0 11px;
          }
          &:hover .displayn {
            display: block;
            float: right;
            color: #4F4F4F;
          }
        }
      }
      .btn_add_address{
        margin: 10px 0 0 30px;
        width: 109px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        background-color: #e7e5e6;
        display: block;
        color: #4f4f4f;
        &:hover{
          color: #E93D6D;
        }
      }
      /deep/.el-dialog__header{
        padding: 5px 10px 0px;;
      }
      /deep/.el-dialog__body{
        .el-dialog__title{
          font-size: 16px;
        }
      }
      /deep/.el-dialog__footer{
        margin-top: -30px;
      }
      .creat-address{
        height: 320px;
        width: 674px;
        left: 271px;
        top: 422px;
        display: block;
        z-index: 1000;
        padding: 10px;
        /deep/.el-input{
          width: 90%;
        }
      }
    }
    .Shoppinglist{
      margin: 0 auto -1px;
      padding: 12px 12px 12px 185px;
      width: 1000px;
      position: relative;
      border: 1px solid #c7c7c7;
      box-sizing: content-box;
      .title{
        width: 171px;
        height: 100%;
        text-align: center;
        position: absolute;
        font-size: 14px;
        font-weight: normal;
        left: 0px;
        margin-top: -12px;
        background: #e6e4e5 url(https://mall.ganso.com.cn/_ui/hepimages/cart/line_x.jpg) no-repeat left top;
        background-color: #e6e4e5;
        background-position: left bottom;
      }
      span{
        padding-top: 29px;
        display: block;
      }
      table{
        background-color: #ffffff;
        border-top: 1px solid #d2d2d2;
        border-right: 1px solid #d2d2d2;
        border-left: 1px solid #d2d2d2;
        border-collapse: inherit;
        border-spacing: 0;
        margin-top: 18px;
        tbody{
          display: table-row-group;
          vertical-align: middle;
          border-color: inherit;
          tr{
            display: table-row;
            vertical-align: inherit;
            border-color: inherit;
            th{
              width: 249px;
              text-align: center;
              line-height: 37px;
              background-color: #e6e4e5;
              padding: 0;
            }
            td{
              padding: 5px 20px;
              line-height: 32px;
              text-align: center;
              min-height: 57px;
              border-bottom: 1px solid #cccccc;
              .cartProduct {
                width: 249px;
                line-height: 30px;
                text-align: left;
                strong{font-weight: 700}
                p{
                  span{
                    padding: 0;
                    display: inline;
                  }
                }
              }
              .distribution{
                text-align: left;
                h4{
                  float: left;
                  font-weight: normal;
                  margin-right: 21px;
                  display: inline;
                  line-height: 32px;
                }
                ul{
                  float: left;
                  overflow: hidden;
                  list-style-type: none;}
              }
              em{
                color: #e9004f;
              }
            }
          }
        }

      }
      .birthdayCandles{
        margin-top: 15px;
        height: 22px;
        line-height: 22px;
        span{
          padding-top: 0;
          display: inline;
            input{
              height: 12px;
              width: 12px;
              display: inline-block;
              margin: -2px 0 0;
              line-height: normal;
            }

        }
      }
      .form-actions{
        span{
          input{
            width: 520px;
          }
        }
      }
    }
    .PaymentType{
      margin: 0 auto -1px;
      padding: 12px 12px 12px 185px;
      width: 1000px;
      position: relative;
      min-height: 85px;
      border: 1px solid #c7c7c7;
      box-sizing: content-box;
      .title{
        width: 171px;
        height: 100%;
        text-align: center;
        position: absolute;
        font-size: 14px;
        font-weight: normal;
        left: 0px;
        margin-top: -12px;
        background: #e6e4e5 url(https://mall.ganso.com.cn/_ui/hepimages/cart/line_x.jpg) no-repeat left top;
        span {
            padding-top: 29px;
            display: block;
          }

      }
      .box{ padding: 13px 13px 0;}
    }
    .Settlement{
      padding: 12px 12px 12px 185px;
      width: 1000px;
      position: relative;
      margin: 0 auto;
      border: 1px solid #c7c7c7;
      height: 250px;
      box-sizing: content-box;
      .title{
        width: 171px;
        height: 100%;
        text-align: center;
        position: absolute;
        font-size: 14px;
        font-weight: normal;
        left: 0px;
        margin-top: -12px;
        background: #e6e4e5 url(https://mall.ganso.com.cn/_ui/hepimages/cart/line_x.jpg) no-repeat left top;
        background-color: #e6e4e5;
        background-position: left bottom;
        span{
          padding-top: 29px;
          display: block;
        }
      }
      .invoice{
        float: left;
        width: 559px;
        height: 212px;
        padding-left: 13px;
        border-right: 1px solid #cdcdcd;
        h4{
          font-size: 14px;
          font-weight: normal;
          margin-bottom: 15px;
        }
      }
      .Payment{
        float: right;
        width: 341px;
        margin-right: 34px;
        display: inline;
        .settleDIV{
          h4{
            height: 35px;
            line-height: 35px;
            overflow: hidden;
          }
          dl{
            width: 149px;
            line-height: 33px;
            position: relative;
            margin-bottom: 10px;
            padding-left: 192px;
            box-sizing: content-box;
            dt{
              line-height: 33px;
              position: absolute;
              left: 0px;
            }
            dd{
              line-height: 33px;
              text-align: right;
            }
          }

        }
        form{
          a{
            width: 78px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            color: #fff;
            padding: 1px;
            background-color: #de5251;
            display: inline-block;
            float: right;
            border-radius: 0;
            font-size: 12px;
            border: none;
          }
        }
      }
    }
  }
  /*提交成功*/
  .display3{
    display: none;
    .Cartop{
      width: 1199px;
      height: 45px;
      line-height: 45px;
      margin: 0 auto;
      a{
        color:#4F4F4F;
        &:hover{
          color:#E93D6D;
        }
      }
    }
    .Cartsteps{
      margin: 0 auto 15px auto;
      width:1198px;
      height: 31px;
      line-height: 31px;
      overflow: hidden;
      border-radius: 10px;
      /*background-color: #e4004f;*/
      ol{
        list-style-type: none;
        float: left;
        width: 100%;
        background: url("../public/img/stepbg.jpg");
        background-position: 0px -66px;
        li{
          float: left;
          width: 25%;
          text-align: center;
          font-size: 14px;
        }
      }
    }
    .OrderTips{
      width: 1198px;
      margin: 0 auto;
      padding-top: 44px;
      border: 1px solid #cdcdcd;
      .tips{
        height: 74px;
        line-height: 74px;
        text-align: center;
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 33px;
        margin-bottom: 33px;
        img{
          border: none;
          vertical-align: middle;
        }
      }
      .OrderMinxi{
        padding: 74px 55px;
        width: 1048px;
        margin: 0 auto;
        border-top: 1px solid #c7c7c7;
        box-sizing: content-box;
        .hei{
          height: 40px;
        }
        p{
          height: 30px;
          line-height: 30px;
          margin-bottom: 17px;
          strong{
            font-size: 18px;
            font-weight: normal;
            color: #e70050;
          }
          img{
            width: 150px;
            border: none;
            vertical-align: middle;
          }
          a{
            width: 100px;
            text-align: center;
            color: #fff;
            margin-left: 23px;
            background-color: #de5356;
            border-radius: 0;
            display: inline-block;
          }
        }
      }
    }
  }
</style>
