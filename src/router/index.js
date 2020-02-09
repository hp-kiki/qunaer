import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'


Vue.use(VueRouter)



const router = new VueRouter({
   routes : [
    {
      name:'Home',
      path:'/home',
      component:Home
    }
  ]
})

export default router
