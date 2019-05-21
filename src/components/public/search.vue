<template>
  <header class="header">
   <div class="center">
    <div class="logo">
      <div class="yCmsComponent">
        <div class="simple_disp-img" style="line-height: 69px">
          <router-link to="/"><img src="./img/logo.png"></router-link>
        </div>
      </div>
    </div>
     <div class="search">
       <form class="searchform">
         <input type="text" class="text" placeholder="请输入搜索名称"/>
         <button class="btn_send" type="submit">搜索</button>
         <P>
           热门搜索：
           <router-link to="/SearchList" title="元祖梦蛋糕">元祖梦蛋糕</router-link>
           <router-link to="/SearchList" title="精致西点">精致西点</router-link>
           <router-link to="/SearchList" title="端午季">端午季</router-link>
         </P>
       </form>
     </div>
     <!--清除浮动-->
     <span class="clear"></span>
   </div>
  </header>
</template>
<script>
export default {}
</script>
<style>
  .header{
    height: 95px;
    min-width: 1200px;
    margin: 0 auto;
    background-color: #ffffff;
    width: 1200px;
  }
  .center{
    width: 1196px;
    margin: 0 auto;
    height: 100%;
  }
  .logo{
    float: left;
    width: 202px;
    height: 84px;
    text-align: center;
    margin-right: 159px;
    padding-top: 11px;
    display: inline;
  }
  .yCmsComponent{
    margin-left: 30px;
  }
  img {
    border: none;
    vertical-align: middle;
  }
  .search{
    box-sizing: content-box;
    float: left;
    width: 522px;
    height: 72px;
    padding-top: 23px;
  }
  .search .searchform{
    float: left;
  }
  .search .searchform .text{
    height: 36px;
    padding-top: 0;
    line-height: 30px;
    float: left;
    width: 428px;
    color: #999;
    padding-left: 16px;
    border: 3px solid #c5023a;
    border-right: 0;
  }
  .search .searchform .btn_send{
    line-height: 1;
    font-family: 'Microsoft YaHei';
    float: left;
    width: 70px;
    height: 36px;
    font-size: 16px;
    color: #fff;
    background-color: #c7023a;
    border: 0;
  }
  .search .searchform p {
    line-height: 30px;
    clear: both;
    font-family: '宋体';
    color: #aeaeae;
  }
  .search .searchform p a {
    color: #aeaeae;
    margin-right: 7px;
  }
  .search .searchform .btn_send:hover {
    background-color: #fd195a;
  }
</style>
