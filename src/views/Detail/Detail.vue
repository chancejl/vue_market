<template>
  <div class="container">
    <div class="section">
      <img :src="goodsArr.img" class="mainimg"/>
      <div class="detailinfo">{{goodsArr.tit}}</div>
      <div class="detailprice">{{goodsArr.price}}</div>
      <div class="info color">
        <div class="num">{{goodsArr.type}}</div>
        <div v-for="item in goodsArr.color" class="small">
          {{item}}
        </div>
      </div>
      <div class="info">
        <span class="num">版本</span>
        <span v-for="key in goodsArr.info" class="small">
          {{key}}
        </span>
      </div>
      <div class="shopnum">
        <span @click="num<1?0:num--">-</span><span class="num" contenteditable="true">{{num}}</span><span @click="num++">+</span>
      </div>
      <div class="buybox">
      <div class="buy">
        立即购买
      </div>
        <router-link :to="{name:'shopcar',params:{id:4}}"><div class="shopcar">
        加入购物车
        </div></router-link>
      </div>
      <div class="proinfo">
        <div class="pro">------商品介绍------</div>
        <img :src="goodsArr.img" class="img"/>
      </div>
    </div>
    <div class="button">
      <span class="mui-icon mui-icon-compose icon"></span><router-link :to="{name:'shopcar',params:{id:4}}"><span class="shopcar">加入购物车</span></router-link><span class="buy">立即购买</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "detail",
    data() {
      return {
        id: this.$route.params.id,
        goodsArr:{},
        num:0
      }
    },
    mounted(){
      // console.log(this.$route.name);
      var that = this;
      axios.get('./static/jsonData/detail.json').then(function(res){
        var arr = res.data;
        var temp = arr.data_;
        var index_=that.$route.params.id;
        console.log(index_,temp);
        for(var i = 0;i < temp.length;i++){
          if(temp[i].id==index_){
            that.goodsArr = temp[i];
            console.log(temp[i]);
            // return temp[i]
          }
        }
        // that.$data.goodsArr=res.data;
        // console.log(that.data.goodsArr);

      })
    }
  }

</script>

<style scoped>
  .container{
    width: 100%;
    background:white;
  }
  .section{
    width: 95%;
    margin:0 auto;
  }
  .mainimg,img{
    width: 80%;
    margin: 10px auto;
    display: block;
  }
  .detailinfo{
    font-size:20px;
    color:#222;
    text-align: left;
  }
  .detailprice{
    font-size:15px;
    color:red;
    padding: 10px 0;
    text-align: left;
  }
  .shopnum{
    /*display: inline-block;*/
    font-size: 18px;
    padding: 5px;
    text-align: left !important;
  }
  .shopnum span{
    width: 20px;
    height: 20px;
    border: 1px solid #999;
    background:#eee;
    display:inline-block;
    text-align: center;
  }
  .num{
    background:transparent;
    display: inline-block;
    text-align:left;
    border-left: none;
    border-right: none;
  }
  .small{
    padding:5px;
    margin:5px;
    display: inline-block;
    border:1px solid #999;

  }
  .info{
    margin: 5px 0;
    text-align: left;
  }
  /*主容器*/
  .stepper {
    width: 80px;
    height: 26px;
    /*给主容器设一个边框*/
    border: 1px solid #ccc;
    border-radius: 3px;
    margin:10px;
  }

  /*加号和减号*/
  .stepper text {
    width: 19px;
    line-height: 26px;
    text-align: center;
    float: left;
  }

  /*数值*/
  .stepper input {
    width: 40px;
    height: 26px;
    float: left;
    margin: 0 auto;
    text-align: center;
    font-size: 12px;
    /*给中间的input设置左右边框即可*/
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }

  /*普通样式*/
  .stepper .normal{
    color: black;
  }

  /*禁用样式*/
  .stepper .disabled{
    color: #ccc;
  }
  .buybox{
    text-align: left !important;
    margin: 5px 0;
  }
  .buy{
    width: 100px;
    padding: 10px 0;
    text-align: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
    background:lightcoral;
    display: inline-block;
  }
  .shopcar{
    width: 125px;
    padding: 10px;
    background:lightblue;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: white;
    display:inline-block;
  }
  .pro{
    /*width: 100%;*/
    font-size: 20px;
    margin: 20px;
    text-align: center;
  }
  .proinfo .img{
    margin: 10px auto;
    display: block;
  }
  .button{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: right;
    border-top: 2px solid #eee;
    background:white;
  }
  .icon{
    width: 100px;
    text-align: center;
  }
</style>
