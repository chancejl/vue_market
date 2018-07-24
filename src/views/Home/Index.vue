<template>
  <div>
    <HomeSwiper/>
    <HomeNav/>
    <HomeInfo/>
    <HomeList/>
  </div>
</template>

<script>
  import HomeSwiper from '@/views/Home/HomeSwiper'
  import HomeNav from '@/views/Home/HomeNav'
  import HomeList from '@/views/Home/HomeList'
  import HomeInfo from '@/views/Home/HomeInfo'

  export default{
    components:{
      HomeSwiper,
      HomeNav,
      HomeList,
      HomeInfo
    }
  }
</script>
