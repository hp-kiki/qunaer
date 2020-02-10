<template>
  <div class="home">
        <myheader></myheader>
        <banner :banner="banners"></banner>
        <iconlist :iconlist="iconList"></iconlist>
  </div>
</template>

<script>
import myheader from '../components/home/header.vue'
import banner from '../components/home/swiper.vue'
import iconlist from '../components/home/iconlist.vue'
import {homedata} from '../api/home.js'
export default {
    data () {
        return {
            banners:[],
            iconList:[]
        }
    },
  components:{
      myheader,banner,iconlist
  },
async mounted(){
     var res=await homedata() 
     console.log(res)
     this.banners=res.data.data.swiperList
      this.iconList=res.data.data.iconList
  }
}
</script>

<style lang='stylus' scoped>

</style>