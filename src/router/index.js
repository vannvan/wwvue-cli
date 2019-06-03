import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path:'/index',
      component: resolve => require(['@/components/index.vue'], resolve),
    },
    {
      path: '/HelloWorld',
      component: resolve => require(['@/components/views/HelloWorld'], resolve),
      meta:{
          title:'helloWorld'
      }
    }
  ]
})
