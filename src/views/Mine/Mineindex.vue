<template>
  <div class="mine">
    <div class="minetit">
      <div class="mui-icon mui-icon-person person"></div>
      <div>
        <div class="minetext">个人中心</div>
        <a href="#">享京值</a>
        <a href="#">小白信用</a>
      </div>
    </div>
    <div class="mui-content minecontent">
     <ul class="mui-table-view mui-grid-view mui-grid-9">
       <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
         <a href="#">
           <span class="mui-icon mui-icon-help"></span>
           <div>代付款</div>
         </a>
       </li>
       <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
         <a href="#">
           <span class="mui-icon mui-icon-loop"></span>
           <div>待收货</div>
         </a>
       </li>
       <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
         <a href="#">
           <span class="mui-icon mui-icon-chat"></span>
           <div>待评价</div>
         </a>
       </li>
       <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
         <a href="#">
           <span class="mui-icon mui-icon-gear"></span>
           <div>退换/售后</div>
         </a>
       </li>
       <hr/>
       <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
         <a href="#">
           <span>0</span>
           <div>京豆</div>
         </a>
       </li>
       <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
         <a href="#">
           <span>0</span>
           <div>优惠券</div>
         </a>
       </li>
       <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
         <a href="#">
           <span>0.00</span>
           <div>白条</div>
         </a>
       </li>
       <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
         <a href="#">
           <span>0.00</span>
           <div>小银行</div>
         </a>
       </li>
     </ul>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
            <span class="color">10</span>
            <div>商品关注</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
            <span class="color">10</span>
            <div>店铺关注</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
            <span class="color">0</span>
            <div>内容收藏</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
            <span>90</span>
            <div>浏览记录</div>
          </a>
        </li>
        <hr/>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-compose"></span>
            <div>我的活动</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-more"></span>
            <div>社区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-personadd"></span>
            <div>客户服务</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-map"></span>
            <div>京东超市</div>
          </a>
        </li>
      </ul>
      <img src="./../../assets/find/find1.jpg" alt="">
    </div>
  </div>
</template>

<style scoped>
  .minecontent{
    width: 100%;
    font-size: 0.8rem;
  }
  .mine a{
    font-size: 0.8rem;
    color: black;
  }
  .minecontent>ul:nth-child(1) {
    background:white;
    margin: 5px 0 10px 0;
  }
  .minecontent>ul:nth-child(2){
    background:white;
    margin: 0 0 10px 0;
  }
  .mine .color{
    color:rgb(231,16,34)
  }
  .mine img{
    width: 100%;
  }
  .person{
    font-size: 4rem;
  }
  .minetext{
    font-size: 3rem;
    line-height: 3rem;
    font-family: KaiTi;
  }
</style>
