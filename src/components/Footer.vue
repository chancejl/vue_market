<template>
  <div class="footer">
    <router-link :to="{name:'home'}"><span class="mui-icon mui-icon-home"><div class="text">首页</div></span></router-link>
    <router-link :to="{name:'type',params:{id:2}}"><span class="mui-icon mui-icon-search"><div class="text">类别</div></span></router-link>
    <router-link :to="{name:'find',params:{id:3}}"><span class="mui-icon mui-icon-plus"><div class="text">发现</div></span></router-link>
    <router-link :to="{name:'shopcar',params:{id:4}}"><span class="mui-icon mui-icon-compose"><div class="text">购物车</div></span></router-link>
    <router-link :to="{name:'mine',params:{id:5}}"><span class="mui-icon mui-icon-person"><div class="text">我的</div></span></router-link>
  </div>
</template>


<script>

</script>

<style>
  .footer{
    width: 100%;
    box-shadow:0 -2px 0 #eee;
  }
  .footer>a{
    display: inline-block;
    width: 18%;
    padding: 10px 0;
    font-size: 2rem;
    color: black;
  }
  .footer .text{
    font-size:0.8rem;
  }
  .footer .router-link-active{
    color: rgb(231,16,34);
  }
</style>
