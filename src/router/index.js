import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/Index'
    },
    {
      path:'/Index',
      component: resolve => require(['@/pages/Index.vue'], resolve),
    },
    {
      path: '/HelloWorld',
      component: resolve => require(['@/pages/HelloWorld'], resolve),
      meta:{
          title:'helloWorld'
      }
    }
  ]
})
