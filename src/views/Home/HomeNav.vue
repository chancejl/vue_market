<template>
  <div class="Homefir">
  <div class="homenav">
    <div v-for="item in data_" class="Homenav mui-col-xs-2 mui-col-sm-2">
      <img :src="item.img" alt="">
      <div class="Hometext">
        {{item.desc}}
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  var dataObj={data_:[
    {
      img:require('./../../assets/nav1.png'),
      desc:'京东超市'
    },
      {
        img:require('./../../assets/nav2.png'),
        desc:'唯品会'
      },
      {
        img:require('./../../assets/nav3.png'),
        desc:'服饰'
      },
      {
        img:require('./../../assets/nav4.png'),
        desc:'生鲜'
      },
      {
        img:require('./../../assets/nav5.png'),
        desc:'快速送货'
      },
      {
        img:require('./../../assets/nav6.png'),
        desc:'充值缴费'
      },
      {
        img:require('./../../assets/nav7.png'),
        desc:'9.9元拼'
      }
      ,{
        img:require('./../../assets/nav8.png'),
        desc:'领券'
      },
      {
        img:require('./../../assets/nav9.png'),
        desc:'赚钱'
      },{
        img:require('./../../assets/nav10.png'),
        desc:'全部'
      }
    ]};
  export default{
    data:function(){
      return dataObj;
    }
  }
</script>

<style>
  .homenav img{
    width: 50px;
    height: 50px;
    margin: 5px;
  }
  .Homenav{
    display: inline-block;
    font-size: 0.8rem;
    margin: 5px;
  }
  .Homefir{
    width: 100%;
    background:white;
    border-radius:10px;
    margin: 2px 0;
  }

</style>
