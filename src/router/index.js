import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import City from '../views/city.vue'
import Detalits from '../views/detalits.vue'

Vue.use(VueRouter)

const router = new VueRouter({
   routes : [
    // {
    //  path: '/404',
    //     component: () => import('@/views/404.vue'),
    //     hidden: true
    // },
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
    },
    {
      name:'Detalits',
      path:'/detalits',
      component:Detalits
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
