import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'styles/iconfont.css'
import '@/mock/mock'
import axios from 'axios'
//公共样式
import 'styles/reset.css'
//由于移动端不同屏幕，假如在一倍屏幕下面1px是1px，那在2倍屏幕下1px就会变成2px，以下文件就是为了解决这个问题
import 'styles/border.css'
//由于移动端的click事件可能会出现延迟300毫秒，需要使用fastclick来解决
// 补充：
// 首先用这方法必须禁用缩放，大部分移动端能解决这个延迟问题部分苹果不支持。
import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
