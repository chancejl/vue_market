<template>
  <div id="wrap">
    <span class="mui-icon mui-icon-bars searchSp"></span>
    <span>发现Discovery</span>
    <span class="mui-icon mui-icon-chat chat"></span>
  </div>
</template>

<script>

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
</style>
