<template>
  <div class="proitem">
    <div class="proitema">电脑办公</div>
    <div class="typeinfo" v-for="item in data_">
      <img :src="item.img" alt="">
      <div>{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
  var dataObj={data_:[
      {
        img:require('./../../assets/type/type2.jpg'),
        desc:'手机'
      },
      {
        img:require('./../../assets/type/type1.jpg'),
        desc:'空调'
      },
      {
        img:require('./../../assets/type/type5.png'),
        desc:'电风扇'
      },
      {
        img:require('./../../assets/type/type3.jpg'),
        desc:'充电宝'
      },
      {
        img:require('./../../assets/type/type6.png'),
        desc:'路由器'
      },
      {
        img:require('./../../assets/type/type5.png'),
        desc:'耳机'
      },
      {
        img:require('./../../assets/type/type7.png'),
        desc:'空调扇'
      },
      {
        img:require('./../../assets/type/type1.jpg'),
        desc:'蓝牙耳机'
      },
      {
        img:require('./../../assets/type/type10.png'),
        desc:'蚊帐'
      },
      {
        img:require('./../../assets/type/type2.jpg'),
        desc:'凉席'
      },
      {
        img:require('./../../assets/type/type2.jpg'),
        desc:'电饭煲'
      },
      {
        img:require('./../../assets/type/type9.jpg'),
        desc:'空调挂机'
      },
      {
        img:require('./../../assets/type/type2.jpg'),
        desc:'热水器'
      },
      {
        img:require('./../../assets/type/type1.jpg'),
        desc:'零食'
      },
      {
        img:require('./../../assets/type/type1.jpg'),
        desc:'手机'
      },
      {
        img:require('./../../assets/type/type5.png'),
        desc:'耳机'
      },
      {
        img:require('./../../assets/type/type7.png'),
        desc:'空调扇'
      },
      {
        img:require('./../../assets/type/type1.jpg'),
        desc:'蓝牙耳机'
      }
    ]};
  export default{
    data(){
      return dataObj;
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
  .proitema{

  }
</style>
