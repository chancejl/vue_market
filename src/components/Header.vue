<template>
  <div id="wrap">
    <div v-if="$route.params.id==3">
    <span class="mui-icon mui-icon-arrowleft back" @click="back"></span>
      <span class="headertext">发现</span>
    <span class="mui-icon mui-icon-chat chat"></span>
    </div>
    <div v-else-if="$route.params.id==4">
      <span class="mui-icon mui-icon-arrowleft back" @click="back"></span>
      <span class="headertext">购物车</span>
      <span class="mui-icon mui-icon-chat chat"></span>
    </div>
    <div v-else-if="$route.params.id==5">
      <span class="mui-icon mui-icon-arrowleft back" @click="back"></span>
      <span class="headertext">商品详情</span>
      <span class="mui-icon mui-icon-chat chat"></span>
    </div>
    <div v-else-if="$route.params.id==6">
      <span class="mui-icon mui-icon-arrowleft back" @click="back"></span>
      <span class="listtext">商品列表</span>
      <span class="mui-icon mui-icon-chat chat"></span>
    </div>
    <div v-else-if="$route.name=='detail'">
      <span class="mui-icon mui-icon-arrowleft back" @click="back"></span>
      <span class="detailtext">商品详情</span>
      <span class="mui-icon mui-icon-chat chat"></span>
    </div>
    <div v-else>
      <span class="mui-icon mui-icon-bars searchSp"></span>
      <div class="mui-input-row mui-search searchDiv">
        <input type="search" class="mui-input-clear search" placeholder="">
      </div>
      <span class="mui-icon mui-icon-chat chat"></span>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return this.$route.params
    },
    methods:{
      back(){
        this.$router.go(-1);
      }
    }
  }

</script>

<style>
  #wrap{
    z-index: 99;
    /*background:rgba(213,24,42,0.8);*/
  }
  .searchDiv{
    display: inline-block;
    width: 80% !important;
    padding-top:0.8rem;
  }
  .search{
    border-radius:30px !important;
  }
  .searchSp{
    position: absolute;
    top: 1.25rem;
    left: 0.6rem;
  }
  .chat{
    position: absolute;
    top:1.25rem;
    right: 0.6rem;
  }
  .headertext{
    font-size: 3rem;
    line-height: 3rem;
    font-family: KaiTi;
  }
  .listtext{
    font-size: 2rem;
    line-height: 60px;
  }
  .back{
    position: absolute;
    left: 0;
    top: 1rem;
  }
  .detailtext{
    font-size: 2rem;
    line-height: 60px;
  }
</style>
