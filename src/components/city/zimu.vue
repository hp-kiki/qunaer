<template>
  <div class="zimu" ref="em">
      <em v-for="(item,i) in zimu" :key="i" @click="onclick" :class="{colortrue:item.iscolor}">{{item.key}}</em>
  </div>
</template>

<script>
export default {
    props:['zimu'],
    mounted(){},
    methods:{
        onclick(e){
              this.$emit('chang',e)
        //    console.log(e.target.innerText)
        //    console.log(this.zimu)
           //让当前的字母变成蓝色
           for(var i=0;i<this.zimu.length;i++){
               if(e.target.innerText===this.zimu[i].key){
                   this.zimu[i].iscolor=true
               }else{
                   this.zimu[i].iscolor=false
               }
           }
          
        },

    }
}
</script>

<style lang='less' scoped>
.zimu{
    em{
        
        display: block;
        padding: 0.05rem 0;
    }
}

.colortrue{
    color: #02a5c2;
}
.colorfalse{
    color: rgb(92, 92, 92);
}
</style>