<template>
  <div class="hotselllist">
      <h4 class="hotsell-title">热销推荐</h4>
      <div class="hotsell">
          <div class="sell" v-for="item in hotselllist" :key="item.id">
              <img :src="item.imgUrl">
              <div class="sell-right">
                  <span>{{item.title}}</span>
                  <p>{{item.desc}}</p>
                   <span class="checkxq">查看详情</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['hotselllist']
}
</script>

<style lang='less' scoped>
.hotselllist {
  .hotsell-title {
      font-size: .26rem;
      padding: 0.2rem;
      background: #ececec;
  }

  .hotsell {
 
    .sell {
        display: flex;
        padding: 0.1rem;
        border-bottom: 0.01rem solid #ddd;
      img {
          width: 20%;
          height:1.45rem;
      }

      .sell-right {
          flex: 1;
          padding: 0.1rem 0.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        span {

        }

        p {
            font-size: .26rem;
            color: rgb(192, 192, 192);
        }

        .checkxq {
        background: #fc8400;
        border-radius: .1rem;
        color: #fff;
        padding: 0.1rem 0.2rem;
        width: 18%;
        text-align: center;
        }
      }
    }
  }
}
</style>