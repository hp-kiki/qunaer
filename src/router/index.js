import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import City from '../views/city.vue'

Vue.use(VueRouter)

const router = new VueRouter({
   routes : [
     {
      path:'/',
      redirect:{name:'Home'}
     },
    {
      name:'Home',
      path:'/home',
      component:Home
    },
    {
      name:'City',
      path:'/city',
      component:City
    }
  ]
})

export default router
