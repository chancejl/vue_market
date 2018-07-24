<template>
  <div>
    <img src="./../../assets/find/find3.jpg" alt="" class="pro">
    <div v-for="item in data_" class="Findtext">
      <div>
        <div class="eattext">{{item.desc}}</div>
        <div class="eatread">{{item.read}}</div>
      </div>
      <div>
        <img :src="item.img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  var dataObj={data_:[{
      img:require('./../../assets/find/item1.jpg'),
      desc:'一批10元厨房小工具驾到',
      read:'7w+人阅读'
    },
      {
        img:require('./../../assets/find/item2.jpg'),
        desc:'夏天吹空调容易感冒？有他随时清凉',
        read:'653人阅读'
      },
      {
        img:require('./../../assets/find/item3.jpg'),
        desc:'狂热的运动勇士，需要一块趁心又趁手的运动手表',
        read:'553人阅读'
      },
      {
        img:require('./../../assets/find/item4.jpg'),
        desc:'老婆不是球迷？万万没想到多亏了卸妆液我才看',
        read:'357人阅读'
      }
    ]};
  export default{
    data() {
      return dataObj;
    }
  }
</script>

<style scoped>
  .pro{
    width: 100%;
  }
  .Findtext{
    width: 95%;
    height: 320px;
    margin: 5px auto;
    background:white;
    border-radius:2px;
    font-size: 1rem;
    color:black;
    text-align: left;
    position: relative;
  }
  .Findtext>div:nth-child(1){
    width: 100%;
  }
  .Findtext>div:nth-child(2){
    width: 100%;
    height: 80%;
  }

  .Findtext img{
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  .Findtext .eattext{
    padding: 10px 8px;
  }
  .Findtext .eatread{
    position: absolute;
    bottom: 2px;
    left:80%;
    font-size: 0.8rem;
    color:#666;
  }
</style>
