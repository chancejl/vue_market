<template>
  <div>
    <div class="tabs">
      <div @click="toggleTab('type1')" v-show="data"><a>热门推荐</a></div>
      <div @click="toggleTab('type2')" v-show="data"><a>手机数码</a></div>
      <div @click="toggleTab('type3')" v-show="data"><a>电脑办公</a></div>
      <div @click="toggleTab('type4')" v-show="data"><a>美妆护肤</a></div>
      <div @click="toggleTab('type5')" v-show="data"><a>个护清洁</a></div>
      <div @click="toggleTab('type6')" v-show="data"><a>汽车用品</a></div>
    </div>
    <!--<prince :is="currentTab" keep-alive></prince>-->
    <div class="proitem">
      <div class="proitema">{{data.title}}</div>
      <div>
        <img :src="data.image" class="bigimg" alt="">
      </div>
      <div class="typeinfo" v-for="(item,index) in data.data_">
        <router-link :to="{name: 'detail', params: { id:index,data:6 }}" >
        <img :src="item.img" alt="">
        <div>{{item.desc}}</div>
        </router-link>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'app',
    data () {
      return {
        data:false
      };
    },
    mounted(){
      var that=this;
      axios.get('./static/jsonData/type1.json').then(function(res){
        console.log(res.data);
        that.$data.data=res.data;
      })
    },
    methods: {
      toggleTab: function(type) {
        var that=this;
        axios.get('./static/jsonData/'+ type +'.json').then(function(res){
          that.$data.data=res.data;
        })
      }
    }
  }
</script>

<style scoped>
  .tabs{
    width: 25%;
    display: inline-block;
    float:left;
  }
  .tabs>div{
    border: 1px solid white;
  }
  .tabs>div a{
    color:#666;
    width:100%;
    padding: 5px;
    display:inline-block;
  }
  .tabs .tab a:active{
    /*color: red;*/
  }
  a:active{
    background:white;
  }
  .proitem{
    margin: 5px 0 0 ;
    width: 75%;
    float:right;
    display: inline-block;
    background:white;
    font-size: 0.8rem;
  }
  .proitema{
    width: 100%;
    font-size: 1rem;
  }
  .bigimg{
    width: 100%;
  }
  .typeinfo{
    width: 25%;
    display: inline-block;
    margin: 3px;
  }
  .typeinfo img{
    width: 100%;
  }


</style>
