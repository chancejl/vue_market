<template>
  <div class="proitem">
    <div class="proitema">热门推荐</div>
    <div class="typeinfo" v-for="item in data">
      <img :src="item.img" alt="">
      <div>{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default{
    data(){
      return {data:false};
    },
    mounted(){
      var that=this;
      axios.get('./static/jsonData/type1.json').then(function(res){
        that.$data.data=res.data;
      })
    }
  }
</script>

<style>
  .proitem{
    margin: 5px 0 0 ;
    width: 75%;
    float:right;
    display: inline-block;
    background:white;
    font-size: 0.8rem;
  }
  .typeinfo{
    width: 25%;
    display: inline-block;
    margin: 3px;
  }
  .typeinfo img{
    width: 100%;
  }
</style>
