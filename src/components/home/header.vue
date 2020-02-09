<template>
  <div class="header">
      <div class="iconfont icon-fanhui"></div>
      <div class="sreach">
          <i class="iconfont icon-sousuo"></i>
          <span class="seach-tishi">输入城市/景点/游玩/主题</span>
      </div>
      <div class="xiala">
          <span>三亚</span>
          <i class="iconfont icon-jiantou-up-down"></i>
      </div>
  </div>
</template>

<script>
export default {
   
}
</script>

<style lang='less' scoped>
@import '~styles/variables.less';
.header{
  display:flex;
 justify-content :space-between;
 background :@bgColor;
flex-direction:inherit;
align-items: center;
padding: .2rem;
  .sreach{
       background: #ffffff;
       height: .6rem;
       border-radius: .1rem;
       width: 75%;
       line-height: .6rem;
       padding-left: .2rem;
       color: #eee;
  }
  .iconfont,.xiala{
      color: #ffffff;
  }

}





   

</style>