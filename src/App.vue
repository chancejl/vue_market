<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view class="header" name="Header"/>
    <router-view class="container clear"/>
    <router-view class="nav" name="Footer"/>
  </div>
</template>

<!--v-bind:style="{top: Headerheight}"-->

<script>
export default {
  name: 'App',
  computed:{
    Headerheight(){
      var header=document.getElementById('wrap');
      var Height=header.offsetHeight + 'px';
      // return Height;
    }
  }
}
</script>

<style>
  @import './../static/css/mui.min.css';
  .header{
    width: 100%;
    /*border: 1px solid grey;*/
    position: fixed;
    top: 0;
    left: 0;
    background:#eee;
  }
  .container{
    width: 100%;
    position: absolute;
    left: 0;
    /*top: 100px;*/
    /*border: 1px solid blue;*/
    clear:both;
    padding-bottom: 50px;
  }
  .nav{
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
  }
  .clear:after{
    clear:both;
    content:'';
    display: block;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
