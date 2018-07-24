<template>
  <div class="homeinfo">
    <div class="Hometit">
      <span><img src="./../../assets/tit.png" alt="">
      网吧的low配置为什么这么快</span>
      <a href="#">更多</a>
    </div>
    <img src="./../../assets/info.png"  class="info" alt="">
    <div class="Hometit">
      <span class="Homeinfotext">特价秒杀</span>
      <a href="#">轮番秒</a>
      <div v-for="item in data_" class="list">
        <router-link :to="{name:'table',params:{id:6}}">
          <div>
            <img :src="item.img" alt="">
            <div>{{item.desc}}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  var dataObj={data_:[{
      img:require('./../../assets/list1.jpg'),
      desc:'￥749'
    },
      {
        img:require('./../../assets/list2.jpg'),
        desc:'￥208'
      },
      {
        img:require('./../../assets/list5.jpg'),
        desc:'￥89'
      },
      {
        img:require('./../../assets/list4.jpg'),
        desc:'￥508'
      }
    ]};
  export default{
    data(){
      return dataObj;
    },
    method:{

    }
  }
</script>


<style>
  .Hometit{
    width:100%;
    text-align: left;
    background:white;
    border-radius:10px;
    margin: 5px 0;
  }
  .Hometit img{
    width: 20%;
    vertical-align: middle;
  }
  .Hometit span{
    display: inline-block;
    width: 85%;
    padding: 0 20px;
    color: rgb(231,16,34);
  }
  .info{
    width: 100%;
  }
  .Hometit a{
    color: #666;
    font-size: 0.8rem;
    color: rgb(231,16,34);
  }
  .Homeinfotext{
    font-size: 1rem;
    font-weight: bold;
  }
  .homeinfo .list{
    width: 25%;
    display: inline-block;
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
  }
  .homeinfo .list img{
    width: 100%;
    margin: 2px 0;
  }
</style>
