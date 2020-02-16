<template>
  <div class="detalits">
      <!-- banner -->
      <div class="banners" @click="isswiper=true" v-if="!isswiper">
          <div class="banners-back" v-if="isheader">
              <i class="iconfont icon-fanhui" @click="$router.back()"></i>
          </div>
          <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg">
          <div class="banner-text">
              <span class="banner-span">大连圣亚海洋世界(AAAA景区)</span>
              <i class="iconfont icon-tupian">39</i>
          </div>
      </div>
      <!-- 点击轮播 -->
      <swiper v-if="isswiper" @clickbanner="isswiper=false"></swiper>
      <!-- 若隐若现头部 -->
      <detalitheader class="header" :style="opacityStyle"></detalitheader>
      <!-- 列表 -->
      <list :list="detalitslist"></list>
  </div>
</template>

<script>
import swiper from '@/components/detalits/banners.vue'
import detalitheader from '@/components/detalits/detalitheader.vue'
import list from '@/components/detalits/detalitlist.vue'
import {detalits} from '@/api/home.js'
export default {
    // name:'detalits',
    data(){
        return {
            isswiper:false,
            isheader:true,
            opacityStyle:{
                opacity:0
            },
            detalitslist:[]
        }
    },
 components:{
     swiper,detalitheader,list
   },
 async  mounted(){
        window.addEventListener('scroll', this.handleScroll)
            var res=await detalits()
            console.log(res)
            this.detalitslist=res.data.data.categoryList
            console.log(this.detalitslist)
   },
     unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  },
   methods:{
     handleScroll(){
       console.log(document.documentElement.scrollTop)
       const top=document.documentElement.scrollTop
       if(top>30){
           let opacity=top / 140
          var opacity2=opacity>1 ? 1 : opacity
          this.opacityStyle.opacity=opacity2
           this.isheader=false
       }else{
           this.isheader=true
         this.opacityStyle.opacity=0
         
       }
      
      }
   }

}
</script>

<style lang='less' scoped> 
 .detalits{
     height: 1000px;
     .header{
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
     }
     .banners{
         position: relative;
         .banners-back{
             width: .7rem;
             background: #000;
             opacity:.5;
             height: .7rem;
             text-align: center;
             line-height: .7rem;
             border-radius: 50%;
              position:absolute;
              top: .2rem;
              left: .2rem;
             .iconfont{
                 color: #fff;
             }
         }
         img{
             height: 4rem;
             width: 100%;
         }
         .banner-text{
             display: flex;
             justify-content: space-between;
             padding: 0 .2rem;
             color: #fff;
             position:absolute;
             bottom: .2rem;
             left: 0;
             right: 0;
             .banner-span{}
         }
     }
 }
</style>