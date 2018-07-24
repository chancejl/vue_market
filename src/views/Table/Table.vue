<template>
  <div class="list">
    <div class="listItem" v-for="(item,index) in data_">
      <router-link :to="{name: 'detail', params: { id:index,data:6 }}" :index="index">
      <img :src="item.img" />
      <div class="listTit">{{item.desc}}</div>
      <div class="listPrice">{{item.price}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  var dataObj={data_:[{
      img:require('./../../assets/list1.jpg'),
      price:'￥7599.00',
      desc:'Apple iPhone X 深空灰色 移动联通电信手机'
    },
      {
        img:require('./../../assets/list5.jpg'),
        price:'￥599.00',
        desc:'谜尚BB'
      },
      {
        img:require('./../../assets/list4.jpg'),
        price:'￥7599.00',
        desc:'努比亚 深空灰色 移动联通电信手机'
      },
      {
        img:require('./../../assets/list1.jpg'),
        price:'￥7599.00',
        desc:'Apple iPhone X 深空灰色 移动联通电信手机'
      },
      {
        img:require('./../../assets/list2.jpg'),
        price:'￥1599.00',
        desc:'贵州茅台酒'
      },
      {
        img:require('./../../assets/list3.jpg'),
        price:'￥7599.00',
        desc:'Apple iPhone X 中国红 移动联通电信手机'
      },
      {
        img:require('./../../assets/list5.jpg'),
        price:'￥8990.00',
        desc:'Apple iPhone X 深空灰色 移动联通电信手机'
      },
      {
        img:require('./../../assets/list4.jpg'),
        price:'￥5080.00',
        desc:'华为 x8 移动联通电信手机'
      }
    ]};
  export default {
    name: "table",
    data(){
      return dataObj;
    }
  }
</script>

<style scoped>
  .list{
    width: 100%;
  }
  .listItem{
    width: 100%;
    height: 150px;
    position: relative;
    padding: 10px 0;
    background:white;
    border-bottom: 2px solid #eee;
  }
  .listItem img{
    /*display: inline-block;*/
    width: 40%;
    height: 130px;
    position: absolute;
    left: 0;
  }
  .listItem .listTit{
    position: absolute;
    top: 20px;
    right: 0;
    width: 60%;
    font-size: 18px;
    color:#222;
    text-align: left;
  }
  .listItem .listPrice{
    position: absolute;
    bottom:20px;
    right: 20px;
    font-size: 20px;
    color:red;
  }
</style>
