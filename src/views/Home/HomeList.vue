<template>
  <div class="mainpage">
    <img src="./../../assets/list.jpg" alt="" class="todayimg" width="100%">
    <div v-for="(item,index) in data_" class="homelistblock">
      <router-link :to="{name: 'detail', params: { id:index,data:6 }}">
      <div>{{item.desc}}</div>
      <div>{{item.subdesc}}</div>
      <img :src="item.img" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
  var dataObj={data_:[{
      img:require('./../../assets/list1.jpg'),
      desc:'白条商城',
      subdesc:'1元抢免息'
    },
      {
        img:require('./../../assets/list5.jpg'),
        desc:'品牌秒杀',
        subdesc:'低价抢大牌'
      },
      {
        img:require('./../../assets/list4.jpg'),
        desc:'闪购',
        subdesc:'大牌限时特卖'
      }
      ,
      {
        img:require('./../../assets/list1.jpg'),
        desc:'拍拍二手',
        subdesc:'iphone5折起'
      },
      {
        img:require('./../../assets/list2.jpg'),
        desc:'排行榜',
        subdesc:'专属购物指南'
      }
      ,{
        img:require('./../../assets/list3.jpg'),
        desc:'发现好货',
        subdesc:'发现品质生活'
      },
      {
        img:require('./../../assets/list5.jpg'),
        desc:'会买专辑',
        subdesc:'好物大集合'
      },
      {
        img:require('./../../assets/list4.jpg'),
        desc:'新品首发',
        subdesc:'新"机"色'
      }
    ]};
  export default{
    data(){
      return dataObj;
    }
  }
</script>

<style>
  .mainpage{
    width: 100%;
    font-size: 1rem;
  }
  .mainpage .homelistblock{
    width: 24%;
    margin: 5px 3px 0 0;
    display: inline-block;
    background:white;
    /*border-radius:5px;*/
  }
  .mainpage .homelistblock img{
    width: 100%;
  }
</style>

