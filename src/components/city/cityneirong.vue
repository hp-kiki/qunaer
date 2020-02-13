<template>
  <div class="citynr" ref="wrapper">
    <div>
      <div class="city-weizhi">
        <div class="titile">您的位置</div>
        <div class="weizhi">
          <span class="chengshi">{{this.$store.state.cityname}}</span>
        </div>
      </div>
      <div class="hot-city">
        <div class="titile">热门城市</div>
        <div class="weizhi">
          <span class="chengshi" v-for="item in citylist.hotCities" :key="item.id" @click="hotcityname(item.name)">{{item.name}}</span>
        </div>
      </div>
      <div class="citys" >

        <div class="zimu" v-for="(v,i) in citylist.cities" :key="i"  @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove(i)" @touchend="handleTouchEnd">
          <div class="titile" :ref="i">{{i}}</div>
          <div v-for="vv in v" :key="vv.id">
            <span class="zimu-chengshi" @click="hotcityname(vv.name)">{{vv.name}}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// import { IndexBar, IndexAnchor,Cell } from "vant";
import BScroll from "better-scroll";
export default {
  data(){
    return {
      isStart:false,
    }
  },
  props: ["citylist", "leeter"],
  components: {

  },
  methods:{
    //更改城市定位
    hotcityname(cityname){
      // console.log(cityname)
      this.$store.commit('changeCity',cityname)
    },
    handleTouchStart(){

    },
    handleTouchMove(){
   
    },
    handleTouchEnd(){

    }
},
  
  mounted() {

    this.scroll = new BScroll(this.$refs.wrapper);
  },
  watch: {

    leeter() {
      //   console.log('...')
      if (this.leeter) {
        console.log(this.$refs[this.leeter]);
        const element = this.$refs[this.leeter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>

<style lang='less' scoped>
.citynr {
    overflow: hidden;
    position: absolute;
    top: 1.35rem;
    left: 0;
    right: 0;
    bottom: 0;
  .titile {
    font-size: 0.25rem;
    background: #f4f4f4;
    padding: 0.1rem;
    border-top: 0.01rem solid #ddd;
    border-bottom: 0.01rem solid #ddd;
    padding: 0.1rem 0.3rem;
  }
  .weizhi {
    padding: 0.1rem 0.2rem;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    .chengshi {
      border: 0.01rem solid #ddd;
      border-radius: 0.05rem;
      width: 29%;
      margin: 0.1rem 0.1rem 0.1rem 0.1rem;
      height: 0.4rem;
      text-align: center;
      line-height: 0.4rem;
    }
  }
  .city-weizhi {
    .weizhi {
      // justify-content: space-between;
      .chengshi {
        border: 0.01rem solid #02a5c2;

        color: #02a5c2;
      }
    }
  }

  .hot-city {
    .titile {
    }

    .hots {
      span.chengshi {
      }
    }
  }

  .citys {
    .zimu {
      .titile {
      }

      span.zimu-chengshi {
        display: block;
        border-bottom: 0.01rem solid #ddd;
        padding: 0.2rem 0.3rem;
      }
    }
  }
}
</style>