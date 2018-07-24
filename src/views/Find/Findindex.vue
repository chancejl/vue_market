<template>
  <div>
    <div class="tabs">
      <div class="tab mui-icon mui-icon-star" @click="toggleTab('Pro')" :class="{'active':currentTab=='Pro'}"><a>精选</a></div>
      <div class="tab mui-icon mui-icon-redo" @click="toggleTab('Shop')" :class="{'active':currentTab=='Shop'}"><a>购物百科</a></div>
      <div class="tab mui-icon mui-icon-navigate" @click="toggleTab('Eat')" :class="{'active':currentTab=='Eat'}"><a>好吃的</a></div>
      <div class="tab mui-icon mui-icon-map" @click="toggleTab('Look')" :class="{'active':currentTab=='Look'}"><a>好玩的</a></div>
      <div class="tab mui-icon mui-icon-camera" @click="toggleTab('Play')" :class="{'active':currentTab=='Play'}"><a>好看的</a></div>
    </div>
    <div :is="currentTab" keep-alive></div>
  </div>
</template>

<script>
  import Pro from '@/views/Find/Pro';
  import Shop from '@/views/Find/Shop';
  import Eat from '@/views/Find/Eat';
  import Look from '@/views/Find/Look';
  import Play from '@/views/Find/Play';

  export default {
    name: 'app',
    data () {
      return {
        currentTab: 'Pro'
      };
    },
    components: {
      Pro,
      Shop,
      Eat,
      Look,
      Play
    },
    methods: {
      toggleTab: function(tab) {
        this.currentTab = tab;
      }
    }
  }
</script>

<style scoped>
  .tabs{
    width: 100%;
    /*border-top: 1px solid white;*/
    background:white;
    display: flex;
    justify-content: space-around;
  }
  .tabs .tab{
    padding: 10px 5px 10px 5px;
  }
  .tabs .tab a{
    color:#666;
    font-size: 0.9rem;
  }
  .active{
    background:-webkit-linear-gradient(left,#e93b3d,#ff9574);
  }
  .mui-icon{
    font-size:20px !important;
  }
</style>
