<template>
  <div class="Collectionlist">
    <div class="Collectionlist-box">
      <span>我的收藏夹</span>
      <span class="lengthSc">我有{{CollLength.length}}个收藏</span>
    </div>
    <div class="Ordrlist-box" v-for="(i,index) in CollectionList" :key="index" :id="i.colId">
      <div class="Ordrlist-img fl">
        <img :src="api+i.goodsinfo.ginfoId+'.jpg'">
        <div>
          <p>{{i.goodsinfo.ginfoName}}</p>
        <span>{{i.goodsinfo.ginfoSynopsis}}</span>
        </div>
      </div>
      <div class="Ordrlist-text fl">
        <p>
          <el-button :plain="true" @click="open3(i.goodsinfo.ginfoId)">添加到购物车</el-button>
        </p>
        <p class="DeleteGoods" @click="DeleteGoods(i.colId)">删除</p>
      </div>
      <span class="clear"></span>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
import {Collection} from 'api/request'
import {meraddCart} from 'api/request'
import {DeleteGoods} from 'api/request'
export default {
  data () {
    return {
      api: 'http://huangchuan.natapp1.cc/Canso/img/',
      CollectionList: [],
      CollLength: []
    }
  },
  methods: {
    open3 (index) {
      this.$notify({
        title: '成功',
        message: '添加成功',
        type: 'success'
      })
      let data = {userId: window.localStorage.getItem('userId'), ginfoId: index}
      meraddCart(data, (res) => {
        console.log(res)
      })
    },
    DeleteGoods: function (index) {
      let data = {colId: index}
      alert('删除成功')
      DeleteGoods(data, (res) => {
        console.log(res)
      })
    }
  },
  mounted () {
    let data = {userid: window.localStorage.getItem('userId')}
    Collection(data, (res) => {
      console.log('根据用户获取收藏信息')
      console.log(res.collectlist)
      this.CollectionList = res.collectlist
      this.CollLength = res.collectlist
    })
  }
}
</script>
<style scoped>
  .www{
    padding-top: 10px;
  }
.Ordrlist-tex-p:hover{
  transition: color 200ms linear 0s,background-color 200ms linear 0s,border-color 200ms linear 0s;
  cursor: pointer;
}
.DeleteGoods{
  color: #4f4f4f;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
.DeleteGoods:hover{
  transition: color 200ms linear 0s,background-color 200ms linear 0s,border-color 200ms linear 0s;
  color: #e93d6d;
  cursor: pointer;
}
.lengthSc{
  padding-left: 500px;
  color: #4f4f4f;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }
.Collectionlist{
  width: 100%;
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
.Ordrlist-box{
  width: 900px;
  margin: auto;
}
.Ordrlist-img{
  width: 400px;
  height: 160px;
  padding:30px 0 0 0;
}
.Ordrlist-text{
  width: 200px;
  height: 120px;
}
.Ordrlist-img img{
  width: 120px;
  height: 120px;
  border: 1px solid #cccccc;
  float: left;
}
.Ordrlist-img span{
  color: #999;
  font-size: 10px;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  padding-left: 38px;
}
.Ordrlist-img p:hover{
  transition: color 200ms linear 0s,background-color 200ms linear 0s,border-color 200ms linear 0s;
  color: #e93d6d;
  cursor: pointer;
}
.Ordrlist-img p{
  height: 20px;
  font-size: 14px;
  padding-left: 160px;
  color: #4f4f4f;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
.Ordrlist-text{
  padding-top: 30px;
  margin-top: 20px;
  margin-left: 180px;
}
.Ordrlist-tex-p{
  width: 120px;
  height: 40px;
  background:#de5251;
  color: white;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
}
.Ordrlist-text p{
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14PX;
}
.Ordrlist-box{
  border-bottom: 1px solid #cccccc;
}
.Ordrlist-tex-p:hover{
  background-color: #d32b28
}
.shopping-box{
  width: 100px;
}
.shopping-box img{
  width:60px;
  height: 60px;vertical-align:middle;
}
.many{
  width: 120px;
  margin-top: 10px;
  margin-right: 20px;
}
.shopping-box span{
  display: inline;
}
.munber{
  width: 100px;
}
</style>
