<template>
  <div class="home">
        <myheader></myheader>
        <swiper></swiper>
  </div>
</template>

<script>
import myheader from '../components/home/header.vue'
import swiper from '../components/home/swiper.vue'
import {homedata} from '../api/home.js'
export default {
  components:{
      myheader,swiper
  },
async mounted(){
     var res=await homedata() 
     console.log(res)
  }
}
</script>

<style lang='stylus' scoped>

</style>