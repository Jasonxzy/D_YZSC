<template>
  <div class="Collectionlist">
    <div class="Collectionlist-box">
      <span>订单列表</span>
    </div>
    <div class="Collectionlist-list">
      <p class="margin margin-top">查看你的列表</p>
      <ul>
        <span class="margin">找到1个订单</span>
        <p>
          <span>排序依据:</span>
          <span class="margin">
            <select>
              <option>日期</option>
              <option>订单号</option>
            </select>
          </span>
        </p>
      </ul>
      <div class="table">
        <table>
          <tr class="table-box">
            <td>订单号</td>
            <td>订单状态</td>
            <td>订单提交日期</td>
            <td>总计</td>
            <td>操作</td>
          </tr>
          <tr>
            <td>454572185578454</td>
            <td>订单提交</td>
            <td>2015年4月20日 下午1:24</td>
            <td>￥2520元</td>
            <td>
              <router-link  to="/Collectionlist/derlist"><a>查看</a></router-link>
              <a>立即支付</a>
              <a> 取消</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import {Collection} from 'api/request'
export default {
  data () {
    return {

    }
  },
  mounted () {
    Collection((res) => {
      console.log("根据用户获取收藏信息")
      console.log(res)
    })
  }
}
</script>
<style scoped>
.Collectionlist{
  width: 940px;
  min-height: 500px;
  border: 1px solid #cccccc;
  margin: auto;
}
.Collectionlist-box{
  width: 800px;
  margin: auto;
  border-bottom:1px solid #cccccc;
  margin-top: 30PX;
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
.Collectionlist-list{
  width: 800px;
  margin: auto;
}
.table{
  margin-top: 20px;
}
.Collectionlist-list ul{
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.Collectionlist-list span,p{
  display: inline-block;
  margin-left: 40px;
}
.Collectionlist-list .margin{
  margin-left: 0;
}
.select{
  font-size: 14px;
  width: 60px;
}
option{
  font-size: 12px;
}
.Collectionlist-list .margin-top{
  margin-top: 14px;
  font-size: 14px;
  font-weight: bold;
}
</style>
