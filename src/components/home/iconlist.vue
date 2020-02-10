<template>
  <div class="iconlist">
        <van-swipe class="my-swipe" indicator-color="white" :loop="false">
    <van-swipe-item v-for="(v,i) in pages" :key="i">
        <div class="list">
         <div class="iconnav" v-for="item in v" :key="item.id">
            <img :src="item.imgUrl" >
            <span>{{item.desc}}</span>
        </div>
        </div>
    </van-swipe-item>
      </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    props:['iconlist'],
  components: {  
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  computed:{
      pages () {
          var pages=[[],[]]
          if(this.iconlist.length>8||this.iconlist.length===8){
              for(var i=0;i<this.iconlist.length;i++){
                  if(i>8-1){
                      pages[1].push(this.iconlist[i])
                  }else{
                      pages[0].push(this.iconlist[i])
                  }
             
              }
          }else{
              pages[0]=this.iconlist
          }
          return pages
      }
    //   list () {
    //       if(this.iconlist.length>8){
    //           this.iconlist=this.iconlist.map(v=>{
    //                 for(var i=0;i<8;i++){
    //               this.iconlist.push({})
    //           }
    //           })

    //       }
    //   }
  }
}
</script>

<style lang='less' scoped>
.iconlist{
    width: 100%;
    height: 4.0rem;
    padding-bottom: .3rem;
    border-bottom:0.02rem solid #ddd;
    // background: #000;
    .list{
        display: flex;
        flex-wrap: wrap;
    }
    .iconnav{
        text-align: center;
        width: 25%;
        margin-top:.4rem;
        img{
            width: .9rem;
            height: .9rem;
        }
        span{
            display: block;
            margin-top:.2rem;
        }
    }


}
</style>