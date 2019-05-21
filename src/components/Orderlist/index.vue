<template>
  <div class="Collectionlist">
    <div class="Collectionlist-box">
      <span>我的收藏夹</span>
    </div>
    <div class="Ordrlist-box">
      <div class="Ordrlist-img fl">
        <img src="./img/sh.jpg">
        <span>saDssad asdsa</span>
      </div>
      <div class="Ordrlist-text fl">
        <p class="Ordrlist-tex-p" @click="dialogVisible = true">添加到购物车</p>
        <p>删除</p>
      </div>
      <span class="clear"></span>
    </div>
    <div>
      <el-dialog
        title="已添加到购物车"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <div class="shopping">
          <div class="shopping-box fl">
             <img src="./img/sh.jpg">
          </div>
          <div class="munber fl">
            <p>商品</p>
            <p>数量：<span>11</span></p>
          </div>
          <div class="many fr">总价：￥545454</div>
          <span class="clear"></span>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"><router-link to="/ShoppingCart">结算</router-link></el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
<style scoped>
.Collectionlist{
  width: 1000px;
  height: 400px;
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
}
.Ordrlist-img span{
  display: inline-block;
  vertical-align: middle;
  height: 120px;
  padding-left: 40px;
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
