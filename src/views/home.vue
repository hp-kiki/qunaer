<template>
  <div class="home">
        <myheader></myheader>
        <banner :banner="banners"></banner>
  </div>
</template>

<script>
import myheader from '../components/home/header.vue'
import banner from '../components/home/swiper.vue'
import {homedata} from '../api/home.js'
export default {
    data () {
        return {
            banners:[],
        }
    },
  components:{
      myheader,banner
  },
async mounted(){
     var res=await homedata() 
     console.log(res)
     this.banners=res.data.data.swiperList
     console.log(this.banner)
  }
}
</script>

<style lang='stylus' scoped>

</style>