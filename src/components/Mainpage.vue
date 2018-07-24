<template>
  <div class="wrap">
    <div class="header">
      <input type="text">
    </div>
    <div class="footer">
      <router-view/>
      <router-link to="/user/mainp"><div>首页</div></router-link>
      <router-link to="/user/type"><div>类别</div></router-link>
      <router-link to="/user/find"><div>发现</div></router-link>
      <router-link to="/user/shopcar"><div>购物车</div></router-link>
      <router-link to="/user/mine"><div>我的</div></router-link>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .header{
    position:fixed;
    top: 0;
    lef:0;
    width: 100%;
  }
  .footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .footer>div{
    width: 25%;
    padding: 20px 10px;
  }
</style>
