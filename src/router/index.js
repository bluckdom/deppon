import Vue from 'vue'
import Router from 'vue-router'
import addOrder from '@/components/addOrder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'addOrder',
      component: addOrder
    }
  ]
})
