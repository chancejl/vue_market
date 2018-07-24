<template>
  <div class="container">
    {{data_}}{{para}}
    <div class="section" v-for="item in data_">
      <div v-if="item.id==para" :index="index">
        <img :src="item.img"/>
        <div class="detailinfo">{{item.tit}}</div>
        <div class="detailprice">{{item.price}}</div>
        <div class="info color">
          <div class="num">{{item.type}}</div>
          <div v-for="i in item.color" class="small">
            {{i}}
          </div>
        </div>
        <div class="info">
          <div class="num">版本</div>
          <div v-for="key in item.info" class="small">
            {{key}}
          </div>
        </div>
        <div class="info">
          <div class="num">数量</div>
          <!--<div class="stepper">-->
            <!--&lt;!&ndash; 减号 &ndash;&gt;-->
            <!--<span class="{{minusStatus}}" bindtap="bindMinus">-</span>-->
            <!--&lt;!&ndash; 数值 &ndash;&gt;-->
            <!--<span type="number" bindchange="bindManual" value="{{num}}" />-->
            <!--&lt;!&ndash; 加号 &ndash;&gt;-->
            <!--<span class="normal" bindtap="bindPlus">+</span>-->
          <!--</div>-->
        <!--</div>-->
        <div class="proinfo">
          <div class="pro">------商品介绍------</div>
          <img :src="item.img" class="img"/>
        </div>
      </div>
    </div>
    </div>
  </div>

</template>


<script>
  import axios from 'axios';

  export default{
    data(){
      return {
        data_,
        para
      };
    },
    beforeCreate(){
      this.data_= [
        {id:0,img:require('./../../assets/list1.jpg'),tit:'Apple iPhone X 深空灰色 移动联通电信手机',type:'颜色',price:'￥7599.00',color:['深空灰色','黑色','银色'],info:['公开版']},
        {id:1,img:require('./../../assets/list2.jpg'),tit:'Apple iPhone 8 银色 移动联通电信手机',type:'颜色',price:'￥7899.00',color:['深空灰色','红色','银色'],info:['公开版','港版']},
        {id:2,img:require('./../../assets/list5.jpg'),tit:'贵州茅台酒',price:'￥999.00',type:'规格',color:['1瓶'],info:['10年','20年']},
        {id:3,img:require('./../../assets/list4.jpg'),tit:'华为 x8 移动联通电信手机',type:'颜色',price:'￥5899.00',color:['黑色'],info:['公开版','美版']},
        {id:4,img:'../../static/list5.jpg',tit:'迷上BB',type:'颜色',price:'￥599.00',color:['象牙白','自然白'],info:['500ml','1000ml']},
        {id:5,img:'../../static/list1.jpg',tit:'Apple iPhone X 深空灰色 移动联通电信手机',type:'颜色',price:'￥5899.00',color:['黑色'],info:['港版', '台版']},
        {id:6,img:require('./../../assets/list1.jpg'),tit:'Apple iPhone X 深空灰色 移动联通电信手机',type:'颜色',price:'￥7599.00',color:['深空灰色','黑色','银色'],info:['公开版']}
      ];
      console.log(this.data_);
    },
    mounted(){
      this.para= this. $route.params.id ;
      console.log(para);
    }
  }
</script>


<style scoped>

</style>
