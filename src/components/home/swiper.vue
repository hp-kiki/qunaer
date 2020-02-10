<template>
  <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in banner" :key="item.id">
        <img  :src="item.imgUrl" />
    </van-swipe-item>


</van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    props:['banner'],
  components: {  
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },

}
</script>

<style lang='less' scoped>

</style>