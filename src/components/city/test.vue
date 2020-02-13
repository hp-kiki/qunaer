<template>
  <div v-if="goods">
    <aside ref="l_list">
      <ul>
        <li
          ref="l_item"
          :class="{'act':index === actli}"
          @click="change(index)"
          v-for="(item,index) in goods"
          :key="index"
        >
          <p>{{item.name}}</p>
        </li>
      </ul>
    </aside>
    <section class="r_list" ref="r_list">
      <div>
        <div v-for="(it,index) in goods" :key="index" ref="good">
          <p class="title">{{it.name}}</p>
          <ul>
            <li v-for="(item,index) in it.foods" :key="index" class="list">
              <div class="list_item flex" :class="index===it.foods.length-1?'last':''">
                <p @click="getDetails(item)">
                  <img :src="item.icon" alt />
                </p>
                <div>
                  <p class="name">{{item.name}}</p>
                  <p class="des">{{item.description}}</p>
                  <p class="sale">
                    月售{{item.sellCount}}份
                    <span>好评率{{item.rating}}%</span>
                  </p>
                  <p class="price">￥{{item.price}}</p>
                  <div class="add">
                    <add :food="item"></add>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Better from "better-scroll";
import add from "../addNum/addnum";
export default {
  name: "goods",
  data() {
    return {
      actli: 0,
      scrollY: 0,
      arr: [0],
      flag: true,
      obj: null,
      show: false
    };
  },
  components: { add },
  computed: {
    goods() {
      return this.$store.state.msg.goods;
    }
  },
  watch: {
    show() {
      if (this.show) {
        setTimeout(() => {
          new Better(this.$refs.detail, {
            click: true
          });
        });
      }
    }
  },
  methods: {
    change(index) {
      this.flag = false;
      this.actli = index;
      this.rgt.scrollToElement(this.$refs.good[index], 100, 0, 0);
      setTimeout(() => {
        this.flag = true;
      }, 100);
    },
    getDetails(it) {
      this.show = !this.show;
      this.obj = it;
    }
  },
  mounted() {
    setTimeout(() => {
      /* eslint-disable no-new */
      this.left = new Better(this.$refs.l_list, {
        click: true
      });
      this.rgt = new Better(this.$refs.r_list, {
        click: true,
        probeType: 3
      });
      this.$refs.good.forEach((el, index) => {
        this.arr.push(el.offsetHeight + this.arr[index]);
      });
      this.rgt.on("scroll", res => {
        if (this.flag) {
          console.log(res);
          this.scrollY = Math.abs(res.y);
          for (let i = 0; i < this.arr.length; i++) {
            if (this.scrollY > this.arr[i] && this.scrollY < this.arr[i + 1]) {
              this.actli = i;
              if (i === this.$refs.l_item.length - 2) {
                this.left.scrollToElement(this.$refs.l_item[1], 100, 0, 0);
              }
              if (i === 2) {
                this.left.scrollToElement(this.$refs.l_item[0], 100, 0, 0);
              }
            }
          }
        }
      });
    });
  }
};
</script>
