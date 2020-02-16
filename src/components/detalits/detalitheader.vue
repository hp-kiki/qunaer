<template>
  <div class="header">
     <i class="iconfont icon-fanhui" @click="$router.back()"></i>
     <span class="header-title">标题</span>
  </div>
</template>

<script>
export default {
//    mounted(){
//         window.addEventListener('scroll', this.handleScroll)
//    },
//    handleScroll(){
//        console.log(document.documentElement.scrollTop)
//    }
}
</script>

<style lang='less'  scoped>
.header{
    background: #00bcd4;
    height: .8rem;
    line-height: .8rem;
    display: flex;
    justify-content: space-around;
    padding: 0 .2rem;
    .iconfont{
        color: #fff;
    }
    .header-title{
      color: #fff;
      text-align: center;
      margin: 0 auto;

    }
}
</style>