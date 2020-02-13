<template>
  <div class="city">
    <cityheader class="header" @clickseacrh="clickseacrh" :value="value"></cityheader>
    <div class="neirong" v-if="saecr">
      <cityneirong class="nr" :citylist="citylist" :leeter="leeter"></cityneirong>
    </div>
    <zimu  :zimu="zimulist" class="zimus" @chang="onclick" v-if="saecr"></zimu>

    <div class="seaechname" v-if="!saecr">
        <div>
              <span class="zimu-chengshi" v-for="(item,i) in seacrh" :key="i" @click="hotcityname(item)">{{item}}</span>
        </div>
      <div v-if="seacrh.length<1">暂无城市数据</div>
    </div>
  
  </div>
</template>

<script>
import cityheader from "@/components/city/cityheader.vue";
import cityneirong from "@/components/city/cityneirong.vue";
import zimu from "@/components/city/zimu.vue";
import { citylist } from "@/api/home.js";
export default {
  data() {
    return {
      citylist: {},
      saecr: true,
      saecrhvalue: "",
      leeter:'',
      zimulist:[],
      value:''
    };
  },
  computed: {
    seacrh() {
      var seacrhlist = [];
      for (var key in this.citylist.cities) {
        // console.log(saecrhvalue)
        this.citylist.cities[key].forEach(element => {
            if (
              element.spell.indexOf(this.saecrhvalue) > -1 ||
              element.name.indexOf(this.saecrhvalue) > -1
            ) {
              seacrhlist.push(element.name);
            }
        });
      }
      return seacrhlist;
    }
  },
  methods: {
     //更改城市定位
    hotcityname(cityname){
      console.log(cityname)
      this.saecr=true

      this.$store.commit('changeCity',cityname)
     this.value=true
    },
      onclick(e){
        //   console.log()
          this.leeter=e.target.innerText
      },
    clickseacrh(value) {
      this.saecrhvalue = value;
      if (this.saecrhvalue) {
        this.saecr = false;
      } else {
        this.saecr = true;
      }
    }
  },
  components: {
    cityheader,
    cityneirong,
    zimu
  },
  async mounted() {
    var res = await citylist();
    this.citylist = res.data.data;
    //改造数据，以便来遍历字母的列表)
    for(var key in this.citylist.cities){
      // console.log(key)
      if(key==="A"){
         this.zimulist.push({key:key,iscolor:true})
      }else{
         this.zimulist.push({key:key,iscolor:false})
      }

    }
    //  this.cities=res.data.data.cities
    console.log(this.zimulist);
  }
};
</script>

<style lang='less' scoped>
body{

}
.header {
  position: fixed;
  width: 97%;
  z-index: 999;
}
.seaechname {
  padding-top: 1.35rem;
  .zimu-chengshi {
    display: block;
    border-bottom: 0.01rem solid #ddd;
    padding: 0.2rem 0.3rem;

  }
}
.city{

    .neirong {
  padding-top: 1.35rem;
  // padding:
  .nr {
  }

}
  /deep/.zimus {
      position: fixed;
      top:2.2rem;
      right:0rem;
  }
}

</style>