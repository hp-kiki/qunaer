<template>
  <div class="detalitsliat">
      <div  v-for="(item,i) in list" :key="i">
          <div class="list">
          <span >{{item.title}}</span>
          </div>

          <div class="list-list" v-if="item.children">
              <detailList :list="item.children"></detailList>
          </div>
      </div>
  </div>
</template>

<script>
export default {
        name:'detailList',
      props: {
    list: Array
  },

    data(){
        return {
            categoryList: [{
          title: "成人票",
          children: [{
            title: "成人三馆联票",
            children: [{
              title: "成人三馆联票 - 某一连锁店销售"
            }]
          },{
            title: "成人五馆联票"
          }]
        }, {
          title: "学生票"
        }, {
          title: "儿童票"
        }, {
          title: "特惠票"
        }]
        }
    }

}
</script>

<style lang='less' scoped>
 .detalitsliat{
     height: 100%;
    //  z-index: 1000;
     .list{
         border-bottom: 1px solid #ddd;
         height: .6rem;
         line-height: .6rem;
     }
     .list-list{
         padding-left: .2rem;
     }
 }
</style>