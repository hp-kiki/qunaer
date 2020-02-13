<template>
  <div class="city">
    <div class="cityheader">
      <div class="iconfont icon-fanhui" @click="$router.back()"></div>
      <div class="header-zhong">
        <span class="jingnei">城市选择</span>
      </div>
      <div></div>
    </div>
    <div class="secae">
      <!-- <input type="submit" value="Submit" /> -->
      <input type="text" placeholder="输入城市或者拼音名" class="search" v-model="saecrhvalue" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      saecrhvalue: ""
    };
  },
  mounted() {},
  watch: {
    value() {
      if (this.value) {
        this.saecrhvalue = "";
        console.log(this.saecrhvalue, this.value);
      }
    },
    saecrhvalue() {
      console.log(this.saecrhvalue);
      this.$emit("clickseacrh", this.saecrhvalue);
    }
  }
};
</script>

<style lang='less' scoped>
@import "~styles/variables.less";
.city {
  background: @bgColor;
  padding: 0.15rem 0.2rem;
  .cityheader {
    display: flex;
    justify-content: space-between;

    .iconfont {
      color: #ffffff;
    }
    .header-zhong {
      .jingnei {
        color: #ffffff;
        font-size: 0.35rem;
      }
    }
  }
  .secae {
    margin-top: 0.1rem;
    .search {
      width: 100%;
      border-radius: 0.1rem;
      height: 0.6rem;
      text-align: center;
    }
  }
}
</style>