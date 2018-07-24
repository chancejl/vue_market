<template>
  <div>
    <img src="./../../assets/find/find2.jpg" alt="" class="pro">
    <div v-for="item in data_" class="Findtext">
      <div>
        <span class="text">{{item.desc}}</span>
        <h5>{{item.subdesc}}</h5>
        <span class="read">{{item.read}}</span>
      </div>
      <div>
        <img :src="item.img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  var dataObj={data_:[{
      img:require('./../../assets/find/item5.jpg'),
      desc:'电视',
      subdesc:'如何选购合适尺寸的电视',
      read:'7w+人阅读'
    },
      {
        img:require('./../../assets/find/item6.jpg'),
        desc:'空调',
        subdesc:'变频空调与定频空调优劣势比较',
        read:'653人阅读'
      },
      {
        img:require('./../../assets/find/item7.jpg'),
        desc:'冰箱',
        subdesc:'冰箱容量选择，变频冰箱与定频冰箱优劣势对比等',
        read:'553人阅读'
      },
      {
        img:require('./../../assets/find/item4.jpg'),
        desc:'洗衣机',
        subdesc:'洗衣机类别介绍，容量选择',
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
    margin: 5px auto;
    background:white;
    border-radius:2px;
    font-size: 1rem;
    color:black;
    text-align: left;
    position: relative;
  }
  .Findtext h5{
    padding: 2px 8px;
  }
  .Findtext>div{
    display: inline-block;
  }
  .Findtext div:nth-child(1){
    width: 60%;
  }
  .Findtext div:nth-child(2){
    width: 38%;
  }
  .Findtext img{
    width: 100%;
    vertical-align: middle;
  }
  .Findtext .text{
    padding: 0 8px;
  }
  .Findtext .read{
    position: absolute;
    bottom: 5px;
    right: calc(100% - 60%);
    font-size: 0.8rem;
    color:#666;
  }
</style>
