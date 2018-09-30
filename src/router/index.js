import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Show from '@/components/show'
import manage from '@/components/manage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage
    }
  ]
})
