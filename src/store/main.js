import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import Axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const requireModule = require.context('./', false, /\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
 const moduleName = fileName.replace(/(\.\/|\.js)/g, '')
 modules[moduleName] = {
  ...requireModule(fileName).default
 }
})

const store = new Vuex.Store({
// 用不同的模块管理vuex存储数据
  modules: modules,
  plugins: [createPersistedState({
      storage: window.sessionStorage   //可改为localStorage
  })]
})

//切换路由的同时切换title
router.beforeEach(function (to, from, next) {
  if(to.meta.title){
    document.title = to.meta.title
  }
  store.commit('setPageSwitch',true)
  next()
})

router.afterEach(function (to) {
  store.commit('setPageSwitch',false)
})


//请求拦截
Axios.interceptors.request.use(config => {
  store.commit('setAjaxStatus',true)
  return config;
})
//响应拦截
Axios.interceptors.response.use(config => {
  //需要拦截的请求头
  store.commit('setAjaxStatus',false)
  return config
})

export default store;
