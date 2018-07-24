<template>
  <div class="container">
      <div class="allse"  @change="checked">
        <input type="checkbox" id="none" value="false" ref="checkBox_"  >
        <label for="none">全选</label>
      </div>
    <div v-for="(good,index) in data_" class="shopitem">
      <div class="col-lg-1 col-md-1" @change="check_isAll">
        <input type="checkbox" v-model="good.checked">
      </div>
      <div class="shopname">{{good.name}}</div>
      <div class="shopimg">
        <img :src="good.img" alt="">
      </div>
      <div class="shopprice">单价:{{good.price}}</div>
      <div class="shopnum" @click="updData">
        <span @click="good.num<1?0:good.num--">-</span><span class="num" contenteditable="true">{{good.num}}</span><span @click="good.num++">+</span>
      </div>
      <div class="shopallprice">总价:{{good.price * good.num}}</div>
    </div>
    <div class="row">
      <div class="allpro">
        共选择了<span>{{calc().cnt}}</span>件商品
      </div>
      <div class="allprice">
        总计<span>{{calc().totalPrice}}</span>元
      </div>
    </div>
  </div>
</template>

<script>
  var goods= {
    data_: [{
      id: 1,
      name: '小吃1',
      img: require('./../../assets/type/type1.jpg'),
      price: '26.00',
      num: 0,
      checked: false
    }, {
      id: 2,
      name: '小吃2',
      img: require('./../../assets/type/type2.jpg'),
      price: '25.00',
      num: 0,
      checked: false
    }, {
      id: 3,
      name: '小吃3',
      img: require('./../../assets/type/type3.jpg'),
      price: '20.00',
      num: 0,
      checked: false
    }, {
      id: 4,
      name: '小吃4',
      img: require('./../../assets/type/type4.jpg'),
      price: '18.00',
      num: 0,
      checked: false
    }, {
      id: 5,
      name: '小吃5',
      img: require('./../../assets/type/type5.png'),
      price: '16.00',
      num: 1,
      checked: false
    }]
  };
  // var goodObj=localStorage.goods?JSON.parse(localStorage.goods):goods;
  export default{
    data(){
      return goods;
    },
    mounted:function(){
      this.check_isAll();
    },
    methods:{
      update:function(){
        localStorage.setItem('goods',JSON.stringify(this.$data));
      },
      check_isAll(){
        // debugger
        // event.target.checked=!event.target.checked;
        var check_el=document.getElementById('none');
        if(this.isAllselect()){
          check_el.checked=true;
        }else{
          check_el.checked=false;
        }
        this.update();
      },
      checked(){
        // var check_el=document.getElementById('none');
        var el=event.target;
        // debugger;
        console.log(el.checked);
        var check_=el.checked;
        // debugger;
        for(var i = 0;i < this.data_.length;i++){
          this.data_[i].checked=check_;
        }
        this.update();
      }
      ,
      isAllselect:function(){
        return this.data_.every(function(item){
          // console.log(index);
          return item.checked==true;
        })
      },
      calc:function(){
        var pro=this.data_.filter(function(item){
          return item.checked==true;
        });
        var totalPrice=0;
        for(var i = 0; i < pro.length;i++){
          totalPrice+=pro[i].price*pro[i].num;
        }
        return {cnt:pro.length,totalPrice:totalPrice}
      },
      updData:function(){
        this.update();
      }
    }
  }
</script>

<style scoped>
  .container{
    text-align: left;
    margin: 10px 0;
  }
  .shopitem{
    position: relative;
    padding: 5px 9px;
    background:white;
    border-bottom: 2px solid #eee;
  }
  .shopname,.shopimg,.shopprice,.shopnum,.shopallprice{
    display: inline-block;
  }
  .shopprice{
    margin: 0 10px;
  }
  .shopnum{
    position: absolute;
    bottom: 40px;
    right: 10px;
  }
  .shopallprice{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
  .container .row{
    /*height: 100px;*/
    border: 1px solid #eee;
  }

  .shopimg img{
    width: 100px;
    height: 100px;
    vertical-align: top;
  }
  span{
    width: 20px;
    height: 20px;
    border: 1px solid #999;
    background:#eee;
    display:inline-block;
  }
  .num{
    background:transparent;
    border-left: none;
    border-right: none;
  }
  .row{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 64px;
    background:rgb(231,16,34);
  }
  .row>div{
    display:inline-block;
    padding: 10px;
  }
  .allse{
    background:white;
  }
  span{
    text-align: center;
  }
</style>
