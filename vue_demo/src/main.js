// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
// 声明使用vue-resource
Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//使用路由【路由的好处就是直接跳转目的页面，不刷新】
  components: { App },
  template: '<App/>'
})
