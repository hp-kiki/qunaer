<template>
  <div class="home">
        <myheader></myheader>
        <banner :banner="banners"></banner>
        <iconlist :iconlist="iconList"></iconlist>
        <hotsell :hotselllist="hotselllist"></hotsell>
        <weeklist :weeklist="weeklist"></weeklist>
  </div>
</template>

<script>
import myheader from '../components/home/header.vue'
import banner from '../components/home/swiper.vue'
import hotsell from '../components/home/hotsell.vue'
import weeklist from '../components/home/week.vue'
import iconlist from '../components/home/iconlist.vue'
import {homedata} from '../api/home.js'
export default {
    data () {
        return {
            banners:[],
            iconList:[],
            hotselllist:[],
            weeklist:[]
        }
    },
  components:{
      myheader,banner,iconlist,hotsell,weeklist
  },
async mounted(){
     var res=await homedata() 
     console.log(res)
     this.banners=res.data.data.swiperList
      this.iconList=res.data.data.iconList
      this.hotselllist=res.data.data.recommendList
      this.weeklist=res.data.data.weekendList
  }
}
</script>

<style lang='stylus' scoped>

</style>