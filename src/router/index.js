import Vue from 'vue'
import Router from 'vue-router'
import addOrder from '@/components/addOrder'
import printOrder from '@/components/printOrder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'addOrder',
      component: addOrder
    },
    {
      path: '/printOrder',
      name: 'printOrder',
      component: printOrder
    }
  ]
})
