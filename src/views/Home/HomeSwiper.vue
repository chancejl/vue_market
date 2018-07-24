<template>
  <div class="swiper" @mouseover="stop()" @mouseout="move()">
    <div class="swipercont">
      <ul>
        <!--<transition-group tag="ul" name="image">-->
        <li v-for="(item,index) in imgArr" v-show="index === mark" :index="index">
          <a href="#">
            <img :src="item" alt="">
          </a>
        </li>
      </ul>
      <!--</transition-group>-->
    </div>
    <div class="swiperdot">
      <span v-for="(item,index) in imgArr" :class="{'active':index===mark}" @click="change(index)"></span>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        mark:0,
        imgArr:[
          '../../static/img/swiper1.jpg',
          '../../static/img/swiper2.jpg',
          '../../static/img/swiper3.jpg',
          '../../static/img/swiper4.jpg'
        ]
      }
    },
    methods:{
      autoplay(){
        timer:null,
          this.mark++;
        if(this.mark===4){
          this.mark = 0;
        }
      },
      play(){
        this.timer=setInterval(this.autoplay,2000);
      },
      change(i){
        this.mark = i;
      },
      stop(){
        clearInterval(this.timer);
      },
      move(){
        this.timer=setInterval(this.autoplay,2000);
      }
    },
    created(){
      this.play();
    }
  }
</script>
<style scoped>
  ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
    height:180px;
  }
  .swiper{
    width: 100%;
    height:180px;
    background:#eee;
    position: relative;
    overflow: hidden;
  }
  a{
    width: 100%;
  }
  li{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:180px;
  }
  .swiper .swipercont{
    width: 100%;
    height:180px;
  }
  .swiper .swipercont img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .swiperdot{
    position: absolute;
    width: 100%;
    height: 10px;
    bottom: 10px;
    margin: 0 auto;
    z-index:999;
    text-align:center;
  }
  .swiperdot span{
    width: 8px;
    height: 8px;
    border-radius:50%;
    display: inline-block;
    background:#999;
    margin: 0 5px;
  }
  .active{
    background:black !important;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
</style>
