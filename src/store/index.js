import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var name=localStorage.getItem('cityname')
export default new Vuex.Store({
  state: {
    cityname:name
  },
  mutations: {
    //更改城市定位
    changeCity(state,name){
      state.cityname=name
      localStorage.setItem('cityname',name)
    }
  },
  actions: {
  },
  modules: {
  }
})
