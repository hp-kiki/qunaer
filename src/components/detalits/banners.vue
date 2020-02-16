<template>
  <div class="click-banner" @click="onclickbaneer">
    <van-swipe :loop="false" indicator-color="white" class="my-swipe" @change="onChange">
      <van-swipe-item>
        <img
          class="imgs"
          src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="imgs"
          src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
        />
      </van-swipe-item>
      <!-- 指示器 -->
      <div class="custom-indicator" slot="indicator">
    {{ current + 1 }}/4
  </div>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
    data(){
        return {
            current: 0
        }
    },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  methods:{
      onclickbaneer(){
            this.$emit('clickbanner')
      },
       onChange(index) {
      this.current = index;
    }
  }
};
</script>

<style lang='less' scoped>
body {
  background: #000;
}
.click-banner {

  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  .my-swipe{
  height:100%;
  width: 100%;
//   z-index: 200;
  position: relative;
  top: 30%;
  left: 0;
    .imgs {
    height: 5rem;
    width: 100%;
    z-index: 100;
  }
  .custom-indicator{
    //   z-index: 200;
      position: absolute;
      bottom: 6.5rem;
      left: 50%;
    color: #fff;
  }
}

}
</style>