<template>
  <div>
    <img src="./../../assets/find/find4.jpg" alt="" class="pro">
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
      desc:'如何选购合适尺寸的电视',
      read:'7w+人阅读'
    },
      {
        img:require('./../../assets/find/item2.jpg'),
        desc:'变频空调与定频空调优劣势比较',
        read:'653人阅读'
      },
      {
        img:require('./../../assets/find/item3.jpg'),
        desc:'冰箱容量选择，变频冰箱与定频冰箱优劣势对比等',
        read:'553人阅读'
      },
      {
        img:require('./../../assets/find/item4.jpg'),
        desc:'洗衣机类别介绍，容量选择',
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
