import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'


// 使用路由
Vue.use(Router) 

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/',
      name: 'User',
      component: User
    }
  ],
  mode: 'history' // 去掉浏览器中的#
})
